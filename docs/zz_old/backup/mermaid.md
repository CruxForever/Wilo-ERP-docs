отличная идея. Ниже дал **ER-диаграмму** (Mermaid) + короткие примечания по ключам/кардинальностям и набором полезных индексов/внешних ключей (если захочешь — добавим в `ensure_schema`).

---

# Диаграмма связей (ER)

```mermaid
erDiagram
    ITEMS {
      TEXT item_id PK
      TEXT article UNIQUE
      TEXT name
      TEXT uom
      INT  is_produced
      TEXT routing_group
      TEXT ovh_group_code
    }

    BOM {
      TEXT parent_item_id FK -> ITEMS.item_id
      TEXT component_item_id FK -> ITEMS.item_id
      INT  level
      TEXT path
      REAL qty_per_unit
    }

    RM_PRICES {
      TEXT item_code FK -> ITEMS.item_id
      TEXT article
      TEXT uom
      REAL price
      TEXT currency
      TEXT source
      TEXT loaded_at
      %% уникальный ключ в твоей БД может быть (item_code, currency) ИЛИ без ограничения, если храним историю
    }

    ROUTING_FLAT {
      TEXT product_id FK -> ITEMS.item_id
      TEXT routing_name
      TEXT department_code
      REAL hours_per_unit
    }

    LABOR_RATES_SNAPSHOT {
      TEXT department_code PK
      REAL rate_per_hour
      TEXT currency
    }

    LABOR_COST_UNIT {
      TEXT product_id FK -> ITEMS.item_id
      TEXT department_code FK -> LABOR_RATES_SNAPSHOT.department_code
      REAL hours_total
      REAL rate_per_hour
      REAL cost_total
    }

    DEPR_COST_UNIT {
      TEXT product_id FK -> ITEMS.item_id
      TEXT department_code FK -> LABOR_RATES_SNAPSHOT.department_code
      REAL hours_total
      REAL rate_per_hour
      REAL cost_total
    }

    OPR_COST_UNIT {
      TEXT product_id FK -> ITEMS.item_id
      TEXT department_code FK -> LABOR_RATES_SNAPSHOT.department_code
      REAL hours_total
      REAL rate_per_hour
      REAL cost_total
    }

    OVH_FLAT {
      TEXT product_id FK -> ITEMS.item_id
      TEXT overhead_group
      REAL mat_cost
    }

    OVH_TARIFFS {
      TEXT overhead_group
      INT  year
      REAL scrap_share
      REAL depr_opr_share
      REAL log_share
      REAL adm_share
      %% (overhead_group, year) как естественный ключ
    }

    OVH_COST_UNIT {
      TEXT product_id FK -> ITEMS.item_id
      TEXT overhead_group_code
      REAL depr_opr_cost
      REAL log_cost
      REAL adm_cost
    }

    SCRAP_COST_UNIT {
      TEXT product_id FK -> ITEMS.item_id
      TEXT overhead_group_code
      REAL scrap_cost
    }

    PROD_BUDGET {
      TEXT product_id FK -> ITEMS.item_id
      TEXT month_code
      REAL qty
    }

    %% --------- связи ---------
    ITEMS ||--o{ BOM : "parent_item_id"
    ITEMS ||--o{ BOM : "component_item_id"

    ITEMS ||--o{ RM_PRICES : "item_code"
    ITEMS ||--o{ ROUTING_FLAT : "product_id"

    LABOR_RATES_SNAPSHOT ||--o{ ROUTING_FLAT : "department_code"
    LABOR_RATES_SNAPSHOT ||--o{ LABOR_COST_UNIT : "department_code"
    LABOR_RATES_SNAPSHOT ||--o{ DEPR_COST_UNIT  : "department_code"
    LABOR_RATES_SNAPSHOT ||--o{ OPR_COST_UNIT   : "department_code"

    ITEMS ||--o{ LABOR_COST_UNIT : "product_id"
    ITEMS ||--o{ DEPR_COST_UNIT  : "product_id"
    ITEMS ||--o{ OPR_COST_UNIT   : "product_id"

    ITEMS ||--o{ OVH_FLAT : "product_id"
    OVH_TARIFFS ||--o{ OVH_FLAT : "overhead_group"

    ITEMS ||--o{ OVH_COST_UNIT   : "product_id"
    ITEMS ||--o{ SCRAP_COST_UNIT : "product_id"

    ITEMS ||--o{ PROD_BUDGET : "product_id"
```

---

## Примечания по данным/кардинальностям

* **`items`** — корневой справочник. Во всех связях используем `item_id`. Для UI/Excel показ/поиск по `article`.
* **`bom`** — *многие-к-одному* к `items` и по `parent_item_id`, и по `component_item_id`. `path` хранит цепочку `item_id` (в UI выводим `path_article` — заменяем id → article).
* **`rm_prices`** — история цен материалов. В отчетах выбираем **последнюю по `loaded_at`** для `(item_code, currency)`.
* **`routing_flat`** — операции/трудоемкость на **единицу изделия**. Ставка труда берётся из `labor_rates_snapshot` по `department_code`.
* **`*_cost_unit`** — агрегаты «на единицу изделия»: прямой труд, аморт (производство), ОПР (цех).
* **`ovh_flat`** — база распределения по оверхед-группам (например, мат. база), тарифы — в `ovh_tariffs` по `(overhead_group, year)`.
* **`ovh_cost_unit` / `scrap_cost_unit`** — уже рассчитанные суммы на единицу (админ-аморт, логистика, управленческие; брак).
* **`prod_budget`** — план выпуска по месяцам на `product_id`.

---

## Рекомендованные индексы/ограничения (SQLite)

Ниже — набор, который даёт быстрые джойны и защищает консистентность. Прогоним их в `ensure_schema(conn)` (все с `IF NOT EXISTS` — безопасно):

```sql
-- ITEMS
CREATE UNIQUE INDEX IF NOT EXISTS ux_items_article ON items(article);

-- BOM
CREATE INDEX IF NOT EXISTS ix_bom_parent  ON bom(parent_item_id);
CREATE INDEX IF NOT EXISTS ix_bom_comp    ON bom(component_item_id);
-- (опционально) если path часто фильтруется по префиксу:
-- CREATE INDEX IF NOT EXISTS ix_bom_path ON bom(path);

-- PRICES (история)
CREATE INDEX IF NOT EXISTS ix_rm_prices_item_cur_dt ON rm_prices(item_code, currency, loaded_at);
-- Если хочешь жёстко одну цену на валюту: UNIQUE(item_code, currency)
-- CREATE UNIQUE INDEX IF NOT EXISTS ux_rm_prices_item_cur ON rm_prices(item_code, currency);

-- ROUTING / RATES
CREATE INDEX IF NOT EXISTS ix_routing_flat_prod  ON routing_flat(product_id);
CREATE INDEX IF NOT EXISTS ix_routing_flat_dept  ON routing_flat(department_code);
CREATE UNIQUE INDEX IF NOT EXISTS ux_labor_rates_dept ON labor_rates_snapshot(department_code);

-- COST UNITS
CREATE INDEX IF NOT EXISTS ix_labor_unit_prod_dept ON labor_cost_unit(product_id, department_code);
CREATE INDEX IF NOT EXISTS ix_depr_unit_prod_dept  ON depr_cost_unit(product_id, department_code);
CREATE INDEX IF NOT EXISTS ix_opr_unit_prod_dept   ON opr_cost_unit(product_id, department_code);

-- OVH
CREATE INDEX IF NOT EXISTS ix_ovh_flat_prod_group   ON ovh_flat(product_id, overhead_group);
CREATE UNIQUE INDEX IF NOT EXISTS ux_ovh_tariffs_group_year ON ovh_tariffs(overhead_group, year);
CREATE INDEX IF NOT EXISTS ix_ovh_cost_unit_prod    ON ovh_cost_unit(product_id);
CREATE INDEX IF NOT EXISTS ix_scrap_cost_unit_prod  ON scrap_cost_unit(product_id);

-- BUDGET
CREATE INDEX IF NOT EXISTS ix_budget_prod_month ON prod_budget(product_id, month_code);
```

> Внешние ключи в SQLite нужно включать `PRAGMA foreign_keys=ON;`. Если хочешь, добавим мягкие FK-проверки в `ensure_schema` (или «псевдо-FK» через валидаторы в `quality.py`).

---

## Где использовать диаграмму

* Вставь блок `mermaid` в `README_BG_Calc.md` → GitHub/Streamlit-Markdown отрисуют схему.
* Если хочешь, вынесем в `docs/db_schema.md` и добавим ещё одну диаграмму **потока расчётов** (ETL → материализация → калькуляции → отчёты).

Нужно дополнить схему специфичными таблицами (например, `routings`, `routing_tree`) — скажи, включу их и связи с `routing_flat`.

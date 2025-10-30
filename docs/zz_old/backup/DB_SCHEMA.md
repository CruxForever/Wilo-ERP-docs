# DB schema

_Schema built by_: `db.schema.ensure_schema`

## TABLE: `bom`
```sql
CREATE TABLE bom(
      parent_item_id    TEXT NOT NULL,
      component_item_id TEXT NOT NULL,
      qty_per_unit      REAL NOT NULL CHECK(qty_per_unit>=0),
      valid_from        TEXT NOT NULL,
      valid_to          TEXT NOT NULL,
      level             INTEGER NOT NULL,
      path              TEXT,
      PRIMARY KEY(parent_item_id, component_item_id, valid_from)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | parent_item_id | TEXT | 1 |  | 1 |
| 1 | component_item_id | TEXT | 1 |  | 2 |
| 2 | qty_per_unit | REAL | 1 |  | 0 |
| 3 | valid_from | TEXT | 1 |  | 3 |
| 4 | valid_to | TEXT | 1 |  | 0 |
| 5 | level | INTEGER | 1 |  | 0 |
| 6 | path | TEXT | 0 |  | 0 |

## TABLE: `bom_spec_components`
```sql
CREATE TABLE bom_spec_components(
      spec_code    TEXT NOT NULL,
      line_no      INTEGER NOT NULL,
      component_id TEXT NOT NULL,
      qty_per_spec REAL NOT NULL CHECK(qty_per_spec>=0),
      uom          TEXT,
      operation    TEXT,
      stage        TEXT,
      valid_from   TEXT NOT NULL DEFAULT '1900-01-01',
      valid_to     TEXT NOT NULL DEFAULT '2999-12-31',
      PRIMARY KEY(spec_code, line_no, valid_from)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | spec_code | TEXT | 1 |  | 1 |
| 1 | line_no | INTEGER | 1 |  | 2 |
| 2 | component_id | TEXT | 1 |  | 0 |
| 3 | qty_per_spec | REAL | 1 |  | 0 |
| 4 | uom | TEXT | 0 |  | 0 |
| 5 | operation | TEXT | 0 |  | 0 |
| 6 | stage | TEXT | 0 |  | 0 |
| 7 | valid_from | TEXT | 1 | '1900-01-01' | 3 |
| 8 | valid_to | TEXT | 1 | '2999-12-31' | 0 |

## TABLE: `bom_specs`
```sql
CREATE TABLE bom_specs(
      spec_code  TEXT PRIMARY KEY,
      product_id TEXT NOT NULL,
      batch_size REAL NOT NULL DEFAULT 1 CHECK(batch_size>0),
      batch_uom  TEXT,
      valid_from TEXT NOT NULL DEFAULT '1900-01-01',
      valid_to   TEXT NOT NULL DEFAULT '2999-12-31',
      is_default INTEGER NOT NULL DEFAULT 1 CHECK(is_default IN (0,1))
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | spec_code | TEXT | 0 |  | 1 |
| 1 | product_id | TEXT | 1 |  | 0 |
| 2 | batch_size | REAL | 1 | 1 | 0 |
| 3 | batch_uom | TEXT | 0 |  | 0 |
| 4 | valid_from | TEXT | 1 | '1900-01-01' | 0 |
| 5 | valid_to | TEXT | 1 | '2999-12-31' | 0 |
| 6 | is_default | INTEGER | 1 | 1 | 0 |

## TABLE: `dep_cc_map`
```sql
CREATE TABLE dep_cc_map (
      department_code TEXT PRIMARY KEY,  
      cc_id           TEXT NOT NULL      
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | department_code | TEXT | 0 |  | 1 |
| 1 | cc_id | TEXT | 1 |  | 0 |

## TABLE: `depr_cost_unit`
```sql
CREATE TABLE depr_cost_unit(
      product_id      TEXT NOT NULL,
      department_code TEXT NOT NULL,
      hours_total     REAL NOT NULL,
      rate_per_hour   REAL,
      currency        TEXT,
      cost_total      REAL,
      PRIMARY KEY(product_id, department_code)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | department_code | TEXT | 1 |  | 2 |
| 2 | hours_total | REAL | 1 |  | 0 |
| 3 | rate_per_hour | REAL | 0 |  | 0 |
| 4 | currency | TEXT | 0 |  | 0 |
| 5 | cost_total | REAL | 0 |  | 0 |

## TABLE: `depr_cost_unit_total`
```sql
CREATE TABLE depr_cost_unit_total(
      product_id   TEXT PRIMARY KEY,
      cost_total   REAL
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 0 |  | 1 |
| 1 | cost_total | REAL | 0 |  | 0 |

## TABLE: `depr_rates_snapshot`
```sql
CREATE TABLE depr_rates_snapshot (
            department_code     TEXT,
            cc_id               TEXT,
            rate_per_hour       REAL NOT NULL CHECK(rate_per_hour>=0),
            hours_year          REAL,
            personnel_cost_year REAL,
            bud_year            INTEGER,
            currency            TEXT NOT NULL DEFAULT 'RUB',
            source              TEXT,
            calc_at             TEXT,
            loaded_at           TEXT DEFAULT (datetime('now'))
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | department_code | TEXT | 0 |  | 0 |
| 1 | cc_id | TEXT | 0 |  | 0 |
| 2 | rate_per_hour | REAL | 1 |  | 0 |
| 3 | hours_year | REAL | 0 |  | 0 |
| 4 | personnel_cost_year | REAL | 0 |  | 0 |
| 5 | bud_year | INTEGER | 0 |  | 0 |
| 6 | currency | TEXT | 1 | 'RUB' | 0 |
| 7 | source | TEXT | 0 |  | 0 |
| 8 | calc_at | TEXT | 0 |  | 0 |
| 9 | loaded_at | TEXT | 0 | datetime('now') | 0 |

## TABLE: `items`
```sql
CREATE TABLE items(
      item_id     TEXT PRIMARY KEY,
      article     TEXT,
      name        TEXT,
      uom         TEXT,
      is_produced INTEGER NOT NULL DEFAULT 0
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | item_id | TEXT | 0 |  | 1 |
| 1 | article | TEXT | 0 |  | 0 |
| 2 | name | TEXT | 0 |  | 0 |
| 3 | uom | TEXT | 0 |  | 0 |
| 4 | is_produced | INTEGER | 1 | 0 | 0 |

## TABLE: `labor_rates`
```sql
CREATE TABLE labor_rates(
      period TEXT NOT NULL,
      department_code TEXT NOT NULL,
      rate_per_hour REAL NOT NULL CHECK(rate_per_hour>0),
      currency TEXT NOT NULL DEFAULT 'RUB',
      PRIMARY KEY(period, department_code)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | period | TEXT | 1 |  | 1 |
| 1 | department_code | TEXT | 1 |  | 2 |
| 2 | rate_per_hour | REAL | 1 |  | 0 |
| 3 | currency | TEXT | 1 | 'RUB' | 0 |

## TABLE: `labor_rates_snapshot`
```sql
CREATE TABLE labor_rates_snapshot (
      department_code      TEXT,
      cc_id                TEXT,
      rate_per_hour        REAL,
      hours_year           REAL,
      personnel_cost_year  REAL,
      bud_year             INTEGER,
      source               TEXT,
      calc_at              TEXT
    , "currency" TEXT)
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | department_code | TEXT | 0 |  | 0 |
| 1 | cc_id | TEXT | 0 |  | 0 |
| 2 | rate_per_hour | REAL | 0 |  | 0 |
| 3 | hours_year | REAL | 0 |  | 0 |
| 4 | personnel_cost_year | REAL | 0 |  | 0 |
| 5 | bud_year | INTEGER | 0 |  | 0 |
| 6 | source | TEXT | 0 |  | 0 |
| 7 | calc_at | TEXT | 0 |  | 0 |
| 8 | currency | TEXT | 0 |  | 0 |

## TABLE: `mo_catalog`
```sql
CREATE TABLE mo_catalog (
        before_item_id TEXT NOT NULL,
        after_item_id  TEXT NOT NULL,
        is_active      INTEGER NOT NULL DEFAULT 1,
        source         TEXT,
        loaded_at      TEXT NOT NULL,
        UNIQUE(before_item_id, after_item_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | before_item_id | TEXT | 1 |  | 0 |
| 1 | after_item_id | TEXT | 1 |  | 0 |
| 2 | is_active | INTEGER | 1 | 1 | 0 |
| 3 | source | TEXT | 0 |  | 0 |
| 4 | loaded_at | TEXT | 1 |  | 0 |

## TABLE: `mo_cost_unit`
```sql
CREATE TABLE mo_cost_unit (
        product_id          TEXT NOT NULL,
        component_item_id   TEXT NOT NULL,
        qty_per_unit        REAL NOT NULL,
        price               REAL NOT NULL,
        amount              REAL NOT NULL,
        currency            TEXT NOT NULL DEFAULT 'RUB',
        computed_at         TEXT NOT NULL,
        PRIMARY KEY (product_id, component_item_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | component_item_id | TEXT | 1 |  | 2 |
| 2 | qty_per_unit | REAL | 1 |  | 0 |
| 3 | price | REAL | 1 |  | 0 |
| 4 | amount | REAL | 1 |  | 0 |
| 5 | currency | TEXT | 1 | 'RUB' | 0 |
| 6 | computed_at | TEXT | 1 |  | 0 |

## TABLE: `mo_prices_history`
```sql
CREATE TABLE mo_prices_history (
        after_item_id   TEXT NOT NULL,
        price           REAL NOT NULL,
        currency        TEXT NOT NULL DEFAULT 'RUB',
        vendor          TEXT,
        effective_from  TEXT,
        effective_to    TEXT,
        source          TEXT,
        loaded_at       TEXT NOT NULL
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | after_item_id | TEXT | 1 |  | 0 |
| 1 | price | REAL | 1 |  | 0 |
| 2 | currency | TEXT | 1 | 'RUB' | 0 |
| 3 | vendor | TEXT | 0 |  | 0 |
| 4 | effective_from | TEXT | 0 |  | 0 |
| 5 | effective_to | TEXT | 0 |  | 0 |
| 6 | source | TEXT | 0 |  | 0 |
| 7 | loaded_at | TEXT | 1 |  | 0 |

## TABLE: `opex_budget`
```sql
CREATE TABLE opex_budget (
    id                       INTEGER PRIMARY KEY AUTOINCREMENT,
    load_id                  TEXT    NOT NULL,
    cc_id                    TEXT    NOT NULL,                 -- FK → cc_nodes.cc_id
    elem_id                  TEXT    NOT NULL,                 -- FK → elem_nodes.elem_id
    bud_year                 INTEGER NOT NULL,                 -- например, 2026
    amount                   REAL    NOT NULL,                 -- нормализованная сумма

    text_note                TEXT,
    comments                 TEXT,
    supplier_text            TEXT,
    source_sheet             TEXT,

    created_at               INTEGER NOT NULL DEFAULT (strftime('%s','now')),

    FOREIGN KEY (cc_id)   REFERENCES cc_nodes(cc_id),
    FOREIGN KEY (elem_id) REFERENCES elem_nodes(elem_id)
)
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | id | INTEGER | 0 |  | 1 |
| 1 | load_id | TEXT | 1 |  | 0 |
| 2 | cc_id | TEXT | 1 |  | 0 |
| 3 | elem_id | TEXT | 1 |  | 0 |
| 4 | bud_year | INTEGER | 1 |  | 0 |
| 5 | amount | REAL | 1 |  | 0 |
| 6 | text_note | TEXT | 0 |  | 0 |
| 7 | comments | TEXT | 0 |  | 0 |
| 8 | supplier_text | TEXT | 0 |  | 0 |
| 9 | source_sheet | TEXT | 0 |  | 0 |
| 10 | created_at | INTEGER | 1 | strftime('%s','now') | 0 |

**Foreign keys**:
- `elem_id` → `elem_nodes(elem_id)` (on update NO ACTION, on delete NO ACTION, match NONE)
- `cc_id` → `cc_nodes(cc_id)` (on update NO ACTION, on delete NO ACTION, match NONE)

## TABLE: `opex_staging`
```sql
CREATE TABLE opex_staging (
    id                       INTEGER PRIMARY KEY AUTOINCREMENT,
    load_id                  TEXT    NOT NULL,                 -- UUID загрузки
    sheet_name               TEXT,                             -- имя листа Excel
    cc_id                    TEXT,                             -- CC из исходника
    cost_type                TEXT,
    account_descr            TEXT,
    bud_2026                 REAL,                             -- сумма из колонки 'BUD 2026'
    text_note                TEXT,                             -- 'Text'
    comments                 TEXT,                             -- 'Comments'
    supplier_text            TEXT,                             -- 'Suppliers/Text'

    mapped_elem_id           TEXT,                             -- результат правил (elem_id) или NULL

    -- флаги валидации
    missing_cc               INTEGER NOT NULL DEFAULT 0,       -- 1 если CC не найден в БД
    unmapped_elem            INTEGER NOT NULL DEFAULT 0,       -- 1 если правило не сработало
    bad_amount               INTEGER NOT NULL DEFAULT 0,       -- 1 если bud_2026 пуст/нечисло
    dup_candidate            INTEGER NOT NULL DEFAULT 0,       -- 1 если потенциальный дубль

    created_at               INTEGER NOT NULL DEFAULT (strftime('%s','now')),

    -- мягкие FK (без ON DELETE/UPDATE CASCADE, чтобы staging не падал при админ-операциях)
    FOREIGN KEY (cc_id)       REFERENCES cc_nodes(cc_id),
    FOREIGN KEY (mapped_elem_id) REFERENCES elem_nodes(elem_id)
)
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | id | INTEGER | 0 |  | 1 |
| 1 | load_id | TEXT | 1 |  | 0 |
| 2 | sheet_name | TEXT | 0 |  | 0 |
| 3 | cc_id | TEXT | 0 |  | 0 |
| 4 | cost_type | TEXT | 0 |  | 0 |
| 5 | account_descr | TEXT | 0 |  | 0 |
| 6 | bud_2026 | REAL | 0 |  | 0 |
| 7 | text_note | TEXT | 0 |  | 0 |
| 8 | comments | TEXT | 0 |  | 0 |
| 9 | supplier_text | TEXT | 0 |  | 0 |
| 10 | mapped_elem_id | TEXT | 0 |  | 0 |
| 11 | missing_cc | INTEGER | 1 | 0 | 0 |
| 12 | unmapped_elem | INTEGER | 1 | 0 | 0 |
| 13 | bad_amount | INTEGER | 1 | 0 | 0 |
| 14 | dup_candidate | INTEGER | 1 | 0 | 0 |
| 15 | created_at | INTEGER | 1 | strftime('%s','now') | 0 |

**Foreign keys**:
- `mapped_elem_id` → `elem_nodes(elem_id)` (on update NO ACTION, on delete NO ACTION, match NONE)
- `cc_id` → `cc_nodes(cc_id)` (on update NO ACTION, on delete NO ACTION, match NONE)

## TABLE: `opr_cost_unit`
```sql
CREATE TABLE opr_cost_unit(
      product_id      TEXT NOT NULL,
      department_code TEXT NOT NULL,
      hours_total     REAL NOT NULL,
      rate_per_hour   REAL,
      currency        TEXT,
      cost_total      REAL,
      PRIMARY KEY(product_id, department_code)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | department_code | TEXT | 1 |  | 2 |
| 2 | hours_total | REAL | 1 |  | 0 |
| 3 | rate_per_hour | REAL | 0 |  | 0 |
| 4 | currency | TEXT | 0 |  | 0 |
| 5 | cost_total | REAL | 0 |  | 0 |

## TABLE: `opr_cost_unit_total`
```sql
CREATE TABLE opr_cost_unit_total(
      product_id   TEXT PRIMARY KEY,
      cost_total   REAL
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 0 |  | 1 |
| 1 | cost_total | REAL | 0 |  | 0 |

## TABLE: `opr_rates_snapshot`
```sql
CREATE TABLE opr_rates_snapshot (
            department_code     TEXT,
            cc_id               TEXT,
            rate_per_hour       REAL NOT NULL CHECK(rate_per_hour>=0),
            hours_year          REAL,
            personnel_cost_year REAL,
            bud_year            INTEGER,
            currency            TEXT NOT NULL DEFAULT 'RUB',
            source              TEXT,
            calc_at             TEXT,
            loaded_at           TEXT DEFAULT (datetime('now'))
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | department_code | TEXT | 0 |  | 0 |
| 1 | cc_id | TEXT | 0 |  | 0 |
| 2 | rate_per_hour | REAL | 1 |  | 0 |
| 3 | hours_year | REAL | 0 |  | 0 |
| 4 | personnel_cost_year | REAL | 0 |  | 0 |
| 5 | bud_year | INTEGER | 0 |  | 0 |
| 6 | currency | TEXT | 1 | 'RUB' | 0 |
| 7 | source | TEXT | 0 |  | 0 |
| 8 | calc_at | TEXT | 0 |  | 0 |
| 9 | loaded_at | TEXT | 0 | datetime('now') | 0 |

## TABLE: `ovh_cost_unit`
```sql
CREATE TABLE ovh_cost_unit (
        product_id TEXT PRIMARY KEY,
        depr_opr_cost REAL NOT NULL DEFAULT 0.0,  -- Амортизация ОПР
        log_cost REAL NOT NULL DEFAULT 0.0,       -- ОХР логистика
        adm_cost REAL NOT NULL DEFAULT 0.0        -- ОХР управленческие
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 0 |  | 1 |
| 1 | depr_opr_cost | REAL | 1 | 0.0 | 0 |
| 2 | log_cost | REAL | 1 | 0.0 | 0 |
| 3 | adm_cost | REAL | 1 | 0.0 | 0 |

## TABLE: `ovh_flat`
```sql
CREATE TABLE ovh_flat (
        product_id TEXT NOT NULL,
        overhead_group TEXT NOT NULL,
        mat_cost REAL NOT NULL DEFAULT 0.0,
        PRIMARY KEY (product_id, overhead_group)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | overhead_group | TEXT | 1 |  | 2 |
| 2 | mat_cost | REAL | 1 | 0.0 | 0 |

## TABLE: `ovh_tariffs`
```sql
CREATE TABLE ovh_tariffs (
        overhead_group TEXT NOT NULL,
        year INTEGER NOT NULL,
        scrap_share REAL,       -- Брак: от материалов
        depr_opr_share REAL,    -- Амортизация ОПР: от материалов
        log_share REAL,         -- ОХР логистика: от материалов
        adm_share REAL,         -- ОХР управленч.: от (труд + амортизация ОПР_по_группе)
        PRIMARY KEY (overhead_group, year)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | overhead_group | TEXT | 1 |  | 1 |
| 1 | year | INTEGER | 1 |  | 2 |
| 2 | scrap_share | REAL | 0 |  | 0 |
| 3 | depr_opr_share | REAL | 0 |  | 0 |
| 4 | log_share | REAL | 0 |  | 0 |
| 5 | adm_share | REAL | 0 |  | 0 |

## TABLE: `personnel_monthly`
```sql
CREATE TABLE personnel_monthly(
            cc_id   TEXT NOT NULL,
            ym      TEXT NOT NULL,         -- 'YYYY-MM'
            headcount REAL NOT NULL CHECK(headcount>=0),
            source  TEXT,
            note    TEXT,
            loaded_at TEXT DEFAULT (datetime('now')),
            PRIMARY KEY(cc_id, ym)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | cc_id | TEXT | 1 |  | 1 |
| 1 | ym | TEXT | 1 |  | 2 |
| 2 | headcount | REAL | 1 |  | 0 |
| 3 | source | TEXT | 0 |  | 0 |
| 4 | note | TEXT | 0 |  | 0 |
| 5 | loaded_at | TEXT | 0 | datetime('now') | 0 |

## TABLE: `prod_budget`
```sql
CREATE TABLE prod_budget (
        product_id   TEXT NOT NULL,
        month_code   TEXT NOT NULL,   -- 'YYYY-MM' (например '2026-01')
        qty          REAL NOT NULL DEFAULT 0,
        PRIMARY KEY (product_id, month_code)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | month_code | TEXT | 1 |  | 2 |
| 2 | qty | REAL | 1 | 0 | 0 |

## TABLE: `rm_prices`
```sql
CREATE TABLE rm_prices(
      item_code TEXT NOT NULL,
      article   TEXT,
      uom       TEXT,
      price     REAL NOT NULL CHECK(price>0),
      currency  TEXT NOT NULL DEFAULT 'RUB',
      source    TEXT,
      loaded_at TEXT DEFAULT (datetime('now')),
      PRIMARY KEY(item_code, currency)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | item_code | TEXT | 1 |  | 1 |
| 1 | article | TEXT | 0 |  | 0 |
| 2 | uom | TEXT | 0 |  | 0 |
| 3 | price | REAL | 1 |  | 0 |
| 4 | currency | TEXT | 1 | 'RUB' | 2 |
| 5 | source | TEXT | 0 |  | 0 |
| 6 | loaded_at | TEXT | 0 | datetime('now') | 0 |

## TABLE: `routing_operations`
```sql
CREATE TABLE routing_operations(
      routing_op_id INTEGER PRIMARY KEY AUTOINCREMENT,
      routing_id    INTEGER NOT NULL,
      seq           INTEGER NOT NULL,
      operation     TEXT NOT NULL,
      department    TEXT,
      hours         REAL NOT NULL DEFAULT 0 CHECK(hours>=0),
      UNIQUE(routing_id, seq)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | routing_op_id | INTEGER | 0 |  | 1 |
| 1 | routing_id | INTEGER | 1 |  | 0 |
| 2 | seq | INTEGER | 1 |  | 0 |
| 3 | operation | TEXT | 1 |  | 0 |
| 4 | department | TEXT | 0 |  | 0 |
| 5 | hours | REAL | 1 | 0 | 0 |

## TABLE: `routing_tree`
```sql
CREATE TABLE routing_tree(
      root_product_id  TEXT,
      node_product_id  TEXT,
      level            INTEGER,
      qty_per_unit     REAL,
      path             TEXT,
      routing_id       TEXT,
      routing_group    TEXT,
      routing_name     TEXT,
      PRIMARY KEY(root_product_id, node_product_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | root_product_id | TEXT | 0 |  | 1 |
| 1 | node_product_id | TEXT | 0 |  | 2 |
| 2 | level | INTEGER | 0 |  | 0 |
| 3 | qty_per_unit | REAL | 0 |  | 0 |
| 4 | path | TEXT | 0 |  | 0 |
| 5 | routing_id | TEXT | 0 |  | 0 |
| 6 | routing_group | TEXT | 0 |  | 0 |
| 7 | routing_name | TEXT | 0 |  | 0 |

## TABLE: `routings`
```sql
CREATE TABLE routings(
      routing_id   INTEGER PRIMARY KEY AUTOINCREMENT,
      routing_group TEXT NOT NULL,
      spec_code     TEXT,
      item_id       TEXT
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | routing_id | INTEGER | 0 |  | 1 |
| 1 | routing_group | TEXT | 1 |  | 0 |
| 2 | spec_code | TEXT | 0 |  | 0 |
| 3 | item_id | TEXT | 0 |  | 0 |

## TABLE: `run_history`
```sql
CREATE TABLE run_history(
      run_id      TEXT PRIMARY KEY,
      started_at  TEXT,
      ended_at    TEXT,
      scope       TEXT,             -- e.g. "all_produced" | "explicit_list"
      params_json TEXT,
      status      TEXT              -- "ok" | "error" | "partial"
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | run_id | TEXT | 0 |  | 1 |
| 1 | started_at | TEXT | 0 |  | 0 |
| 2 | ended_at | TEXT | 0 |  | 0 |
| 3 | scope | TEXT | 0 |  | 0 |
| 4 | params_json | TEXT | 0 |  | 0 |
| 5 | status | TEXT | 0 |  | 0 |

## TABLE: `run_log`
```sql
CREATE TABLE run_log(
      run_id      TEXT,
      step        TEXT,             -- "bom" | "tree" | "flat" | "hours" | "labor_cost" | "opr_cost" | "depr_cost"
      product_id  TEXT,
      level       TEXT,             -- "INFO" | "WARN" | "ERROR"
      msg         TEXT,
      extra_json  TEXT,
      ts          TEXT
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | run_id | TEXT | 0 |  | 0 |
| 1 | step | TEXT | 0 |  | 0 |
| 2 | product_id | TEXT | 0 |  | 0 |
| 3 | level | TEXT | 0 |  | 0 |
| 4 | msg | TEXT | 0 |  | 0 |
| 5 | extra_json | TEXT | 0 |  | 0 |
| 6 | ts | TEXT | 0 |  | 0 |

## TABLE: `scrap_cost_unit`
```sql
CREATE TABLE scrap_cost_unit (
        product_id TEXT PRIMARY KEY,
        scrap_cost REAL NOT NULL DEFAULT 0.0
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 0 |  | 1 |
| 1 | scrap_cost | REAL | 1 | 0.0 | 0 |

## TABLE: `sqlite_sequence`
```sql
CREATE TABLE sqlite_sequence(name,seq)
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | name |  | 0 |  | 0 |
| 1 | seq |  | 0 |  | 0 |

## TABLE: `transfer_batches`
```sql
CREATE TABLE transfer_batches(
            batch_id   TEXT PRIMARY KEY,   -- UUID
            bud_year   INTEGER NOT NULL,
            rule_id    INTEGER NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            created_by TEXT,
            comment    TEXT,
            FOREIGN KEY(rule_id) REFERENCES transfer_rules(rule_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | batch_id | TEXT | 0 |  | 1 |
| 1 | bud_year | INTEGER | 1 |  | 0 |
| 2 | rule_id | INTEGER | 1 |  | 0 |
| 3 | created_at | TEXT | 0 | datetime('now') | 0 |
| 4 | created_by | TEXT | 0 |  | 0 |
| 5 | comment | TEXT | 0 |  | 0 |

**Foreign keys**:
- `rule_id` → `transfer_rules(rule_id)` (on update NO ACTION, on delete NO ACTION, match NONE)

## TABLE: `transfer_opex_items`
```sql
CREATE TABLE transfer_opex_items(
            batch_id     TEXT NOT NULL,
            from_cc_id   TEXT NOT NULL,
            to_cc_id     TEXT NOT NULL,
            elem_id      TEXT NOT NULL,
            amount_delta REAL NOT NULL,
            PRIMARY KEY (batch_id, from_cc_id, to_cc_id, elem_id),
            FOREIGN KEY (batch_id) REFERENCES transfer_batches(batch_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | batch_id | TEXT | 1 |  | 1 |
| 1 | from_cc_id | TEXT | 1 |  | 2 |
| 2 | to_cc_id | TEXT | 1 |  | 3 |
| 3 | to_elem_id | TEXT | 0 |  | 0 |
| 4 | elem_id | TEXT | 1 |  | 4 |
| 5 | amount_delta | REAL | 1 |  | 0 |

**Foreign keys**:
- `batch_id` → `transfer_batches(batch_id)` (on update NO ACTION, on delete NO ACTION, match NONE)

## TABLE: `transfer_personnel_items`
```sql
CREATE TABLE "transfer_personnel_items"(
            id              INTEGER PRIMARY KEY AUTOINCREMENT,
            batch_id        TEXT NOT NULL,
            from_cc_id      TEXT,            -- в старых записях могло быть NULL
            to_cc_id        TEXT NOT NULL,
            headcount_delta REAL NOT NULL,
            FOREIGN KEY(batch_id) REFERENCES transfer_batches(batch_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | id | INTEGER | 0 |  | 1 |
| 1 | batch_id | TEXT | 1 |  | 0 |
| 2 | from_cc_id | TEXT | 0 |  | 0 |
| 3 | to_cc_id | TEXT | 1 |  | 0 |
| 4 | headcount_delta | REAL | 1 |  | 0 |

**Foreign keys**:
- `batch_id` → `transfer_batches(batch_id)` (on update NO ACTION, on delete NO ACTION, match NONE)

## TABLE: `transfer_rules`
```sql
CREATE TABLE transfer_rules(
            rule_id        INTEGER PRIMARY KEY AUTOINCREMENT,
            name           TEXT NOT NULL,
            donor_cc_id    TEXT NOT NULL,
            enabled        INTEGER NOT NULL DEFAULT 1,
            scope          TEXT DEFAULT 'direct_personnel',
            recipient_cc_id TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | rule_id | INTEGER | 0 |  | 1 |
| 1 | name | TEXT | 1 |  | 0 |
| 2 | donor_cc_id | TEXT | 1 |  | 0 |
| 3 | enabled | INTEGER | 1 | 1 | 0 |
| 4 | scope | TEXT | 0 | 'direct_personnel' | 0 |
| 5 | recipient_cc_id | TEXT | 0 |  | 0 |

## VIEW: `mo_last_price_current`
```sql
CREATE VIEW mo_last_price_current AS
    WITH ranked AS (
        SELECT *, ROW_NUMBER() OVER (
            PARTITION BY after_item_id ORDER BY datetime(loaded_at) DESC
        ) rn
        FROM mo_prices_history
    )
    SELECT after_item_id, price, currency, vendor, source, loaded_at
    FROM ranked WHERE rn = 1
```

## VIEW: `personnel_yearly`
```sql
CREATE VIEW personnel_yearly AS
        SELECT TRIM(cc_id) AS cc_id,
               CAST(substr(TRIM(ym), 1, 4) AS INTEGER) AS bud_year,
               AVG(headcount) AS headcount_avg_year
        FROM personnel_monthly
        GROUP BY TRIM(cc_id), CAST(substr(TRIM(ym), 1, 4) AS INTEGER)
```

## VIEW: `personnel_yearly_effective`
```sql
CREATE VIEW personnel_yearly_effective AS
        WITH base AS (
            SELECT TRIM(cc_id) AS cc_id,
                   CAST(substr(TRIM(ym), 1, 4) AS INTEGER) AS bud_year,
                   AVG(headcount) AS headcount_avg_year
            FROM personnel_monthly
            GROUP BY TRIM(cc_id), CAST(substr(TRIM(ym), 1, 4) AS INTEGER)
        ),
        delta_in AS (
            SELECT TRIM(i.to_cc_id) AS cc_id,
                   CAST(REPLACE(TRIM(b.bud_year), ',', '.') AS INTEGER) AS bud_year,
                   SUM(i.headcount_delta) AS delta
            FROM transfer_personnel_items i
            JOIN transfer_batches b ON b.batch_id = i.batch_id
            GROUP BY TRIM(i.to_cc_id), CAST(REPLACE(TRIM(b.bud_year), ',', '.') AS INTEGER)
        ),
        delta_out AS (
            SELECT TRIM(i.from_cc_id) AS cc_id,
                   CAST(REPLACE(TRIM(b.bud_year), ',', '.') AS INTEGER) AS bud_year,
                   -SUM(i.headcount_delta) AS delta
            FROM transfer_personnel_items i
            JOIN transfer_batches b ON b.batch_id = i.batch_id
            WHERE i.from_cc_id IS NOT NULL
            GROUP BY TRIM(i.from_cc_id), CAST(REPLACE(TRIM(b.bud_year), ',', '.') AS INTEGER)
        ),
        deltas AS (
            SELECT cc_id, bud_year, SUM(delta) AS headcount_delta_year
            FROM (
                SELECT * FROM delta_in
                UNION ALL
                SELECT * FROM delta_out
            )
            GROUP BY cc_id, bud_year
        ),
        keys AS (
            SELECT cc_id, bud_year FROM base
            UNION
            SELECT cc_id, bud_year FROM deltas
        )
        SELECT k.cc_id,
               k.bud_year,
               COALESCE(b.headcount_avg_year, 0) + COALESCE(d.headcount_delta_year, 0)
                   AS headcount_avg_year_effective
        FROM keys k
        LEFT JOIN base   b ON b.cc_id = k.cc_id AND b.bud_year = k.bud_year
        LEFT JOIN deltas d ON d.cc_id = k.cc_id AND d.bud_year = k.bud_year
```

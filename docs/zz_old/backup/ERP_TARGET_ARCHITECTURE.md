# Wilo-ERP — Target Architecture (ERP-grade)

**Status:** Draft  
**Owner:** Petr Podolyakin  
**Last updated:** 2025-10-06

## 0. Goals
1) Полноценная ERP-ось: **План → Факт (закрытие периода) → История → Сравнение (драйверы/факторы)**.  
2) Прозрачная трассировка: от строки исходника до статьи себестоимости/элемента затрат и назад.  
3) Управляемая сложность распределений: несколько наборов правил (по часам, по мат.стоимости, по CC и т.п.).  
4) Версионирование и воспроизводимость: снапшоты, сценарии, SCD-справочники.

## 1. Layered Model
**L0 — Sources (files/1C)**: Excel/CSV/TXT выгрузки.  
**L1 — Staging (raw)**: `*_staging` таблицы, 1:1 к источникам, с `load_id`, `source`, `loaded_at`.  
**L2 — Canonical (normalized)**: нормализованные факты/справочники, ключи и ссылки.  
**L3 — Calc (derived)**: материализации, аллокации, тарифы, драйверные расчёты.  
**L4 — Semantic Views (`v_*`)**: стабильные витрины для отчётности и сверок.  
**L5 — Exports/Reports**: Excel/CSV/визуал — только чтение `v_*`.

## 2. Data Model (star-ish + lineage)
### 2.1 Dimensions (SCD2 где нужно)
- `dim_date(y, m, month_code)`  
- `dim_item(product_id, sku, cg_id, ... )`  
- `dim_cc(cc_id, cc_name, cc_path, is_leaf)`  
- `dim_elem(elem_id, elem_group, ...)`  
- `dim_rule(rule_id, rule_set, version, driver_type, valid_from/to)`  
- `dim_driver(driver_id, name, unit, description)`  
- `dim_scenario(scn_id, type: plan/forecast/actual, code, version)`

### 2.2 Facts (grain и ключи)
- `fact_opex` — зерно: (period, cc_id, elem_id, scenario) — суммы по источнику (до распределений).  
- `fact_prod_budget` — зерно: (period, product_id, scenario) — объёмы.  
- `fact_prices_rm` — зерно: (period or validity, item_id, scenario) — цены RM.  
- `fact_calc_alloc_in` — вход в аллокации (копия fact_opex + context).  
- `fact_calc_alloc_out` — результат распределений: зерно (period, product_id, elem_id, scenario, rule_id).  
- `fact_cogs_unit` — себестоимость на ед.: (period, product_id, scenario) + разрез по статьям.  
- `fact_close_actuals` — фактические значения (аналог плановых по структуре).

### 2.3 Lineage & Audit
- `etl_run_history(run_id, started_at, src, params, status)`  
- `lineage_links(src_table, src_pk, dst_table, dst_pk, rule_id, run_id)` — карта происхождения строки.

## 3. Allocation Engine (rules & drivers)
- **Rule Set**: `rule_set` (имя) + `version` → активируется для расчёта.  
- **Rule**: `rule_id`, `cost_filter` (по cc/elem/descr), `driver_type` (hours/material_cost/qty/custom SQL), `split_key` (product_id/cc_id), `proportion` (weighting).  
- **Driver Library**: `driver_hours(period, cc_id, product_id)`, `driver_matcost(...)`, `driver_qty(...)`, `driver_area_share(...)` (для зданий/сооружений).  
- **DSL** (минимальный): YAML с фильтрами и ссылками на драйверы (см. шаблон в приложении).

## 4. Period Close Workflow
1) L1: загрузить фактические `opex`, `hours`, `prices`, `outputs` за период (с `load_id`).  
2) L2: нормализовать → `fact_opex`, `fact_prices_rm`, `fact_prod_budget`.  
3) L3: применить **активный набор правил** `rule_set/version` → `fact_calc_alloc_out`.  
4) L3: собрать `fact_cogs_unit` (unit cost) и агрегаты по статьям.  
5) L4: витрины разниц: `v_variance_volume_mix`, `v_variance_price_usage`, `v_opex_by_cc_elem_delta` (план vs факт).

## 5. Variance Framework (drivers of change)
- **Volume (объём)** — пересчёт плана с фактическими объёмами (фиксируя цены/тарифы).  
- **Mix (структура выпуска)** — эффект изменения структуры product mix.  
- **Price (цены RM/MO)** — эффект цен.  
- **Rate/Tariff** — труд/оверхэд тарифы.  
Витрины: `v_variance_bridge` с колонками: base, step, effect, result.

## 6. Costing Structure (more articles)
- Расширяем статьи: RM, MO, Labor, OPR Depreciation, Logistics OH, Admin OH, Building/Facilities, Scrap, Other.  
- Маппинг elem_id → article (таблица `elem_to_article`). Несколько статей из одной строки — через `split_rules` (см. DSL).

## 7. Special Case — Buildings & Facilities
- Вводим **долю обслуживания по продукту**: `driver_area_share(product_id, period)` или фикс на CC.  
- Правило: из CC «Facilities» распределять по этому драйверу.

## 8. Contracts & Views (L4)
- `v_cogs_unit(period, product_id, scenario)` — детальная декомпозиция по статьям.  
- `v_alloc_lineage(period, product_id, elem_id, rule_id)` — трассировка.  
- `v_variance_*` — мостики факторов.  
- `v_recon_checks` — сверки: суммы до/после аллокации, остатки.

## 9. Governance
- ADR на: звездообразную модель, движок правил, мост факторов, политику SCD, стандарты `v_*`.  
- Версионирование `rule_set`: неизменность после закрытия периода.  
- Каталог драйверов — как публичный API внутри `calc/driver_lib.py`.

## 10. Roadmap (первые 5 спринтов)
1) Спринт 1: L1/L2 ядро для плана/факта + dim_* + fact_* (минимальный набор).  
2) Спринт 2: Allocation Engine v1 (hours/material_cost/qty) + lineage.  
3) Спринт 3: COGS Unit + `v_cogs_unit`, `v_alloc_lineage`.  
4) Спринт 4: Variance Framework + `v_variance_bridge`.  
5) Спринт 5: Buildings/Facilities driver + split_rules (деление статей).

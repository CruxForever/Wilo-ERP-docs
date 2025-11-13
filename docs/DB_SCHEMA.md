# DB_SCHEMA

> Generated: 2025-11-13 16:09 (local)
> Commit: b1d6540

_Schema built by_: `db.schema.ensure_schema`

## Objects
- Tables:
  - [TABLE: active_alloc_sets](#table-active_alloc_sets)
  - [TABLE: active_periods](#table-active_periods)
  - [TABLE: active_scenarios](#table-active_scenarios)
  - [TABLE: activity_to_routing](#table-activity_to_routing)
  - [TABLE: bom](#table-bom)
  - [TABLE: bom_components_stage](#table-bom_components_stage)
  - [TABLE: bom_spec_components](#table-bom_spec_components)
  - [TABLE: bom_specs](#table-bom_specs)
  - [TABLE: bom_specs_stage](#table-bom_specs_stage)
  - [TABLE: commodity_map](#table-commodity_map)
  - [TABLE: cost_allocations](#table-cost_allocations)
  - [TABLE: cost_rate_components](#table-cost_rate_components)
  - [TABLE: cost_rates](#table-cost_rates)
  - [TABLE: dep_cc_map](#table-dep_cc_map)
  - [TABLE: driver_sets](#table-driver_sets)
  - [TABLE: driver_values](#table-driver_values)
  - [TABLE: drivers](#table-drivers)
  - [TABLE: elem_edges](#table-elem_edges)
  - [TABLE: elem_nodes](#table-elem_nodes)
  - [TABLE: elem_to_ovh](#table-elem_to_ovh)
  - [TABLE: fact_measures](#table-fact_measures)
  - [TABLE: item_nodes](#table-item_nodes)
  - [TABLE: items](#table-items)
  - [TABLE: labor_cost_unit](#table-labor_cost_unit)
  - [TABLE: labor_cost_unit_total](#table-labor_cost_unit_total)
  - [TABLE: labor_hours_unit](#table-labor_hours_unit)
  - [TABLE: labor_hours_unit_total](#table-labor_hours_unit_total)
  - [TABLE: lineage_links](#table-lineage_links)
  - [TABLE: mfc_cc_set_items](#table-mfc_cc_set_items)
  - [TABLE: mfc_cc_sets](#table-mfc_cc_sets)
  - [TABLE: mfc_elem_set_items](#table-mfc_elem_set_items)
  - [TABLE: mfc_elem_sets](#table-mfc_elem_sets)
  - [TABLE: mfc_report_defs](#table-mfc_report_defs)
  - [TABLE: mfc_report_line_rules](#table-mfc_report_line_rules)
  - [TABLE: mfc_report_lines](#table-mfc_report_lines)
  - [TABLE: mo_catalog](#table-mo_catalog)
  - [TABLE: mo_cost_unit](#table-mo_cost_unit)
  - [TABLE: mo_prices_history](#table-mo_prices_history)
  - [TABLE: opex_budget](#table-opex_budget)
  - [TABLE: opex_cycle_batches](#table-opex_cycle_batches)
  - [TABLE: opex_cycle_defs](#table-opex_cycle_defs)
  - [TABLE: opex_cycle_rules](#table-opex_cycle_rules)
  - [TABLE: opex_staging (materials pipeline)](#table-opex_staging)
  - [TABLE: ovh_bases_year](#table-ovh_bases_year)
  - [TABLE: ovh_cost_unit](#table-ovh_cost_unit)
  - [TABLE: ovh_costs](#table-ovh_costs)
  - [TABLE: ovh_flat](#table-ovh_flat)
  - [TABLE: ovh_nodes](#table-ovh_nodes)
  - [TABLE: ovh_tariffs](#table-ovh_tariffs)
  - [TABLE: ovh_tariffs_new](#table-ovh_tariffs_new)
  - [TABLE: personnel_monthly](#table-personnel_monthly)
  - [TABLE: price_scenarios (materials pipeline)](#table-price_scenarios)
  - [TABLE: prod_budget](#table-prod_budget)
  - [TABLE: rm_price_load (materials pipeline)](#table-rm_price_load)
  - [TABLE: rm_prices (materials pipeline)](#table-rm_prices)
  - [TABLE: routing_flat](#table-routing_flat)
  - [TABLE: routing_nodes](#table-routing_nodes)
  - [TABLE: routing_operations](#table-routing_operations)
  - [TABLE: routing_tree](#table-routing_tree)
  - [TABLE: routings](#table-routings)
  - [TABLE: rule_scope](#table-rule_scope)
  - [TABLE: rule_sets](#table-rule_sets)
  - [TABLE: rules](#table-rules)
  - [TABLE: run_history](#table-run_history)
  - [TABLE: run_log](#table-run_log)
  - [TABLE: schema_version](#table-schema_version)
  - [TABLE: scrap_cost_unit](#table-scrap_cost_unit)
  - [TABLE: sqlite_sequence](#table-sqlite_sequence)
  - [TABLE: transfer_batches](#table-transfer_batches)
  - [TABLE: transfer_opex_items](#table-transfer_opex_items)
  - [TABLE: transfer_personnel_items](#table-transfer_personnel_items)
  - [TABLE: transfer_rule_recipients](#table-transfer_rule_recipients)
  - [TABLE: transfer_rules](#table-transfer_rules)
- Views:
  - [VIEW: mo_last_price_current](#view-mo_last_price_current)
  - [VIEW: opex_budget_effective](#view-opex_budget_effective)
  - [VIEW: personnel_yearly](#view-personnel_yearly)
  - [VIEW: personnel_yearly_effective](#view-personnel_yearly_effective)
  - [VIEW: v_alloc_lineage](#view-v_alloc_lineage)
  - [VIEW: v_allocation_rule_effective](#view-v_allocation_rule_effective)
  - [VIEW: v_bom_costs_scenario](#view-v_bom_costs_scenario)
  - [VIEW: v_cogs_unit](#view-v_cogs_unit)
  - [VIEW: v_component_pools](#view-v_component_pools)
  - [VIEW: v_depr_rates_snapshot](#view-v_depr_rates_snapshot)
  - [VIEW: v_driver_catalog](#view-v_driver_catalog)
  - [VIEW: v_driver_values](#view-v_driver_values)
  - [VIEW: v_elem_component_map](#view-v_elem_component_map)
  - [VIEW: v_item_cg](#view-v_item_cg)
  - [VIEW: v_labor_cost_unit_total](#view-v_labor_cost_unit_total)
  - [VIEW: v_labor_rates_snapshot](#view-v_labor_rates_snapshot)
  - [VIEW: v_opr_cost_unit_total](#view-v_opr_cost_unit_total)
  - [VIEW: v_opr_rates_snapshot](#view-v_opr_rates_snapshot)
  - [VIEW: v_ovh_costs_scenario](#view-v_ovh_costs_scenario)
  - [VIEW: v_ovh_flat_compat](#view-v_ovh_flat_compat)
  - [VIEW: v_price_by_article](#view-v_price_by_article)
  - [VIEW: v_price_by_scenario (materials pipeline)](#view-v_price_by_scenario)
  - [VIEW: v_prod_budget_active](#view-v_prod_budget_active)
  - [VIEW: v_rate_parity](#view-v_rate_parity)
  - [VIEW: v_routing_costs_scenario](#view-v_routing_costs_scenario)

<a id="table-active_alloc_sets"></a>
## TABLE: active_alloc_sets
```sql
CREATE TABLE active_alloc_sets(
          scenario TEXT PRIMARY KEY,
          rule_set_id TEXT NOT NULL,
          valid_from TEXT,
          valid_to   TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | scenario | TEXT | 0 |  | 1 |
| 1 | rule_set_id | TEXT | 1 |  | 0 |
| 2 | valid_from | TEXT | 0 |  | 0 |
| 3 | valid_to | TEXT | 0 |  | 0 |

<a id="table-active_periods"></a>
## TABLE: active_periods
```sql
CREATE TABLE active_periods(
          id INTEGER PRIMARY KEY CHECK(id=1),
          month_code TEXT NOT NULL -- 'YYYY-MM'
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | id | INTEGER | 0 |  | 1 |
| 1 | month_code | TEXT | 1 |  | 0 |

<a id="table-active_scenarios"></a>
## TABLE: active_scenarios
```sql
CREATE TABLE active_scenarios(
      id INTEGER PRIMARY KEY CHECK (id=1),
      vol_scenario   TEXT,  -- РЅР°РїСЂРёРјРµСЂ 'BG26_VOL'
      price_scenario TEXT   -- РЅР°РїСЂРёРјРµСЂ 'FC3' РёР»Рё 'BG26' (РµСЃР»Рё Р±СѓРґРµС€СЊ РёРјРµРЅРѕРІР°С‚СЊ price-СЃС†РµРЅР°СЂРёРё РєР°Рє РІ price-loads)
    , year INTEGER)
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | id | INTEGER | 0 |  | 1 |
| 1 | vol_scenario | TEXT | 0 |  | 0 |
| 2 | price_scenario | TEXT | 0 |  | 0 |
| 3 | year | INTEGER | 0 |  | 0 |

<a id="table-activity_to_routing"></a>
## TABLE: activity_to_routing
```sql
CREATE TABLE activity_to_routing (
            activity_code   TEXT NOT NULL,
            routing_node_id TEXT NOT NULL,
            PRIMARY KEY (activity_code, routing_node_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | activity_code | TEXT | 1 |  | 1 |
| 1 | routing_node_id | TEXT | 1 |  | 2 |

<a id="table-bom"></a>
## TABLE: bom
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

<a id="table-bom_components_stage"></a>
## TABLE: bom_components_stage
```sql
CREATE TABLE bom_components_stage(
              load_id         TEXT,
              spec_code       TEXT,
              spec_valid_from TEXT,
              line_no         INTEGER,
              component_id    TEXT,
              qty_per_spec    REAL,
              uom             TEXT,
              operation       TEXT,
              stage           TEXT,
              raw_row_no      INTEGER,
              error_flag      INTEGER DEFAULT 0,
              meta_json       TEXT
            )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | load_id | TEXT | 0 |  | 0 |
| 1 | spec_code | TEXT | 0 |  | 0 |
| 2 | spec_valid_from | TEXT | 0 |  | 0 |
| 3 | line_no | INTEGER | 0 |  | 0 |
| 4 | component_id | TEXT | 0 |  | 0 |
| 5 | qty_per_spec | REAL | 0 |  | 0 |
| 6 | uom | TEXT | 0 |  | 0 |
| 7 | operation | TEXT | 0 |  | 0 |
| 8 | stage | TEXT | 0 |  | 0 |
| 9 | raw_row_no | INTEGER | 0 |  | 0 |
| 10 | error_flag | INTEGER | 0 | 0 | 0 |
| 11 | meta_json | TEXT | 0 |  | 0 |

<a id="table-bom_spec_components"></a>
## TABLE: bom_spec_components
```sql
CREATE TABLE "bom_spec_components"(
              spec_code       TEXT NOT NULL,
              spec_valid_from TEXT NOT NULL,
              line_no         INTEGER NOT NULL,
              component_id    TEXT NOT NULL,
              qty_per_spec    REAL NOT NULL DEFAULT 0,
              uom             TEXT,
              operation       TEXT,
              stage           TEXT,
              valid_from      TEXT,
              valid_to        TEXT,
              PRIMARY KEY (spec_code, spec_valid_from, line_no)
            )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | spec_code | TEXT | 1 |  | 1 |
| 1 | spec_valid_from | TEXT | 1 |  | 2 |
| 2 | line_no | INTEGER | 1 |  | 3 |
| 3 | component_id | TEXT | 1 |  | 0 |
| 4 | qty_per_spec | REAL | 1 | 0 | 0 |
| 5 | uom | TEXT | 0 |  | 0 |
| 6 | operation | TEXT | 0 |  | 0 |
| 7 | stage | TEXT | 0 |  | 0 |
| 8 | valid_from | TEXT | 0 |  | 0 |
| 9 | valid_to | TEXT | 0 |  | 0 |

<a id="table-bom_specs"></a>
## TABLE: bom_specs
```sql
CREATE TABLE "bom_specs"(
              spec_code   TEXT NOT NULL,
              product_id  TEXT NOT NULL,
              batch_size  REAL NOT NULL DEFAULT 1.0,
              batch_uom   TEXT,
              valid_from  TEXT NOT NULL,
              valid_to    TEXT NOT NULL DEFAULT '2999-12-31',
              is_default  INTEGER NOT NULL DEFAULT 1,
              PRIMARY KEY (spec_code, valid_from)
            )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | spec_code | TEXT | 1 |  | 1 |
| 1 | product_id | TEXT | 1 |  | 0 |
| 2 | batch_size | REAL | 1 | 1.0 | 0 |
| 3 | batch_uom | TEXT | 0 |  | 0 |
| 4 | valid_from | TEXT | 1 |  | 2 |
| 5 | valid_to | TEXT | 1 | '2999-12-31' | 0 |
| 6 | is_default | INTEGER | 1 | 1 | 0 |

<a id="table-bom_specs_stage"></a>
## TABLE: bom_specs_stage
```sql
CREATE TABLE bom_specs_stage(
              load_id     TEXT,
              spec_code   TEXT,
              product_id  TEXT,
              batch_size  REAL,
              batch_uom   TEXT,
              valid_from  TEXT,
              valid_to    TEXT,
              is_default  INTEGER,
              raw_row_no  INTEGER,
              error_flag  INTEGER DEFAULT 0,
              meta_json   TEXT
            )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | load_id | TEXT | 0 |  | 0 |
| 1 | spec_code | TEXT | 0 |  | 0 |
| 2 | product_id | TEXT | 0 |  | 0 |
| 3 | batch_size | REAL | 0 |  | 0 |
| 4 | batch_uom | TEXT | 0 |  | 0 |
| 5 | valid_from | TEXT | 0 |  | 0 |
| 6 | valid_to | TEXT | 0 |  | 0 |
| 7 | is_default | INTEGER | 0 |  | 0 |
| 8 | raw_row_no | INTEGER | 0 |  | 0 |
| 9 | error_flag | INTEGER | 0 | 0 | 0 |
| 10 | meta_json | TEXT | 0 |  | 0 |

<a id="table-commodity_map"></a>
## TABLE: commodity_map
```sql
CREATE TABLE commodity_map (
        matl_prefix            TEXT PRIMARY KEY,   -- РЅР°РїСЂРёРјРµСЂ '123'
        matl_group_text_opt    TEXT,               -- РѕРїС†РёРѕРЅР°Р»СЊРЅРѕ: РїРѕР»РЅРѕРµ РёРјСЏ Matl Group
        commodity_group        TEXT NOT NULL,      -- РЅРѕРјРµСЂ CG, РЅР°РїСЂРёРјРµСЂ '123'
        commodity_group_text   TEXT                -- РѕРїРёСЃР°РЅРёРµ CG
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | matl_prefix | TEXT | 0 |  | 1 |
| 1 | matl_group_text_opt | TEXT | 0 |  | 0 |
| 2 | commodity_group | TEXT | 1 |  | 0 |
| 3 | commodity_group_text | TEXT | 0 |  | 0 |

<a id="table-cost_allocations"></a>
## TABLE: cost_allocations
```sql
CREATE TABLE cost_allocations (
            period         TEXT NOT NULL,              -- 'YYYY-MM'
            scenario       TEXT NOT NULL DEFAULT 'BASE',
            component_code TEXT NOT NULL,              -- e.g., 'LABOR_DIRECT'
            product_id     TEXT NOT NULL,
            cc_id          TEXT NOT NULL,
            rule_id        INTEGER NOT NULL,
            amount         REAL NOT NULL,
            weight         REAL,
            run_id         TEXT,
            PRIMARY KEY (period, scenario, component_code, product_id, cc_id, rule_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | period | TEXT | 1 |  | 1 |
| 1 | scenario | TEXT | 1 | 'BASE' | 2 |
| 2 | component_code | TEXT | 1 |  | 3 |
| 3 | product_id | TEXT | 1 |  | 4 |
| 4 | cc_id | TEXT | 1 |  | 5 |
| 5 | rule_id | INTEGER | 1 |  | 6 |
| 6 | amount | REAL | 1 |  | 0 |
| 7 | weight | REAL | 0 |  | 0 |
| 8 | run_id | TEXT | 0 |  | 0 |

<a id="table-cost_rate_components"></a>
## TABLE: cost_rate_components
```sql
CREATE TABLE cost_rate_components (
        component_code TEXT PRIMARY KEY,
        display_name   TEXT NOT NULL,
        kind           TEXT NOT NULL,
        is_active      INTEGER NOT NULL DEFAULT 1,
        sort_order     INTEGER NOT NULL DEFAULT 0,
        created_at     TEXT NOT NULL DEFAULT (datetime('now')),
        updated_at     TEXT NOT NULL DEFAULT (datetime('now'))
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | component_code | TEXT | 0 |  | 1 |
| 1 | display_name | TEXT | 1 |  | 0 |
| 2 | kind | TEXT | 1 |  | 0 |
| 3 | is_active | INTEGER | 1 | 1 | 0 |
| 4 | sort_order | INTEGER | 1 | 0 | 0 |
| 5 | created_at | TEXT | 1 | datetime('now') | 0 |
| 6 | updated_at | TEXT | 1 | datetime('now') | 0 |

<a id="table-cost_rates"></a>
## TABLE: cost_rates
```sql
CREATE TABLE cost_rates (
            period_or_year TEXT NOT NULL,
            scenario       TEXT NOT NULL DEFAULT '',
            component_code TEXT NOT NULL,
            cc_id          TEXT NOT NULL DEFAULT '',
            product_id     TEXT NOT NULL DEFAULT '',
            rate_value     REAL NOT NULL,
            unit           TEXT,
            source         TEXT,
            run_id         TEXT, department_code TEXT NOT NULL DEFAULT '', currency TEXT NOT NULL DEFAULT 'RUB', loaded_at TEXT NOT NULL DEFAULT (datetime('now')),
            PRIMARY KEY (period_or_year, scenario, component_code, cc_id, product_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | period_or_year | TEXT | 1 |  | 1 |
| 1 | scenario | TEXT | 1 | '' | 2 |
| 2 | component_code | TEXT | 1 |  | 3 |
| 3 | cc_id | TEXT | 1 | '' | 4 |
| 4 | product_id | TEXT | 1 | '' | 5 |
| 5 | rate_value | REAL | 1 |  | 0 |
| 6 | unit | TEXT | 0 |  | 0 |
| 7 | source | TEXT | 0 |  | 0 |
| 8 | run_id | TEXT | 0 |  | 0 |
| 9 | department_code | TEXT | 1 | '' | 0 |
| 10 | currency | TEXT | 1 | 'RUB' | 0 |
| 11 | loaded_at | TEXT | 1 | datetime('now') | 0 |

<a id="table-dep_cc_map"></a>
## TABLE: dep_cc_map
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

<a id="table-driver_sets"></a>
## TABLE: driver_sets
```sql
CREATE TABLE driver_sets (
            set_id     TEXT PRIMARY KEY,
            name       TEXT,
            version    INTEGER,
            valid_from TEXT,
            valid_to   TEXT,
            status     TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | set_id | TEXT | 0 |  | 1 |
| 1 | name | TEXT | 0 |  | 0 |
| 2 | version | INTEGER | 0 |  | 0 |
| 3 | valid_from | TEXT | 0 |  | 0 |
| 4 | valid_to | TEXT | 0 |  | 0 |
| 5 | status | TEXT | 0 |  | 0 |

<a id="table-driver_values"></a>
## TABLE: driver_values
```sql
CREATE TABLE driver_values (
            set_id      TEXT NOT NULL,
            period      TEXT NOT NULL,                  -- 'YYYY-MM'
            scenario    TEXT,
            driver_code TEXT NOT NULL,
            product_id  TEXT,
            cc_id       TEXT,
            elem_id     TEXT,
            value       REAL NOT NULL,
            unit        TEXT,
            source_ref  TEXT,
            loaded_at   TEXT NOT NULL DEFAULT (datetime('now')),
            PRIMARY KEY (set_id, period, driver_code, product_id, cc_id),
            FOREIGN KEY (driver_code) REFERENCES drivers(driver_code),
            FOREIGN KEY (set_id) REFERENCES driver_sets(set_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | set_id | TEXT | 1 |  | 1 |
| 1 | period | TEXT | 1 |  | 2 |
| 2 | scenario | TEXT | 0 |  | 0 |
| 3 | driver_code | TEXT | 1 |  | 3 |
| 4 | product_id | TEXT | 0 |  | 4 |
| 5 | cc_id | TEXT | 0 |  | 5 |
| 6 | elem_id | TEXT | 0 |  | 0 |
| 7 | value | REAL | 1 |  | 0 |
| 8 | unit | TEXT | 0 |  | 0 |
| 9 | source_ref | TEXT | 0 |  | 0 |
| 10 | loaded_at | TEXT | 1 | datetime('now') | 0 |

**Foreign keys:**
- set_id -> driver_sets(set_id) (on update NO ACTION, on delete NO ACTION, match NONE)
- driver_code -> drivers(driver_code) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-drivers"></a>
## TABLE: drivers
```sql
CREATE TABLE drivers (
            driver_code   TEXT PRIMARY KEY,
            name          TEXT,
            unit          TEXT,
            granularity   TEXT,                    -- e.g. product_cc, cc, product
            agg_rule      TEXT,                    -- e.g. sum, avg
            source_policy TEXT,
            is_ratio      INTEGER NOT NULL DEFAULT 0 CHECK(is_ratio IN (0,1))
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | driver_code | TEXT | 0 |  | 1 |
| 1 | name | TEXT | 0 |  | 0 |
| 2 | unit | TEXT | 0 |  | 0 |
| 3 | granularity | TEXT | 0 |  | 0 |
| 4 | agg_rule | TEXT | 0 |  | 0 |
| 5 | source_policy | TEXT | 0 |  | 0 |
| 6 | is_ratio | INTEGER | 1 | 0 | 0 |

<a id="table-elem_edges"></a>
## TABLE: elem_edges
```sql
CREATE TABLE elem_edges (
          parent_id   TEXT REFERENCES elem_nodes(elem_id),
          child_id    TEXT REFERENCES elem_nodes(elem_id),
          PRIMARY KEY (parent_id, child_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | parent_id | TEXT | 0 |  | 1 |
| 1 | child_id | TEXT | 0 |  | 2 |

**Foreign keys:**
- child_id -> elem_nodes(elem_id) (on update NO ACTION, on delete NO ACTION, match NONE)
- parent_id -> elem_nodes(elem_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-elem_nodes"></a>
## TABLE: elem_nodes
```sql
CREATE TABLE elem_nodes (
          elem_id     TEXT PRIMARY KEY,
          name        TEXT,
          level_no    INTEGER,
          node_type   TEXT CHECK(node_type IN ('GROUP','LEAF')),
          parent_id   TEXT REFERENCES elem_nodes(elem_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | elem_id | TEXT | 0 |  | 1 |
| 1 | name | TEXT | 0 |  | 0 |
| 2 | level_no | INTEGER | 0 |  | 0 |
| 3 | node_type | TEXT | 0 |  | 0 |
| 4 | parent_id | TEXT | 0 |  | 0 |

**Foreign keys:**
- parent_id -> elem_nodes(elem_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-elem_to_ovh"></a>
## TABLE: elem_to_ovh
```sql
CREATE TABLE elem_to_ovh (
            elem_id    TEXT NOT NULL,
            ovh_node_id TEXT NOT NULL,
            PRIMARY KEY (elem_id, ovh_node_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | elem_id | TEXT | 1 |  | 1 |
| 1 | ovh_node_id | TEXT | 1 |  | 2 |

<a id="table-fact_measures"></a>
## TABLE: fact_measures
```sql
CREATE TABLE fact_measures (
            period        TEXT NOT NULL,
            scenario      TEXT NOT NULL DEFAULT '',
            product_id    TEXT NOT NULL,
            component_code TEXT NOT NULL DEFAULT '',
            measure_code  TEXT NOT NULL,
            value         REAL NOT NULL,
            unit          TEXT,
            PRIMARY KEY (period, scenario, product_id, component_code, measure_code)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | period | TEXT | 1 |  | 1 |
| 1 | scenario | TEXT | 1 | '' | 2 |
| 2 | product_id | TEXT | 1 |  | 3 |
| 3 | component_code | TEXT | 1 | '' | 4 |
| 4 | measure_code | TEXT | 1 |  | 5 |
| 5 | value | REAL | 1 |  | 0 |
| 6 | unit | TEXT | 0 |  | 0 |

<a id="table-item_nodes"></a>
## TABLE: item_nodes
```sql
CREATE TABLE item_nodes (
            node_id   TEXT PRIMARY KEY,
            parent_id TEXT,
            name      TEXT,
            level     INTEGER,
            path      TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | node_id | TEXT | 0 |  | 1 |
| 1 | parent_id | TEXT | 0 |  | 0 |
| 2 | name | TEXT | 0 |  | 0 |
| 3 | level | INTEGER | 0 |  | 0 |
| 4 | path | TEXT | 0 |  | 0 |

<a id="table-items"></a>
## TABLE: items
```sql
CREATE TABLE items(
      item_id     TEXT PRIMARY KEY,
      article     TEXT,
      name        TEXT,
      uom         TEXT,
      is_produced INTEGER NOT NULL DEFAULT 0
    , routing_group TEXT, ovh_group_code TEXT, matl_group TEXT, product_hierarchy TEXT)
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | item_id | TEXT | 0 |  | 1 |
| 1 | article | TEXT | 0 |  | 0 |
| 2 | name | TEXT | 0 |  | 0 |
| 3 | uom | TEXT | 0 |  | 0 |
| 4 | is_produced | INTEGER | 1 | 0 | 0 |
| 5 | routing_group | TEXT | 0 |  | 0 |
| 6 | ovh_group_code | TEXT | 0 |  | 0 |
| 7 | matl_group | TEXT | 0 |  | 0 |
| 8 | product_hierarchy | TEXT | 0 |  | 0 |

<a id="table-labor_cost_unit"></a>
## TABLE: labor_cost_unit
```sql
CREATE TABLE labor_cost_unit(
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

<a id="table-labor_cost_unit_total"></a>
## TABLE: labor_cost_unit_total
```sql
CREATE TABLE labor_cost_unit_total(
      product_id   TEXT PRIMARY KEY,
      cost_total   REAL
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 0 |  | 1 |
| 1 | cost_total | REAL | 0 |  | 0 |

<a id="table-labor_hours_unit"></a>
## TABLE: labor_hours_unit
```sql
CREATE TABLE labor_hours_unit(
      product_id      TEXT NOT NULL,
      department_code TEXT NOT NULL,
      hours_self      REAL NOT NULL,
      hours_children  REAL NOT NULL,
      hours_total     REAL NOT NULL,
      PRIMARY KEY(product_id, department_code)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | department_code | TEXT | 1 |  | 2 |
| 2 | hours_self | REAL | 1 |  | 0 |
| 3 | hours_children | REAL | 1 |  | 0 |
| 4 | hours_total | REAL | 1 |  | 0 |

<a id="table-labor_hours_unit_total"></a>
## TABLE: labor_hours_unit_total
```sql
CREATE TABLE labor_hours_unit_total(
      product_id   TEXT PRIMARY KEY,
      hours_total  REAL NOT NULL
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 0 |  | 1 |
| 1 | hours_total | REAL | 1 |  | 0 |

<a id="table-lineage_links"></a>
## TABLE: lineage_links
```sql
CREATE TABLE lineage_links (
            src_table TEXT NOT NULL,
            src_pk    TEXT NOT NULL,
            dst_table TEXT NOT NULL,
            dst_pk    TEXT NOT NULL,
            rule_id   INTEGER,
            run_id    TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | src_table | TEXT | 1 |  | 0 |
| 1 | src_pk | TEXT | 1 |  | 0 |
| 2 | dst_table | TEXT | 1 |  | 0 |
| 3 | dst_pk | TEXT | 1 |  | 0 |
| 4 | rule_id | INTEGER | 0 |  | 0 |
| 5 | run_id | TEXT | 0 |  | 0 |

<a id="table-mfc_cc_set_items"></a>
## TABLE: mfc_cc_set_items
```sql
CREATE TABLE mfc_cc_set_items(
        set_id  INTEGER NOT NULL,
        cc_id   TEXT    NOT NULL,
        PRIMARY KEY(set_id, cc_id),
        FOREIGN KEY(set_id) REFERENCES mfc_cc_sets(set_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | set_id | INTEGER | 1 |  | 1 |
| 1 | cc_id | TEXT | 1 |  | 2 |

**Foreign keys:**
- set_id -> mfc_cc_sets(set_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-mfc_cc_sets"></a>
## TABLE: mfc_cc_sets
```sql
CREATE TABLE mfc_cc_sets(
        set_id      INTEGER PRIMARY KEY AUTOINCREMENT,
        set_name    TEXT UNIQUE NOT NULL,
        expand_mode TEXT NOT NULL DEFAULT 'leaves'   -- 'leaves' | 'subtree' | 'exact'
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | set_id | INTEGER | 0 |  | 1 |
| 1 | set_name | TEXT | 1 |  | 0 |
| 2 | expand_mode | TEXT | 1 | 'leaves' | 0 |

<a id="table-mfc_elem_set_items"></a>
## TABLE: mfc_elem_set_items
```sql
CREATE TABLE mfc_elem_set_items(
        set_id  INTEGER NOT NULL,
        elem_id TEXT    NOT NULL,
        PRIMARY KEY(set_id, elem_id),
        FOREIGN KEY(set_id) REFERENCES mfc_elem_sets(set_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | set_id | INTEGER | 1 |  | 1 |
| 1 | elem_id | TEXT | 1 |  | 2 |

**Foreign keys:**
- set_id -> mfc_elem_sets(set_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-mfc_elem_sets"></a>
## TABLE: mfc_elem_sets
```sql
CREATE TABLE mfc_elem_sets(
        set_id      INTEGER PRIMARY KEY AUTOINCREMENT,
        set_name    TEXT UNIQUE NOT NULL,
        expand_mode TEXT NOT NULL DEFAULT 'subtree'  -- 'subtree' | 'leaves' | 'exact'
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | set_id | INTEGER | 0 |  | 1 |
| 1 | set_name | TEXT | 1 |  | 0 |
| 2 | expand_mode | TEXT | 1 | 'subtree' | 0 |

<a id="table-mfc_report_defs"></a>
## TABLE: mfc_report_defs
```sql
CREATE TABLE mfc_report_defs (
        report_id       TEXT PRIMARY KEY,                 -- 'TARGET_2026'
        name            TEXT NOT NULL,                    -- 'Target Cost 2026'
        bud_year        INTEGER NOT NULL,                 -- 2026
        vol_scenario    TEXT,                             -- NULL = брать из active_scenarios
        price_scenario  TEXT,                             -- NULL = брать из active_scenarios
        created_at      TEXT DEFAULT (datetime('now'))
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | report_id | TEXT | 0 |  | 1 |
| 1 | name | TEXT | 1 |  | 0 |
| 2 | bud_year | INTEGER | 1 |  | 0 |
| 3 | vol_scenario | TEXT | 0 |  | 0 |
| 4 | price_scenario | TEXT | 0 |  | 0 |
| 5 | created_at | TEXT | 0 | datetime('now') | 0 |

<a id="table-mfc_report_line_rules"></a>
## TABLE: mfc_report_line_rules
```sql
CREATE TABLE mfc_report_line_rules (
        report_id   TEXT NOT NULL,
        line_no     INTEGER NOT NULL,
        rule_no     INTEGER NOT NULL,                     -- чтобы в строке было несколько правил
        source_type TEXT NOT NULL,                        -- см. перечисление выше
        cc_root     TEXT,                                 -- корень дерева ЦЗ (NULL = без фильтра)
        elem_root   TEXT,                                 -- корень дерева элементов (NULL = без фильтра)
        cost_type   TEXT,                                 -- подтип источника (напр., 'machine'|'ext_tools' для depr)
        weight      REAL DEFAULT 1.0,                     -- коэффициент (+/-/доля)
        note        TEXT, cc_set_id INTEGER, elem_set_id INTEGER,
        PRIMARY KEY (report_id, line_no, rule_no),
        FOREIGN KEY (report_id, line_no) REFERENCES mfc_report_lines(report_id, line_no),
        CHECK (source_type IN (
            'material','subcontracting','scrap',
            'opex','depr','structure','acos',
            'trading_ic','trading_ext'
        ))
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | report_id | TEXT | 1 |  | 1 |
| 1 | line_no | INTEGER | 1 |  | 2 |
| 2 | rule_no | INTEGER | 1 |  | 3 |
| 3 | source_type | TEXT | 1 |  | 0 |
| 4 | cc_root | TEXT | 0 |  | 0 |
| 5 | elem_root | TEXT | 0 |  | 0 |
| 6 | cost_type | TEXT | 0 |  | 0 |
| 7 | weight | REAL | 0 | 1.0 | 0 |
| 8 | note | TEXT | 0 |  | 0 |
| 9 | cc_set_id | INTEGER | 0 |  | 0 |
| 10 | elem_set_id | INTEGER | 0 |  | 0 |

**Foreign keys:**
- report_id -> mfc_report_lines(report_id) (on update NO ACTION, on delete NO ACTION, match NONE)
- line_no -> mfc_report_lines(line_no) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-mfc_report_lines"></a>
## TABLE: mfc_report_lines
```sql
CREATE TABLE mfc_report_lines (
        report_id   TEXT NOT NULL,
        line_no     INTEGER NOT NULL,                     -- порядок вывода
        report_line TEXT    NOT NULL,                     -- заголовок строки в отчёте
        PRIMARY KEY (report_id, line_no),
        FOREIGN KEY (report_id) REFERENCES mfc_report_defs(report_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | report_id | TEXT | 1 |  | 1 |
| 1 | line_no | INTEGER | 1 |  | 2 |
| 2 | report_line | TEXT | 1 |  | 0 |

**Foreign keys:**
- report_id -> mfc_report_defs(report_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-mo_catalog"></a>
## TABLE: mo_catalog
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

<a id="table-mo_cost_unit"></a>
## TABLE: mo_cost_unit
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

<a id="table-mo_prices_history"></a>
## TABLE: mo_prices_history
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

<a id="table-opex_budget"></a>
## TABLE: opex_budget
```sql
CREATE TABLE opex_budget (
    id                       INTEGER PRIMARY KEY AUTOINCREMENT,
    load_id                  TEXT    NOT NULL,
    cc_id                    TEXT    NOT NULL,                 -- FK в†’ cc_nodes.cc_id
    elem_id                  TEXT    NOT NULL,                 -- FK в†’ elem_nodes.elem_id
    bud_year                 INTEGER NOT NULL,                 -- РЅР°РїСЂРёРјРµСЂ, 2026
    amount                   REAL    NOT NULL,                 -- РЅРѕСЂРјР°Р»РёР·РѕРІР°РЅРЅР°СЏ СЃСѓРјРјР°

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

**Foreign keys:**
- elem_id -> elem_nodes(elem_id) (on update NO ACTION, on delete NO ACTION, match NONE)
- cc_id -> cc_nodes(cc_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-opex_cycle_batches"></a>
## TABLE: opex_cycle_batches
```sql
CREATE TABLE opex_cycle_batches (
      batch_id TEXT PRIMARY KEY,
      cycle_id INTEGER NOT NULL,
      FOREIGN KEY(batch_id) REFERENCES transfer_batches(batch_id),
      FOREIGN KEY(cycle_id) REFERENCES opex_cycle_defs(cycle_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | batch_id | TEXT | 0 |  | 1 |
| 1 | cycle_id | INTEGER | 1 |  | 0 |

**Foreign keys:**
- cycle_id -> opex_cycle_defs(cycle_id) (on update NO ACTION, on delete NO ACTION, match NONE)
- batch_id -> transfer_batches(batch_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-opex_cycle_defs"></a>
## TABLE: opex_cycle_defs
```sql
CREATE TABLE opex_cycle_defs (
        cycle_id    INTEGER PRIMARY KEY AUTOINCREMENT,
        name        TEXT NOT NULL,            -- С‡РµР»РѕРІРµРєРѕС‡РёС‚Р°РµРјРѕРµ РёРјСЏ "Buildingsв†’Prod"
        bud_year    INTEGER NOT NULL,         -- Рє РєР°РєРѕРјСѓ РіРѕРґСѓ РѕС‚РЅРѕСЃРёС‚СЃСЏ РЅР°Р±РѕСЂ
        elem_root   TEXT NOT NULL,            -- РєРѕСЂРµРЅСЊ РіСЂСѓРїРїС‹ СЌР»РµРјРµРЅС‚РѕРІ
        enabled     INTEGER NOT NULL DEFAULT 1,
        rule_id     INTEGER,
        UNIQUE(name, bud_year)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | cycle_id | INTEGER | 0 |  | 1 |
| 1 | name | TEXT | 1 |  | 0 |
| 2 | bud_year | INTEGER | 1 |  | 0 |
| 3 | elem_root | TEXT | 1 |  | 0 |
| 4 | enabled | INTEGER | 1 | 1 | 0 |
| 5 | rule_id | INTEGER | 0 |  | 0 |

<a id="table-opex_cycle_rules"></a>
## TABLE: opex_cycle_rules
```sql
CREATE TABLE opex_cycle_rules (
        cycle_id     INTEGER NOT NULL,
        donor_cc_id  TEXT    NOT NULL,
        to_cc_id     TEXT    NOT NULL,
        to_elem_id   TEXT,
        share        REAL    NOT NULL CHECK(share>=0 AND share<=1),
        FOREIGN KEY (cycle_id) REFERENCES opex_cycle_defs(cycle_id),
        UNIQUE(cycle_id, donor_cc_id, to_cc_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | cycle_id | INTEGER | 1 |  | 0 |
| 1 | donor_cc_id | TEXT | 1 |  | 0 |
| 2 | to_cc_id | TEXT | 1 |  | 0 |
| 3 | to_elem_id | TEXT | 0 |  | 0 |
| 4 | share | REAL | 1 |  | 0 |

**Foreign keys:**
- cycle_id -> opex_cycle_defs(cycle_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-opex_staging"></a>
## TABLE: opex_staging (materials pipeline)
```sql
CREATE TABLE opex_staging (
    id                       INTEGER PRIMARY KEY AUTOINCREMENT,
    load_id                  TEXT    NOT NULL,                 -- UUID Р·Р°РіСЂСѓР·РєРё
    sheet_name               TEXT,                             -- РёРјСЏ Р»РёСЃС‚Р° Excel
    cc_id                    TEXT,                             -- CC РёР· РёСЃС…РѕРґРЅРёРєР°
    cost_type                TEXT,
    account_descr            TEXT,
    bud_2026                 REAL,                             -- СЃСѓРјРјР° РёР· РєРѕР»РѕРЅРєРё 'BUD 2026'
    text_note                TEXT,                             -- 'Text'
    comments                 TEXT,                             -- 'Comments'
    supplier_text            TEXT,                             -- 'Suppliers/Text'

    mapped_elem_id           TEXT,                             -- СЂРµР·СѓР»СЊС‚Р°С‚ РїСЂР°РІРёР» (elem_id) РёР»Рё NULL

    -- С„Р»Р°РіРё РІР°Р»РёРґР°С†РёРё
    missing_cc               INTEGER NOT NULL DEFAULT 0,       -- 1 РµСЃР»Рё CC РЅРµ РЅР°Р№РґРµРЅ РІ Р‘Р”
    unmapped_elem            INTEGER NOT NULL DEFAULT 0,       -- 1 РµСЃР»Рё РїСЂР°РІРёР»Рѕ РЅРµ СЃСЂР°Р±РѕС‚Р°Р»Рѕ
    bad_amount               INTEGER NOT NULL DEFAULT 0,       -- 1 РµСЃР»Рё bud_2026 РїСѓСЃС‚/РЅРµС‡РёСЃР»Рѕ
    dup_candidate            INTEGER NOT NULL DEFAULT 0,       -- 1 РµСЃР»Рё РїРѕС‚РµРЅС†РёР°Р»СЊРЅС‹Р№ РґСѓР±Р»СЊ

    created_at               INTEGER NOT NULL DEFAULT (strftime('%s','now')),

    -- РјСЏРіРєРёРµ FK (Р±РµР· ON DELETE/UPDATE CASCADE, С‡С‚РѕР±С‹ staging РЅРµ РїР°РґР°Р» РїСЂРё Р°РґРјРёРЅ-РѕРїРµСЂР°С†РёСЏС…)
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

**Foreign keys:**
- mapped_elem_id -> elem_nodes(elem_id) (on update NO ACTION, on delete NO ACTION, match NONE)
- cc_id -> cc_nodes(cc_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-ovh_bases_year"></a>
## TABLE: ovh_bases_year
```sql
CREATE TABLE ovh_bases_year (
        year            INTEGER        NOT NULL,
        overhead_group  TEXT           NOT NULL,
        -- РјР°С‚РµСЂРёР°Р»РєР° Р·Р° РіРѕРґ Рё РµС‘ РґРѕР»СЏ РІ total РїРѕ РІСЃРµРј A001..A010
        mat_base_year   REAL           NOT NULL DEFAULT 0.0,
        mat_share       REAL,
        -- РёСЃС…РѕРґРЅС‹Рµ СЃСѓРјРјС‹ (РґРѕ СЂР°СЃРїСЂРµРґРµР»РµРЅРёСЏ)
        base_depr_src   REAL           NOT NULL DEFAULT 0.0,   -- РђРјРѕСЂС‚. РћРџР  (CC 25407 Г— MFC_PRIM_3)
        base_log_src    REAL           NOT NULL DEFAULT 0.0,   -- РћРҐР  Р›РѕРіРёСЃС‚РёРєР° (P45/46/47 Г— MFC_PRIM)
        base_adm_src    REAL           NOT NULL DEFAULT 0.0,   -- РћРҐР  РЈРїСЂР°РІР»РµРЅС‡. (P41/43/44/48 Г— MFC_PRIM) РјРёРЅСѓСЃ РђРјРѕСЂС‚. РћРџР 
        -- СЂР°СЃРїСЂРµРґРµР»С‘РЅРЅС‹Рµ СЃСѓРјРјС‹ РїРѕ РґРѕР»СЏРј mat_share
        dist_depr       REAL           NOT NULL DEFAULT 0.0,
        dist_log        REAL           NOT NULL DEFAULT 0.0,
        dist_adm        REAL           NOT NULL DEFAULT 0.0,   -- РїРѕРєР° = base_adm_srcГ—mat_share; Р·Р°С‚РµРј РїРµСЂРµСЃС‡РёС‚Р°РµРј С‡РµСЂРµР· (С‚СЂСѓРґ+РћРџР )
        -- РїСЂРѕРёСЃС…РѕР¶РґРµРЅРёРµ / С‚РµС…РїРѕР»СЏ
        opex_load_ids   TEXT,                                   -- UUID СЃРїРёСЃРєРѕРј (С‡РµСЂРµР· Р·Р°РїСЏС‚СѓСЋ), РµСЃР»Рё РЅРµСЃРєРѕР»СЊРєРѕ Р·Р°РіСЂСѓР·РѕРє
        prod_months     TEXT,                                   -- РЅР°РїСЂРёРјРµСЂ: '2026-01..2026-12'
        calc_at         TEXT           DEFAULT (datetime('now')),
        created_at      INTEGER        NOT NULL DEFAULT (strftime('%s','now')),
        PRIMARY KEY (year, overhead_group)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | year | INTEGER | 1 |  | 1 |
| 1 | overhead_group | TEXT | 1 |  | 2 |
| 2 | mat_base_year | REAL | 1 | 0.0 | 0 |
| 3 | mat_share | REAL | 0 |  | 0 |
| 4 | base_depr_src | REAL | 1 | 0.0 | 0 |
| 5 | base_log_src | REAL | 1 | 0.0 | 0 |
| 6 | base_adm_src | REAL | 1 | 0.0 | 0 |
| 7 | dist_depr | REAL | 1 | 0.0 | 0 |
| 8 | dist_log | REAL | 1 | 0.0 | 0 |
| 9 | dist_adm | REAL | 1 | 0.0 | 0 |
| 10 | opex_load_ids | TEXT | 0 |  | 0 |
| 11 | prod_months | TEXT | 0 |  | 0 |
| 12 | calc_at | TEXT | 0 | datetime('now') | 0 |
| 13 | created_at | INTEGER | 1 | strftime('%s','now') | 0 |

<a id="table-ovh_cost_unit"></a>
## TABLE: ovh_cost_unit
```sql
CREATE TABLE ovh_cost_unit (
        product_id TEXT PRIMARY KEY,
        depr_opr_cost REAL NOT NULL DEFAULT 0.0,  -- РђРјРѕСЂС‚РёР·Р°С†РёСЏ РћРџР 
        log_cost REAL NOT NULL DEFAULT 0.0,       -- РћРҐР  Р»РѕРіРёСЃС‚РёРєР°
        adm_cost REAL NOT NULL DEFAULT 0.0        -- РћРҐР  СѓРїСЂР°РІР»РµРЅС‡РµСЃРєРёРµ
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 0 |  | 1 |
| 1 | depr_opr_cost | REAL | 1 | 0.0 | 0 |
| 2 | log_cost | REAL | 1 | 0.0 | 0 |
| 3 | adm_cost | REAL | 1 | 0.0 | 0 |

<a id="table-ovh_costs"></a>
## TABLE: ovh_costs
```sql
CREATE TABLE ovh_costs (
            product_id      TEXT NOT NULL,
            node_product_id TEXT,
            overhead_group  TEXT NOT NULL,
            cost_type       TEXT NOT NULL, -- 'scrap'|'depr_opr'|'log'|'adm'
            amount          REAL NOT NULL DEFAULT 0.0,
            year            INTEGER,
            source          TEXT,
            PRIMARY KEY(product_id, node_product_id, overhead_group, cost_type, year)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | node_product_id | TEXT | 0 |  | 2 |
| 2 | overhead_group | TEXT | 1 |  | 3 |
| 3 | cost_type | TEXT | 1 |  | 4 |
| 4 | amount | REAL | 1 | 0.0 | 0 |
| 5 | year | INTEGER | 0 |  | 5 |
| 6 | source | TEXT | 0 |  | 0 |

<a id="table-ovh_flat"></a>
## TABLE: ovh_flat
```sql
CREATE TABLE ovh_flat (
            product_id TEXT NOT NULL,
            overhead_group TEXT NOT NULL,
            driver_code TEXT,
            driver_value_per_unit REAL,
            source TEXT,
            year INTEGER,
            department_code TEXT,
            -- legacy compatibility
            mat_cost REAL,
            base_kind TEXT,
            base_value_per_unit REAL, node_product_id TEXT,
            PRIMARY KEY (product_id, overhead_group, driver_code)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | overhead_group | TEXT | 1 |  | 2 |
| 2 | driver_code | TEXT | 0 |  | 3 |
| 3 | driver_value_per_unit | REAL | 0 |  | 0 |
| 4 | source | TEXT | 0 |  | 0 |
| 5 | year | INTEGER | 0 |  | 0 |
| 6 | department_code | TEXT | 0 |  | 0 |
| 7 | mat_cost | REAL | 0 |  | 0 |
| 8 | base_kind | TEXT | 0 |  | 0 |
| 9 | base_value_per_unit | REAL | 0 |  | 0 |
| 10 | node_product_id | TEXT | 0 |  | 0 |

<a id="table-ovh_nodes"></a>
## TABLE: ovh_nodes
```sql
CREATE TABLE ovh_nodes (
            node_id    TEXT PRIMARY KEY,
            parent_id  TEXT,
            ovh_group  TEXT,
            name       TEXT,
            level      INTEGER,
            path       TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | node_id | TEXT | 0 |  | 1 |
| 1 | parent_id | TEXT | 0 |  | 0 |
| 2 | ovh_group | TEXT | 0 |  | 0 |
| 3 | name | TEXT | 0 |  | 0 |
| 4 | level | INTEGER | 0 |  | 0 |
| 5 | path | TEXT | 0 |  | 0 |

<a id="table-ovh_tariffs"></a>
## TABLE: ovh_tariffs
```sql
CREATE TABLE "ovh_tariffs" (
                    overhead_group TEXT NOT NULL,
                    year INTEGER NOT NULL,
                    scenario TEXT NOT NULL DEFAULT '',
                    cost_type TEXT NOT NULL,
                    share REAL,
                    PRIMARY KEY (overhead_group, year, scenario, cost_type)
                )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | overhead_group | TEXT | 1 |  | 1 |
| 1 | year | INTEGER | 1 |  | 2 |
| 2 | scenario | TEXT | 1 | '' | 3 |
| 3 | cost_type | TEXT | 1 |  | 4 |
| 4 | share | REAL | 0 |  | 0 |

<a id="table-ovh_tariffs_new"></a>
## TABLE: ovh_tariffs_new
```sql
CREATE TABLE ovh_tariffs_new (
                    overhead_group TEXT NOT NULL,
                    year INTEGER NOT NULL,
                    scenario TEXT NOT NULL DEFAULT '',
                    cost_type TEXT NOT NULL,
                    share REAL,
                    PRIMARY KEY (overhead_group, year, scenario, cost_type)
                )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | overhead_group | TEXT | 1 |  | 1 |
| 1 | year | INTEGER | 1 |  | 2 |
| 2 | scenario | TEXT | 1 | '' | 3 |
| 3 | cost_type | TEXT | 1 |  | 4 |
| 4 | share | REAL | 0 |  | 0 |

<a id="table-personnel_monthly"></a>
## TABLE: personnel_monthly
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

<a id="table-price_scenarios"></a>
## TABLE: price_scenarios (materials pipeline)
```sql
CREATE TABLE price_scenarios (
      scenario_code TEXT PRIMARY KEY,   -- 'BG25', 'FC3', 'BG26', ...
      asof_date     TEXT NOT NULL       -- 'YYYY-MM-DD'
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | scenario_code | TEXT | 0 |  | 1 |
| 1 | asof_date | TEXT | 1 |  | 0 |

<a id="table-prod_budget"></a>
## TABLE: prod_budget
```sql
CREATE TABLE prod_budget (
        product_id   TEXT NOT NULL,
        month_code   TEXT NOT NULL,   -- 'YYYY-MM'
        qty          REAL NOT NULL DEFAULT 0,
        -- РќРћР’РћР•:
        scenario     TEXT NOT NULL DEFAULT 'BASE',
        PRIMARY KEY (product_id, month_code, scenario)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | month_code | TEXT | 1 |  | 2 |
| 2 | qty | REAL | 1 | 0 | 0 |
| 3 | scenario | TEXT | 1 | 'BASE' | 3 |

<a id="table-rm_price_load"></a>
## TABLE: rm_price_load (materials pipeline)
```sql
CREATE TABLE rm_price_load (
        load_id     TEXT PRIMARY KEY,
        comment     TEXT,
        source      TEXT,
        price_date  TEXT,
        loaded_at   TEXT NOT NULL DEFAULT (datetime('now')),
        created_by  TEXT
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | load_id | TEXT | 0 |  | 1 |
| 1 | comment | TEXT | 0 |  | 0 |
| 2 | source | TEXT | 0 |  | 0 |
| 3 | price_date | TEXT | 0 |  | 0 |
| 4 | loaded_at | TEXT | 1 | datetime('now') | 0 |
| 5 | created_by | TEXT | 0 |  | 0 |

<a id="table-rm_prices"></a>
## TABLE: rm_prices (materials pipeline)
```sql
CREATE TABLE "rm_prices" (
            item_code       TEXT NOT NULL,
            currency        TEXT NOT NULL DEFAULT 'RUB',
            effective_from  TEXT NOT NULL,                   -- РєР»СЋС‡ РґР»СЏ РёСЃС‚РѕСЂРёРё
            price           REAL NOT NULL,
            article         TEXT,
            uom             TEXT,
            load_id         TEXT NOT NULL,                   -- uuid Р·Р°РіСЂСѓР·РєРё
            source          TEXT,
            loaded_at       TEXT NOT NULL DEFAULT (datetime('now')),
            PRIMARY KEY (item_code, currency, effective_from)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | item_code | TEXT | 1 |  | 1 |
| 1 | currency | TEXT | 1 | 'RUB' | 2 |
| 2 | effective_from | TEXT | 1 |  | 3 |
| 3 | price | REAL | 1 |  | 0 |
| 4 | article | TEXT | 0 |  | 0 |
| 5 | uom | TEXT | 0 |  | 0 |
| 6 | load_id | TEXT | 1 |  | 0 |
| 7 | source | TEXT | 0 |  | 0 |
| 8 | loaded_at | TEXT | 1 | datetime('now') | 0 |

<a id="table-routing_flat"></a>
## TABLE: routing_flat
```sql
CREATE TABLE routing_flat(
          product_id      TEXT NOT NULL,
          node_product_id TEXT NOT NULL,
          routing_id      INTEGER,
          operation_id    INTEGER NOT NULL,
          operation       TEXT,
          department_code TEXT,
          hours_per_unit  REAL NOT NULL,
          level           INTEGER NOT NULL,
          path            TEXT,
          routing_name    TEXT, routing_group TEXT, driver_code TEXT, driver_value_per_unit REAL, source TEXT, valid_from TEXT, valid_to TEXT,
          PRIMARY KEY(product_id, node_product_id, operation_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | product_id | TEXT | 1 |  | 1 |
| 1 | node_product_id | TEXT | 1 |  | 2 |
| 2 | routing_id | INTEGER | 0 |  | 0 |
| 3 | operation_id | INTEGER | 1 |  | 3 |
| 4 | operation | TEXT | 0 |  | 0 |
| 5 | department_code | TEXT | 0 |  | 0 |
| 6 | hours_per_unit | REAL | 1 |  | 0 |
| 7 | level | INTEGER | 1 |  | 0 |
| 8 | path | TEXT | 0 |  | 0 |
| 9 | routing_name | TEXT | 0 |  | 0 |
| 10 | routing_group | TEXT | 0 |  | 0 |
| 11 | driver_code | TEXT | 0 |  | 0 |
| 12 | driver_value_per_unit | REAL | 0 |  | 0 |
| 13 | source | TEXT | 0 |  | 0 |
| 14 | valid_from | TEXT | 0 |  | 0 |
| 15 | valid_to | TEXT | 0 |  | 0 |

<a id="table-routing_nodes"></a>
## TABLE: routing_nodes
```sql
CREATE TABLE routing_nodes (
            node_id       TEXT PRIMARY KEY,
            parent_id     TEXT,
            routing_group TEXT,
            name          TEXT,
            level         INTEGER,
            path          TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | node_id | TEXT | 0 |  | 1 |
| 1 | parent_id | TEXT | 0 |  | 0 |
| 2 | routing_group | TEXT | 0 |  | 0 |
| 3 | name | TEXT | 0 |  | 0 |
| 4 | level | INTEGER | 0 |  | 0 |
| 5 | path | TEXT | 0 |  | 0 |

<a id="table-routing_operations"></a>
## TABLE: routing_operations
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

<a id="table-routing_tree"></a>
## TABLE: routing_tree
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

<a id="table-routings"></a>
## TABLE: routings
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

<a id="table-rule_scope"></a>
## TABLE: rule_scope
```sql
CREATE TABLE rule_scope (
            rule_id     INTEGER NOT NULL,
            cc_node_id  TEXT,
            elem_node_id TEXT,
            PRIMARY KEY (rule_id, cc_node_id, elem_node_id),
            FOREIGN KEY (rule_id) REFERENCES rules(rule_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | rule_id | INTEGER | 1 |  | 1 |
| 1 | cc_node_id | TEXT | 0 |  | 2 |
| 2 | elem_node_id | TEXT | 0 |  | 3 |

**Foreign keys:**
- rule_id -> rules(rule_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-rule_sets"></a>
## TABLE: rule_sets
```sql
CREATE TABLE rule_sets (
            rule_set_id TEXT PRIMARY KEY,
            name        TEXT,
            version     INTEGER,
            valid_from  TEXT,
            valid_to    TEXT,
            status      TEXT
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | rule_set_id | TEXT | 0 |  | 1 |
| 1 | name | TEXT | 0 |  | 0 |
| 2 | version | INTEGER | 0 |  | 0 |
| 3 | valid_from | TEXT | 0 |  | 0 |
| 4 | valid_to | TEXT | 0 |  | 0 |
| 5 | status | TEXT | 0 |  | 0 |

<a id="table-rules"></a>
## TABLE: rules
```sql
CREATE TABLE rules (
            rule_id     INTEGER PRIMARY KEY AUTOINCREMENT,
            rule_set_id TEXT NOT NULL,
            priority    INTEGER NOT NULL,
            driver_code TEXT,
            params_json TEXT,
            FOREIGN KEY (rule_set_id) REFERENCES rule_sets(rule_set_id)
        )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | rule_id | INTEGER | 0 |  | 1 |
| 1 | rule_set_id | TEXT | 1 |  | 0 |
| 2 | priority | INTEGER | 1 |  | 0 |
| 3 | driver_code | TEXT | 0 |  | 0 |
| 4 | params_json | TEXT | 0 |  | 0 |

**Foreign keys:**
- rule_set_id -> rule_sets(rule_set_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-run_history"></a>
## TABLE: run_history
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

<a id="table-run_log"></a>
## TABLE: run_log
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

<a id="table-schema_version"></a>
## TABLE: schema_version
```sql
CREATE TABLE schema_version(version INTEGER PRIMARY KEY,name TEXT NOT NULL,applied_at TEXT NOT NULL DEFAULT (datetime('now')))
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | version | INTEGER | 0 |  | 1 |
| 1 | name | TEXT | 1 |  | 0 |
| 2 | applied_at | TEXT | 1 | datetime('now') | 0 |

<a id="table-scrap_cost_unit"></a>
## TABLE: scrap_cost_unit
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

<a id="table-sqlite_sequence"></a>
## TABLE: sqlite_sequence
```sql
CREATE TABLE sqlite_sequence(name,seq)
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | name |  | 0 |  | 0 |
| 1 | seq |  | 0 |  | 0 |

<a id="table-transfer_batches"></a>
## TABLE: transfer_batches
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

**Foreign keys:**
- rule_id -> transfer_rules(rule_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-transfer_opex_items"></a>
## TABLE: transfer_opex_items
```sql
CREATE TABLE transfer_opex_items(
            batch_id     TEXT NOT NULL,
            from_cc_id   TEXT NOT NULL,
            to_cc_id     TEXT NOT NULL,
            elem_id      TEXT NOT NULL,
            to_elem_id   TEXT,
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
| 3 | elem_id | TEXT | 1 |  | 4 |
| 4 | to_elem_id | TEXT | 0 |  | 0 |
| 5 | amount_delta | REAL | 1 |  | 0 |

**Foreign keys:**
- batch_id -> transfer_batches(batch_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-transfer_personnel_items"></a>
## TABLE: transfer_personnel_items
```sql
CREATE TABLE "transfer_personnel_items"(
            id              INTEGER PRIMARY KEY AUTOINCREMENT,
            batch_id        TEXT NOT NULL,
            from_cc_id      TEXT,            -- РІ СЃС‚Р°СЂС‹С… Р·Р°РїРёСЃСЏС… РјРѕРіР»Рѕ Р±С‹С‚СЊ NULL
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

**Foreign keys:**
- batch_id -> transfer_batches(batch_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-transfer_rule_recipients"></a>
## TABLE: transfer_rule_recipients
```sql
CREATE TABLE transfer_rule_recipients(
        rule_id INTEGER NOT NULL,
        recipient_cc_id TEXT NOT NULL,
        share REAL NOT NULL,
        PRIMARY KEY(rule_id, recipient_cc_id),
        FOREIGN KEY(rule_id) REFERENCES transfer_rules(rule_id)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | rule_id | INTEGER | 1 |  | 1 |
| 1 | recipient_cc_id | TEXT | 1 |  | 2 |
| 2 | share | REAL | 1 |  | 0 |

**Foreign keys:**
- rule_id -> transfer_rules(rule_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-transfer_rules"></a>
## TABLE: transfer_rules
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

<a id="view-mo_last_price_current"></a>
## VIEW: mo_last_price_current
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

**References (best-effort):**
- mo_prices_history
- ranked

<a id="view-opex_budget_effective"></a>
## VIEW: opex_budget_effective
```sql
CREATE VIEW opex_budget_effective AS
        WITH base AS (
            SELECT cc_id, elem_id, bud_year, SUM(amount) AS amount
            FROM opex_budget
            GROUP BY cc_id, elem_id, bud_year
        ),
        plus AS (
            SELECT i.to_cc_id AS cc_id, COALESCE(i.to_elem_id, i.elem_id) AS elem_id, b.bud_year, SUM(i.amount_delta) AS plus_amt
            FROM transfer_opex_items i
            JOIN transfer_batches b ON b.batch_id = i.batch_id
            GROUP BY i.to_cc_id, COALESCE(i.to_elem_id, i.elem_id), b.bud_year
        ),
        minus AS (
            SELECT i.from_cc_id AS cc_id, i.elem_id, b.bud_year, SUM(-i.amount_delta) AS minus_amt
            FROM transfer_opex_items i
            JOIN transfer_batches b ON b.batch_id = i.batch_id
            GROUP BY i.from_cc_id, i.elem_id, b.bud_year
        ),
        keys AS (
            SELECT cc_id, elem_id, bud_year FROM base
            UNION
            SELECT cc_id, elem_id, bud_year FROM plus
            UNION
            SELECT cc_id, elem_id, bud_year FROM minus
        )
        SELECT k.cc_id, k.elem_id, k.bud_year,
               COALESCE(b.amount, 0) + COALESCE(p.plus_amt, 0) + COALESCE(m.minus_amt, 0) AS amount_effective
        FROM keys k
        LEFT JOIN base  b ON b.cc_id = k.cc_id AND b.elem_id = k.elem_id AND b.bud_year = k.bud_year
        LEFT JOIN plus  p ON p.cc_id = k.cc_id AND p.elem_id = k.elem_id AND p.bud_year = k.bud_year
        LEFT JOIN minus m ON m.cc_id = k.cc_id AND m.elem_id = k.elem_id AND m.bud_year = k.bud_year
```

**References (best-effort):**
- opex_budget
- transfer_opex_items
- transfer_batches
- base
- plus
- minus
- keys

<a id="view-personnel_yearly"></a>
## VIEW: personnel_yearly
```sql
CREATE VIEW personnel_yearly AS
        SELECT TRIM(cc_id) AS cc_id,
               CAST(substr(TRIM(ym), 1, 4) AS INTEGER) AS bud_year,
               AVG(headcount) AS headcount_avg_year
        FROM personnel_monthly
        GROUP BY TRIM(cc_id), CAST(substr(TRIM(ym), 1, 4) AS INTEGER)
```

**References (best-effort):**
- personnel_monthly

<a id="view-personnel_yearly_effective"></a>
## VIEW: personnel_yearly_effective
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

**References (best-effort):**
- personnel_monthly
- transfer_personnel_items
- transfer_batches
- delta_in
- delta_out
- base
- deltas
- keys

<a id="view-v_alloc_lineage"></a>
## VIEW: v_alloc_lineage
```sql
CREATE VIEW v_alloc_lineage AS
        SELECT * FROM lineage_links
```

**References (best-effort):**
- lineage_links

<a id="view-v_allocation_rule_effective"></a>
## VIEW: v_allocation_rule_effective
```sql
CREATE VIEW v_allocation_rule_effective AS
        WITH scoped AS (
            SELECT r.rule_set_id,
                   rs.rule_id,
                   rs.cc_node_id AS cc_id,
                   rs.elem_node_id AS elem_id,
                   r.priority,
                   r.driver_code,
                   (CASE WHEN rs.cc_node_id IS NOT NULL THEN 1 ELSE 0 END
                    + CASE WHEN rs.elem_node_id IS NOT NULL THEN 1 ELSE 0 END) AS specificity
            FROM rules r
            LEFT JOIN rule_scope rs ON rs.rule_id = r.rule_id
        ),
        ranked AS (
            SELECT *,
                   ROW_NUMBER() OVER (
                     PARTITION BY rule_set_id, cc_id, elem_id
                     ORDER BY specificity DESC, priority ASC, rule_id ASC
                   ) AS rn
            FROM scoped
        )
        SELECT rule_set_id, cc_id, elem_id, rule_id, driver_code, priority, specificity
        FROM ranked
        WHERE rn = 1
```

**References (best-effort):**
- rules
- rule_scope
- scoped
- ranked

<a id="view-v_bom_costs_scenario"></a>
## VIEW: v_bom_costs_scenario
```sql
CREATE VIEW v_bom_costs_scenario AS
        SELECT
          p.scenario_code,
          b.parent_item_id    AS product_id,
          b.component_item_id AS component_id,
          b.qty_per_unit,
          p.currency,
          p.price,
          b.qty_per_unit * p.price AS cost_component
        FROM bom_flat b
        JOIN v_price_by_scenario p
          ON p.item_code = b.component_item_id
```

**References (best-effort):**
- bom_flat
- v_price_by_scenario

<a id="view-v_cogs_unit"></a>
## VIEW: v_cogs_unit
```sql
CREATE VIEW v_cogs_unit AS
        WITH alloc AS (
          SELECT ca.period, ca.scenario, ca.product_id, ca.component_code, SUM(ca.amount) AS amount
          FROM cost_allocations ca
          JOIN rules r ON r.rule_id = ca.rule_id
          JOIN active_alloc_sets aas ON aas.scenario = ca.scenario AND aas.rule_set_id = r.rule_set_id
          GROUP BY ca.period, ca.scenario, ca.product_id, ca.component_code
        ),
        mat AS (
          SELECT dv.period,
                 COALESCE(dv.scenario, 'BASE') AS scenario,
                 dv.product_id,
                 'MATCOST' AS component_code,
                 SUM(dv.value) AS amount
          FROM driver_values dv
          WHERE dv.driver_code = 'MATCOST'
          GROUP BY dv.period, COALESCE(dv.scenario, 'BASE'), dv.product_id
        ),
        allc AS (
          SELECT * FROM alloc
          UNION ALL
          SELECT * FROM mat
        )
        SELECT a.period,
               a.scenario,
               a.product_id,
               a.component_code,
               a.amount,
               b.qty,
               CASE WHEN COALESCE(b.qty,0)=0 THEN 0.0 ELSE a.amount / b.qty END AS amount_per_unit
        FROM allc a
        LEFT JOIN v_prod_budget_active b
          ON b.product_id = a.product_id AND b.month_code = a.period
```

**References (best-effort):**
- cost_allocations
- rules
- active_alloc_sets
- driver_values
- alloc
- mat
- allc
- v_prod_budget_active

<a id="view-v_component_pools"></a>
## VIEW: v_component_pools
```sql
CREATE VIEW v_component_pools AS
        WITH base AS (
          SELECT cc_id, elem_id, bud_year, amount_effective
          FROM opex_budget_effective
        ),
        mapped AS (
          SELECT b.cc_id, m.component_code, b.bud_year, b.amount_effective
          FROM base b
          JOIN v_elem_component_map m ON m.elem_id = b.elem_id
        ),
        months(m) AS (
          VALUES(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12)
        ),
        expanded AS (
          SELECT printf('%04d-%02d', bud_year, m) AS period,
                 'PLAN' AS scenario,
                 cc_id,
                 component_code,
                 amount_effective / 12.0 AS amount
          FROM mapped, months
        )
        SELECT period, scenario, cc_id, component_code, SUM(amount) AS amount
        FROM expanded
        GROUP BY period, scenario, cc_id, component_code
```

**References (best-effort):**
- opex_budget_effective
- base
- v_elem_component_map
- mapped
- expanded

<a id="view-v_depr_rates_snapshot"></a>
## VIEW: v_depr_rates_snapshot
```sql
CREATE VIEW v_depr_rates_snapshot AS
        SELECT
          TRIM(COALESCE(department_code,''))                 AS department_code,
          NULL                                              AS cc_id,
          rate_value                                        AS rate_per_hour,
          NULL                                              AS hours_year,
          NULL                                              AS personnel_cost_year,
          CAST(CASE WHEN length(period_or_year)=4 THEN period_or_year
                    ELSE substr(period_or_year,1,4) END AS INTEGER) AS bud_year,
          COALESCE(currency, 'RUB')                         AS currency,
          source,
          NULL                                              AS calc_at,
          loaded_at
        FROM cost_rates
        WHERE component_code='DEPR_DIRECT'
```

**References (best-effort):**
- cost_rates

<a id="view-v_driver_catalog"></a>
## VIEW: v_driver_catalog
```sql
CREATE VIEW v_driver_catalog AS
        SELECT driver_code, name, unit, granularity, agg_rule, source_policy, is_ratio
        FROM drivers
```

**References (best-effort):**
- drivers

<a id="view-v_driver_values"></a>
## VIEW: v_driver_values
```sql
CREATE VIEW v_driver_values AS
        SELECT set_id, period, scenario, driver_code, product_id, cc_id, elem_id, value, unit, source_ref, loaded_at
        FROM driver_values
```

**References (best-effort):**
- driver_values

<a id="view-v_elem_component_map"></a>
## VIEW: v_elem_component_map
```sql
CREATE VIEW v_elem_component_map AS
        WITH RECURSIVE
        roots(component_code, root_id) AS (
          SELECT 'LABOR_DIRECT', 'MFC_PRIM_1' UNION ALL
          SELECT 'OPR_DIRECT',   'MFC_PRIM_2' UNION ALL
          SELECT 'DEPR_DIRECT',  'MFC_PRIM_3'
        ),
        closure(component_code, elem_id) AS (
          SELECT component_code, root_id FROM roots
          UNION ALL
          SELECT c.component_code, e.child_id
          FROM closure c
          JOIN elem_edges e ON e.parent_id = c.elem_id
        )
        SELECT DISTINCT component_code, elem_id
        FROM closure
```

**References (best-effort):**
- roots
- closure
- elem_edges

<a id="view-v_item_cg"></a>
## VIEW: v_item_cg
```sql
CREATE VIEW v_item_cg AS
    SELECT
      i.item_id,
      i.article,
      i.name,
      i.uom,
      i.matl_group,
      i.product_hierarchy,
      cm.commodity_group,
      cm.commodity_group_text
    FROM items i
    LEFT JOIN commodity_map cm
      ON cm.matl_prefix = substr(COALESCE(i.matl_group,''),1,3)
```

**References (best-effort):**
- items
- commodity_map

<a id="view-v_labor_cost_unit_total"></a>
## VIEW: v_labor_cost_unit_total
```sql
CREATE VIEW v_labor_cost_unit_total AS
        WITH cfg AS (
          SELECT month_code AS period FROM active_periods WHERE id=1
        ),
        alloc AS (
          SELECT ca.product_id, SUM(ca.amount) AS amount
          FROM cost_allocations ca, cfg
          WHERE ca.period = cfg.period AND ca.component_code = 'LABOR_DIRECT'
          GROUP BY ca.product_id
        ),
        qty AS (
          SELECT b.product_id, b.qty FROM v_prod_budget_active b, cfg
          WHERE b.month_code = cfg.period
        )
        SELECT a.product_id,
               CASE WHEN COALESCE(q.qty,0)=0 THEN 0.0 ELSE a.amount / q.qty END AS cost_total
        FROM alloc a
        LEFT JOIN qty q ON q.product_id = a.product_id
```

**References (best-effort):**
- active_periods
- cost_allocations
- v_prod_budget_active
- alloc
- qty

<a id="view-v_labor_rates_snapshot"></a>
## VIEW: v_labor_rates_snapshot
```sql
CREATE VIEW v_labor_rates_snapshot AS
        SELECT
          TRIM(COALESCE(department_code,''))                 AS department_code,
          NULL                                              AS cc_id,
          rate_value                                        AS rate_per_hour,
          NULL                                              AS hours_year,
          NULL                                              AS personnel_cost_year,
          CAST(CASE WHEN length(period_or_year)=4 THEN period_or_year
                    ELSE substr(period_or_year,1,4) END AS INTEGER) AS bud_year,
          COALESCE(currency, 'RUB')                         AS currency,
          source,
          NULL                                              AS calc_at,
          loaded_at
        FROM cost_rates
        WHERE component_code='LABOR_DIRECT'
```

**References (best-effort):**
- cost_rates

<a id="view-v_opr_cost_unit_total"></a>
## VIEW: v_opr_cost_unit_total
```sql
CREATE VIEW v_opr_cost_unit_total AS
        WITH cfg AS (
          SELECT month_code AS period FROM active_periods WHERE id=1
        ),
        alloc AS (
          SELECT ca.product_id, SUM(ca.amount) AS amount
          FROM cost_allocations ca, cfg
          WHERE ca.period = cfg.period AND ca.component_code = 'OPR_DIRECT'
          GROUP BY ca.product_id
        ),
        qty AS (
          SELECT b.product_id, b.qty FROM v_prod_budget_active b, cfg
          WHERE b.month_code = cfg.period
        )
        SELECT a.product_id,
               CASE WHEN COALESCE(q.qty,0)=0 THEN 0.0 ELSE a.amount / q.qty END AS cost_total
        FROM alloc a
        LEFT JOIN qty q ON q.product_id = a.product_id
```

**References (best-effort):**
- active_periods
- cost_allocations
- v_prod_budget_active
- alloc
- qty

<a id="view-v_opr_rates_snapshot"></a>
## VIEW: v_opr_rates_snapshot
```sql
CREATE VIEW v_opr_rates_snapshot AS
        SELECT
          TRIM(COALESCE(department_code,''))                 AS department_code,
          NULL                                              AS cc_id,
          rate_value                                        AS rate_per_hour,
          NULL                                              AS hours_year,
          NULL                                              AS personnel_cost_year,
          CAST(CASE WHEN length(period_or_year)=4 THEN period_or_year
                    ELSE substr(period_or_year,1,4) END AS INTEGER) AS bud_year,
          COALESCE(currency, 'RUB')                         AS currency,
          source,
          NULL                                              AS calc_at,
          loaded_at
        FROM cost_rates
        WHERE component_code='OPR_DIRECT'
```

**References (best-effort):**
- cost_rates

<a id="view-v_ovh_costs_scenario"></a>
## VIEW: v_ovh_costs_scenario
```sql
CREATE VIEW v_ovh_costs_scenario AS
        WITH cfg AS (
          SELECT COALESCE(year, CAST(strftime('%Y', 'now') AS INTEGER)) AS year
          FROM active_scenarios WHERE id=1
        )
        SELECT
          f.product_id,
          f.node_product_id,
          f.overhead_group,
          f.driver_code,
          f.driver_value_per_unit,
          t.cost_type,
          t.share,
          t.year,
          f.driver_value_per_unit * t.share AS cost_component
        FROM ovh_flat f
        JOIN cfg
        JOIN ovh_tariffs t
          ON t.overhead_group = f.overhead_group AND t.year = cfg.year
        WHERE (
          t.cost_type IN ('scrap','depr_opr','log') AND f.driver_code = 'MATCOST'
        ) OR (
          t.cost_type = 'adm' AND f.driver_code = 'PAYROLL_OTHER'
        )
```

**References (best-effort):**
- active_scenarios
- ovh_flat
- cfg
- ovh_tariffs

<a id="view-v_ovh_flat_compat"></a>
## VIEW: v_ovh_flat_compat
```sql
CREATE VIEW v_ovh_flat_compat AS
        SELECT
          product_id,
          node_product_id,
          overhead_group,
          driver_code           AS base_kind,
          driver_value_per_unit AS base_value_per_unit,
          driver_value_per_unit AS mat_cost,
          source,
          year
        FROM ovh_flat
```

**References (best-effort):**
- ovh_flat

<a id="view-v_price_by_article"></a>
## VIEW: v_price_by_article
```sql
CREATE VIEW v_price_by_article AS
    SELECT
      item_code,
      MAX(CASE WHEN scenario_code='BG25' THEN price END) AS BG25,
      MAX(CASE WHEN scenario_code='FC3'  THEN price END) AS FC3,
      MAX(CASE WHEN scenario_code='BG26' THEN price END) AS BG26
    FROM v_price_by_scenario
    WHERE currency='RUB'   -- РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РјРѕР¶РЅРѕ СѓР±СЂР°С‚СЊ/РїР°СЂР°РјРµС‚СЂРёР·РѕРІР°С‚СЊ
    GROUP BY item_code
```

**References (best-effort):**
- v_price_by_scenario

<a id="view-v_price_by_scenario"></a>
## VIEW: v_price_by_scenario (materials pipeline)
```sql
CREATE VIEW v_price_by_scenario AS
    WITH items AS (
      SELECT DISTINCT item_code, currency FROM rm_prices
    )
    SELECT
      ps.scenario_code,
      i.item_code,
      i.currency,
      (
        SELECT rp.price
        FROM rm_prices rp
        WHERE rp.item_code = i.item_code
          AND rp.currency  = i.currency
          AND rp.effective_from <= ps.asof_date
        ORDER BY rp.effective_from DESC
        LIMIT 1
      ) AS price
    FROM price_scenarios ps
    CROSS JOIN items i
```

**References (best-effort):**
- rm_prices
- price_scenarios
- items

<a id="view-v_prod_budget_active"></a>
## VIEW: v_prod_budget_active
```sql
CREATE VIEW v_prod_budget_active AS
    WITH cfg AS (SELECT vol_scenario FROM active_scenarios WHERE id=1)
    SELECT b.*
    FROM prod_budget b
    JOIN cfg ON cfg.vol_scenario = b.scenario
```

**References (best-effort):**
- active_scenarios
- prod_budget
- cfg

<a id="view-v_rate_parity"></a>
## VIEW: v_rate_parity
```sql
CREATE VIEW v_rate_parity AS
        WITH 
        -- Effective rates per department (pick best/latest)
        rates_ranked AS (
          SELECT department_code, rate_per_hour, currency, bud_year, source, calc_at,
                 ROW_NUMBER() OVER (
                   PARTITION BY department_code
                   ORDER BY COALESCE(bud_year,0) DESC,
                            CASE WHEN lower(COALESCE(source,''))='calc' THEN 0 ELSE 1 END,
                            datetime(COALESCE(calc_at,'1970-01-01')) DESC
                 ) AS rn
          FROM v_labor_rates_snapshot
        ),
        effective_rates AS (
          SELECT department_code, rate_per_hour
          FROM rates_ranked WHERE rn=1
        ),
        -- Hours per unit per product and department from routing_flat
        hrs AS (
          SELECT product_id, department_code, SUM(hours_per_unit) AS hpu
          FROM routing_flat
          GROUP BY product_id, department_code
        ),
        -- Plan qty by period (PLAN scenario only for parity)
        plan AS (
          SELECT month_code AS period, product_id, qty
          FROM prod_budget
          WHERE scenario = 'PLAN'
        ),
        -- Compute routingГ—rateГ—qty per (period, cc, product)
        rrq AS (
          SELECT p.period,
                 m.cc_id,
                 h.product_id,
                 SUM(h.hpu * er.rate_per_hour * p.qty) AS amount
          FROM hrs h
          JOIN effective_rates er ON er.department_code = h.department_code
          JOIN dep_cc_map m ON m.department_code = h.department_code
          JOIN plan p ON p.product_id = h.product_id
          GROUP BY p.period, m.cc_id, h.product_id
        ),
        sum_rrq AS (
          SELECT period, cc_id, SUM(amount) AS amount
          FROM rrq
          GROUP BY period, cc_id
        ),
        pools AS (
          SELECT period, scenario, cc_id, component_code, amount
          FROM v_component_pools
          WHERE component_code='LABOR_DIRECT'
        )
        SELECT p.period,
               p.scenario,
               p.cc_id,
               p.component_code,
               p.amount AS pool_from_opex,
               COALESCE(r.amount,0) AS sum_routing_rate_qty,
               COALESCE(p.amount,0) - COALESCE(r.amount,0) AS delta
        FROM pools p
        LEFT JOIN sum_rrq r ON r.period = p.period AND r.cc_id = p.cc_id
```

**References (best-effort):**
- v_labor_rates_snapshot
- rates_ranked
- routing_flat
- prod_budget
- hrs
- effective_rates
- dep_cc_map
- plan
- rrq
- v_component_pools
- pools
- sum_rrq

<a id="view-v_routing_costs_scenario"></a>
## VIEW: v_routing_costs_scenario
```sql
CREATE VIEW v_routing_costs_scenario AS
        SELECT
          cr.period_or_year,
          cr.scenario,
          rf.product_id,
          rf.node_product_id,
          rf.department_code,
          rf.operation,
		  rf.operation_id,
          cr.component_code,
          rf.hours_per_unit,
          cr.rate_value,
          COALESCE(rf.hours_per_unit,0) * COALESCE(cr.rate_value,0) AS cost_component
        FROM routing_flat rf
        JOIN cost_rates cr
          ON TRIM(COALESCE(cr.department_code,'')) = TRIM(COALESCE(rf.department_code,''))
```

**References (best-effort):**
- routing_flat
- cost_rates

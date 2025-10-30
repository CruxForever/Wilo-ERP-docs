# DB_SCHEMA

> Generated: 2025-10-20 16:25 (local)
> Commit: 5fb6b11

_Schema built by_: `db.schema.ensure_schema`

## Objects
- Tables:
  - [TABLE: active_alloc_sets](#table-active_alloc_sets)
  - [TABLE: active_periods](#table-active_periods)
  - [TABLE: active_scenarios](#table-active_scenarios)
  - [TABLE: activity_to_routing](#table-activity_to_routing)
  - [TABLE: bom](#table-bom)
  - [TABLE: bom_spec_components](#table-bom_spec_components)
  - [TABLE: bom_specs](#table-bom_specs)
  - [TABLE: bom_specs_new](#table-bom_specs_new)
  - [TABLE: commodity_map](#table-commodity_map)
  - [TABLE: cost_allocations](#table-cost_allocations)
  - [TABLE: cost_rates](#table-cost_rates)
  - [TABLE: dep_cc_map](#table-dep_cc_map)
  - [TABLE: depr_rates_snapshot](#table-depr_rates_snapshot)
  - [TABLE: driver_sets](#table-driver_sets)
  - [TABLE: driver_values](#table-driver_values)
  - [TABLE: drivers](#table-drivers)
  - [TABLE: elem_to_ovh](#table-elem_to_ovh)
  - [TABLE: fact_measures](#table-fact_measures)
  - [TABLE: item_nodes](#table-item_nodes)
  - [TABLE: items](#table-items)
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
  - [TABLE: opr_rates_snapshot](#table-opr_rates_snapshot)
  - [TABLE: ovh_bases_year](#table-ovh_bases_year)
  - [TABLE: ovh_cost_unit](#table-ovh_cost_unit)
  - [TABLE: ovh_flat](#table-ovh_flat)
  - [TABLE: ovh_nodes](#table-ovh_nodes)
  - [TABLE: ovh_tariffs](#table-ovh_tariffs)
  - [TABLE: ovh_tariffs_new](#table-ovh_tariffs_new)
  - [TABLE: ovh_tariffs_wide_bak](#table-ovh_tariffs_wide_bak)
  - [TABLE: personnel_monthly](#table-personnel_monthly)
  - [TABLE: price_scenarios (materials pipeline)](#table-price_scenarios)
  - [TABLE: prod_budget](#table-prod_budget)
  - [TABLE: rm_price_load (materials pipeline)](#table-rm_price_load)
  - [TABLE: rm_prices (materials pipeline)](#table-rm_prices)
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
  - [VIEW: ovh_tariffs_wide_compat](#view-ovh_tariffs_wide_compat)
  - [VIEW: personnel_yearly](#view-personnel_yearly)
  - [VIEW: personnel_yearly_effective](#view-personnel_yearly_effective)
  - [VIEW: v_alloc_lineage](#view-v_alloc_lineage)
  - [VIEW: v_allocation_rule_effective](#view-v_allocation_rule_effective)
  - [VIEW: v_cogs_unit](#view-v_cogs_unit)
  - [VIEW: v_component_pools](#view-v_component_pools)
  - [VIEW: v_driver_catalog](#view-v_driver_catalog)
  - [VIEW: v_driver_values](#view-v_driver_values)
  - [VIEW: v_elem_component_map](#view-v_elem_component_map)
  - [VIEW: v_item_cg](#view-v_item_cg)
  - [VIEW: v_labor_cost_unit_total](#view-v_labor_cost_unit_total)
  - [VIEW: v_opr_cost_unit_total](#view-v_opr_cost_unit_total)
  - [VIEW: v_ovh_cost_unit](#view-v_ovh_cost_unit)
  - [VIEW: v_ovh_flat_compat](#view-v_ovh_flat_compat)
  - [VIEW: v_price_by_article](#view-v_price_by_article)
  - [VIEW: v_price_by_scenario (materials pipeline)](#view-v_price_by_scenario)
  - [VIEW: v_prod_budget_active](#view-v_prod_budget_active)
  - [VIEW: v_rate_parity](#view-v_rate_parity)
  - [VIEW: v_recon_checks](#view-v_recon_checks)

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
      vol_scenario   TEXT,  -- например 'BG26_VOL'
      price_scenario TEXT   -- например 'FC3' или 'BG26' (если будешь именовать price-сценарии как в price-loads)
    )
```

| # | name | type | notnull | default | pk |
|---:|------|------|:------:|---------|:--:|
| 0 | id | INTEGER | 0 |  | 1 |
| 1 | vol_scenario | TEXT | 0 |  | 0 |
| 2 | price_scenario | TEXT | 0 |  | 0 |

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

<a id="table-bom_spec_components"></a>
## TABLE: bom_spec_components
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

<a id="table-bom_specs"></a>
## TABLE: bom_specs
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

<a id="table-bom_specs_new"></a>
## TABLE: bom_specs_new
```sql
CREATE TABLE bom_specs_new(
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

<a id="table-commodity_map"></a>
## TABLE: commodity_map
```sql
CREATE TABLE commodity_map (
        matl_prefix            TEXT PRIMARY KEY,   -- например '123'
        matl_group_text_opt    TEXT,               -- опционально: полное имя Matl Group
        commodity_group        TEXT NOT NULL,      -- номер CG, например '123'
        commodity_group_text   TEXT                -- описание CG
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
            run_id         TEXT,
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

<a id="table-depr_rates_snapshot"></a>
## TABLE: depr_rates_snapshot
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
        name        TEXT NOT NULL,            -- человекочитаемое имя "Buildings→Prod"
        bud_year    INTEGER NOT NULL,         -- к какому году относится набор
        elem_root   TEXT NOT NULL,            -- корень группы элементов
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

**Foreign keys:**
- mapped_elem_id -> elem_nodes(elem_id) (on update NO ACTION, on delete NO ACTION, match NONE)
- cc_id -> cc_nodes(cc_id) (on update NO ACTION, on delete NO ACTION, match NONE)

<a id="table-opr_rates_snapshot"></a>
## TABLE: opr_rates_snapshot
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

<a id="table-ovh_bases_year"></a>
## TABLE: ovh_bases_year
```sql
CREATE TABLE ovh_bases_year (
        year            INTEGER        NOT NULL,
        overhead_group  TEXT           NOT NULL,
        -- материалка за год и её доля в total по всем A001..A010
        mat_base_year   REAL           NOT NULL DEFAULT 0.0,
        mat_share       REAL,
        -- исходные суммы (до распределения)
        base_depr_src   REAL           NOT NULL DEFAULT 0.0,   -- Аморт. ОПР (CC 25407 × MFC_PRIM_3)
        base_log_src    REAL           NOT NULL DEFAULT 0.0,   -- ОХР Логистика (P45/46/47 × MFC_PRIM)
        base_adm_src    REAL           NOT NULL DEFAULT 0.0,   -- ОХР Управленч. (P41/43/44/48 × MFC_PRIM) минус Аморт. ОПР
        -- распределённые суммы по долям mat_share
        dist_depr       REAL           NOT NULL DEFAULT 0.0,
        dist_log        REAL           NOT NULL DEFAULT 0.0,
        dist_adm        REAL           NOT NULL DEFAULT 0.0,   -- пока = base_adm_src×mat_share; затем пересчитаем через (труд+ОПР)
        -- происхождение / техполя
        opex_load_ids   TEXT,                                   -- UUID списком (через запятую), если несколько загрузок
        prod_months     TEXT,                                   -- например: '2026-01..2026-12'
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
CREATE TABLE ovh_tariffs (
                    overhead_group TEXT NOT NULL,
                    year           INTEGER NOT NULL,
                    scenario       TEXT NOT NULL DEFAULT '',
                    cost_type      TEXT NOT NULL,
                    share          REAL,
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
            year           INTEGER NOT NULL,
            scenario       TEXT NOT NULL DEFAULT '',
            cost_type      TEXT NOT NULL,
            share          REAL,
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

<a id="table-ovh_tariffs_wide_bak"></a>
## TABLE: ovh_tariffs_wide_bak
```sql
CREATE TABLE "ovh_tariffs_wide_bak" (
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
        -- НОВОЕ:
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
            effective_from  TEXT NOT NULL,                   -- ключ для истории
            price           REAL NOT NULL,
            article         TEXT,
            uom             TEXT,
            load_id         TEXT NOT NULL,                   -- uuid загрузки
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

<a id="view-ovh_tariffs_wide_compat"></a>
## VIEW: ovh_tariffs_wide_compat
```sql
CREATE VIEW ovh_tariffs_wide_compat AS
                SELECT
                    overhead_group,
                    year,
                    MAX(CASE WHEN cost_type='scrap'    THEN share END) AS scrap_share,
                    MAX(CASE WHEN cost_type='depr_opr' THEN share END) AS depr_opr_share,
                    MAX(CASE WHEN cost_type='log'      THEN share END) AS log_share,
                    MAX(CASE WHEN cost_type='adm'      THEN share END) AS adm_share
                FROM ovh_tariffs
                GROUP BY overhead_group, year
```

**References (best-effort):**
- ovh_tariffs

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

<a id="view-v_ovh_cost_unit"></a>
## VIEW: v_ovh_cost_unit
```sql
CREATE VIEW v_ovh_cost_unit AS
        SELECT product_id, depr_opr_cost, log_cost, adm_cost FROM ovh_cost_unit
```

**References (best-effort):**
- ovh_cost_unit

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
    WHERE currency='RUB'   -- при необходимости можно убрать/параметризовать
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
        -- Compute routing×rate×qty per (period, cc, product)
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

<a id="view-v_recon_checks"></a>
## VIEW: v_recon_checks
```sql
CREATE VIEW v_recon_checks AS
        WITH plan AS (
          SELECT product_id, qty, month_code FROM v_prod_budget_active
        ),
        pool AS (
          SELECT m.cc_id,
                 p.month_code AS period,
                 SUM(l.cost_total * p.qty) AS pool_amount
          FROM labor_cost_unit l
          JOIN dep_cc_map m ON m.department_code = l.department_code
          JOIN plan p ON p.product_id = l.product_id
          GROUP BY m.cc_id, p.month_code
        ),
        alloc AS (
          SELECT ca.cc_id, ca.period, SUM(ca.amount) AS allocated
          FROM cost_allocations ca
          JOIN rules r ON r.rule_id = ca.rule_id
          JOIN active_alloc_sets aas ON aas.scenario = ca.scenario AND aas.rule_set_id = r.rule_set_id
          WHERE ca.component_code = 'LABOR_DIRECT'
          GROUP BY ca.cc_id, ca.period
        )
        SELECT COALESCE(p.cc_id, a.cc_id) AS cc_id,
               COALESCE(p.period, a.period) AS period,
               COALESCE(p.pool_amount,0) AS pool_amount,
               COALESCE(a.allocated,0) AS allocated,
               COALESCE(a.allocated,0) - COALESCE(p.pool_amount,0) AS delta
        FROM pool p
        LEFT JOIN alloc a ON a.cc_id = p.cc_id AND a.period = p.period
        UNION
        SELECT a.cc_id, a.period, 0 AS pool_amount, a.allocated, a.allocated AS delta
        FROM alloc a
        WHERE NOT EXISTS (SELECT 1 FROM pool p WHERE p.cc_id = a.cc_id AND p.period = a.period)
```

**References (best-effort):**
- v_prod_budget_active
- labor_cost_unit
- dep_cc_map
- plan
- cost_allocations
- rules
- active_alloc_sets
- pool
- alloc

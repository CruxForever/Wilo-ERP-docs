# Implementation Summary — Phase A → C and Allocation Wizard (2025‑10‑09)

This document summarizes all changes implemented today across schema, ETL, allocation engine, unified cost views, performance, CLI tools, and Streamlit UI, including the new Allocation Wizard.

## Overview
- Added Phase A core tables and compat views; minimal ETL for drivers with zero filtering.
- Seeded 2026 sample data; implemented drivers ETL for HOURS, MATCOST, PAYROLL_OTHER; utility CLIs.
- Added Phase B allocation core (cost_allocations, lineage) + engine v1 with CC‑closure, elem→component mapping, “weights” and “rate” policies, and scenario‑aware planning.
- Added Phase C unified `v_cogs_unit` and compat cost views driven by active period; refactored UI calculators to use the new layer. Improved startup performance.
- Built a two‑tab Allocation Wizard (Create/Edit) with rule publishing, deletion, and “apply” operations.

---

## Schema Migrations (db/schema.py)
- v6 `phase_a_core_and_compat`:
  - Tables: `drivers`, `driver_sets`, `driver_values`, `cost_rates`, `fact_measures`, hierarchy skeletons (`item_nodes`, `routing_nodes`, `ovh_nodes`), bridges.
  - Compat views: `v_driver_catalog`, `v_driver_values`, `v_labor_cost_unit_total`, `v_opr_cost_unit_total`, `v_ovh_cost_unit` (passthrough initially).
- v7 `phase_b_alloc_core`:
  - Tables: `cost_allocations` (PK period+scenario+component+product+cc+rule), `lineage_links`.
  - Views: `v_allocation_rule_effective`, `v_alloc_lineage`, `v_cogs_unit` (initial), `v_recon_checks` (recon at component level via UNION emulation).
- v8 `phase_b_recon_components`: component‑aware `v_recon_checks` (LABOR_DIRECT, OPR_DIRECT, DEPR_DIRECT).
- v9 `phase_c_active_period_and_compat_views`:
  - Table: `active_periods(id=1, month_code)`.
  - Redefined compat views `v_labor_cost_unit_total`, `v_opr_cost_unit_total` to derive from allocations and plan for active period.
- v10 `phase_c_unify_cogs_view`:
  - Unified `v_cogs_unit` = allocations UNION MATCOST from `driver_values`, with unit via plan join.
- v11 `phase_c_perf_indexes`:
  - Indices: `cost_allocations(period)`, `(period,scenario)`, `(period,component_code)`, `(product_id)` and `driver_values(period)`.

---

## Drivers and ETL (calc/driver_etl.py, tools)
- `populate_hours_plan_driver_values(conn, set_id, month)` — HOURS(PLAN) by product×CC; zero rows filtered (`ABS(value)>1e-9`).
- `populate_matcost_plan_driver_values(conn, set_id, month)` — BOM×last RM price × plan (RUB), product‑level.
- `populate_payroll_other_plan_driver_values(conn, set_id, month)` — OPEX effective yearly/12 to CC monthly.
- `ensure_driver_catalog_min(conn)` — registers HOURS, MATCOST, PAYROLL_OTHER in `drivers`.
- Zero cleanup utility: `delete_zero_driver_values(...)` and CLI `tools/cleanup_driver_values.py`.
- Seed and runners:
  - `tools/seed_2026.py` — seeds minimal items/BOM/routings, dep→CC mapping, RM prices; loads plan for all 2026; materializes hours; runs ETL for all drivers.
  - `tools/etl_hours.py`, `tools/etl_drivers.py` — month/year runners.

Usage examples:
- `python tools/etl_hours.py --month 2026-01 --set-id PLAN_HOURS_2026`
- `python tools/etl_drivers.py --year 2026 --drivers all --set-id-hours PLAN_HOURS_2026 --set-id-matcost PLAN_MATCOST_2026 --set-id-payroll PLAN_PAYOTHER_2026`

---

## Allocation Engine (calc/alloc_engine.py) and CLIs
- Engine entry: `apply_allocations(conn, period, scenario, rule_set_id, run_id=None, components=None)`.
- CC expansion: resolves CC group to leaf CCs via `cc_edges` (fallback to `cc_nodes.parent_id`).
- Element→component mapping: `MFC_PRIM_1→LABOR_DIRECT`, `MFC_PRIM_2→OPR_DIRECT`, `MFC_PRIM_3→DEPR_DIRECT`.
- Policies per rule (from `rules.params_json`):
  - `policy = 'rate'`: direct computation per (cc_leaf, component): `Σ(unit_cost × qty)` per product — writes allocations without weights (lineage from unit source tables).
  - `policy = 'weights'`: per (cc_leaf, component), computes the same per‑pair pool and splits by `driver_values` weights (e.g., HOURS). Pool now uses the chosen volume scenario (see below).
  - Optional `component` override in params to force component table mapping.
- Scenario handling: planning qty now taken from `prod_budget WHERE month_code=:period AND scenario=:scenario` (replaces dependence on active scenario), both for `rate` and `weights` paths.
- Component filter: optional `components=[...]` to restrict apply to selected components.
- CLIs:
  - `tools/alloc_apply.py --period YYYY-MM --scenario PLAN --rule-set DEFAULT_2026`
  - `tools/alloc_apply_year.py --year 2026 --scenario PLAN --rule-set DEFAULT_2026`
  - Rule seeding: `tools/alloc_rules_seed.py --rule-set DEFAULT_2026 --cc RU1OP1P21` (creates 3 rules for MFC_PRIM_1/2/3 → HOURS).
  - Reporting: `tools/alloc_report.py --year 2026 --scenario PLAN` (component totals, recon anomalies, sample COGS/unit).

Notes:
- Recon view `v_recon_checks` compares component pools (unit tables × plan) vs summed allocations per CC and month — should be ≈0 allowing rounding.
- Pools are computed per (cc_leaf, component), not a single CC aggregate.

---

## Unified Costs and Compat Views
- `v_cogs_unit` now returns rows for components from allocations and adds MATCOST from driver_values. Unit is computed by dividing amount by plan qty for the period.
- Compat views for unit totals (`v_labor_cost_unit_total`, `v_opr_cost_unit_total`) derive from `cost_allocations` constrained by `active_periods.month_code`.
- Active period configuration CLI: `tools/set_active_period.py --period 2026-01`.

---

## Streamlit UI Changes
- Refactor calculators to new layer:
  - `ui/views_item_cost.py` now uses `v_cogs_unit`; list of periods/scenarios loaded from base tables (fast), and computation happens on button click.
  - `ui/data_cogs.py` — data access helpers (fast periods/scenarios, fetch, pivot).
- Performance improvements:
  - Avoid heavy queries to `v_cogs_unit` during first render.
  - New DB indices (see v11) speed up common filters.
- App tabs updated (`ui/app_streamlit.py`) to include a new “Allocations” tab.

---

## Allocation Wizard (ui/alloc_wizard.py)
- Two tabs: **Создание** (steps 0–7) and **Редактирование**.
- Creation steps (0–7):
  - Step 0 — Context: period range, scenario (PLAN/ACT/FORECAST/BASE), rule set selection or creation (draft), optional product scope, quick metrics.
  - Step 1 — Target & component: select `component_code`, description, policy (`weights` or `rate`).
  - Step 2 — Scope (pools): pick CC nodes and element nodes (tree groups); closure shows leaf counts; pool estimate for first month using `Σ(unit_cost × qty)` per (cc_leaf, component) and chosen scenario.
  - Step 3 — Drivers: `driver_code`, `driver_set`, fallback; preview weights top‑10 per CC; checks for empties/zeros.
  - Step 4 — Overrides (optional): JSON list of extra rules with scopes/priority; conflict responsibility noted.
  - Step 5 — Simulation (dry‑run light): show pool sum and weights per CC for the first month.
  - Step 6 — Publish (draft→active): creates/updates rule_set; inserts base rule and its `rule_scope` (cc×elem cartesian of leaves); inserts overrides; set ACTIVE if requested.
  - Step 7 — Apply: calls `apply_allocations` for all months in range.
- Editing tab:
  - Pick rule set, view rules with columns: rule_id, priority, driver_code, component, scope_count, aggregated `cc_nodes`, `elem_nodes`.
  - Bulk delete selected rules (removes from `rule_scope` then `rules`).
  - Change rule set status (ACTIVE/FROZEN).
  - Run allocation by period range, scenario, and selected components (passes `components=[...]` to the engine).
- Dataclass defaults fixed via `default_factory` to avoid mutable defaults.

---

## Pool Estimate Formula (as shown in Wizard)
For CC leaf `x`, component `C`, month `YYYY-MM`, scenario `SCN`:
- `pool(x,C,YYYY-MM,SCN) = Σ_{product} ( unit_cost_C(product) × qty(product, YYYY-MM, SCN) )`
- unit sources: `labor_cost_unit` / `opr_cost_unit` / `depr_cost_unit` for LABOR/OPR/DEPR.
- CC mapping via `dep_cc_map` (department → cc_id = x).
- Wizard uses that formula for the first month in range; engine uses the same formula for each month.

---

## Quick Recipes
- Initialize DB schema:
  - `python main.py --init-db`
- Seed demo data and run ETL (all drivers) for 2026:
  - `python -m tools.seed_2026`
- Run allocations for a single month or full year:
  - `python -m tools.alloc_apply --period 2026-01 --scenario PLAN --rule-set DEFAULT_2026`
  - `python tools/alloc_apply_year.py --year 2026 --scenario PLAN --rule-set DEFAULT_2026`
- Set active period for compat views:
  - `python tools/set_active_period.py --period 2026-01`
- Open UI:
  - Streamlit app entry: `ui/app_streamlit.py` → tab “Allocations”.

---

## Known Follow‑ups / Next Steps
- Extend allocation to overhead components (OVH_LOG, OVH_ADM) and include them in `v_cogs_unit` once populated.
- Add UI: rule cloning (v+1), visual overrides editor, richer coverage/recon tabs inside the wizard.
- Tighten unit/driver compatibility validators and add per‑rule dry‑run preview.
- Reconcile any non‑zero `v_recon_checks` deltas by checking dep→CC mapping and scenario alignment.


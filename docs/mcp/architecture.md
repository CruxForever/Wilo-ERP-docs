# Architecture snapshot

- Data domains: materials/BOM, direct labor/operations, overhead/OPEX; converge into unit cost view `v_cogs_unit` (materials + directs + ovh + MO).
- Staging → core → materialized: loaders write into staging tables; merge/upsert into core tables; SQL in `sql/materialize` builds flattened artifacts (`bom_flat`, `routing_flat`, `ovh_flat`) and scenario-based views (`v_bom_costs_scenario`, `v_routing_costs_scenario`, `v_ovh_costs_scenario`).
- Scenarios: price scenarios (`price_scenarios`) drive BOM material costs; routing uses cost rates per component (LABOR_DIRECT, OPR_DIRECT, DEPR_DIRECT) and scenario/year; overhead uses OPEX budgets + tariffs per scenario.
- Active context: `active_scenarios` stores current year/price_scenario used by calculators like `calc/budget.py`.
- UI: Streamlit views in `ui/` read from materialized views and calculators for unit cost, budgeting, transfers, overhead, NSI.
- Run paths: `calc/materialize.py` and `calc/item_cost.py` orchestrate materialization and cost computation; `db/schema.py` defines DDL and ensure functions.

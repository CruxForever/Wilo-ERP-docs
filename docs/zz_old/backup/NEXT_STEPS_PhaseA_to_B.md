# Next Steps — After Phase A bootstrap
**Date:** 2025-10-09

## Immediate (today)
1) **Acceptance check (Phase A):**
   - [ ] Ensure new tables/views exist: `drivers`, `driver_sets`, `driver_values`, `cost_rates`, `fact_measures`, hierarchies, rule_*.
   - [ ] Run HOURS(PLAN) ETL for a sample month (e.g., `2025-09`) and set (`PLAN_HOURS_SET`).
   - [ ] Open `v_driver_values` and confirm HOURS rows for (product_id, cc_id) pairs exist and look sane.
   - [ ] Validate coverage: no rows with NULL `cc_id`; if present — extend `dep_cc_map` then rerun ETL.
   - [ ] Compare old labor report vs `v_labor_cost_unit_total` (parity expected).

2) **Populate driver catalog (data governance):**
   - [ ] Insert driver cards for `HOURS`, `MATCOST`, `PAYROLL_OTHER` into `drivers` with: unit, granularity, agg_rule, source_policy.
   - [ ] Register driver sets: `PLAN_2026`, `ACT_2026M01` (status draft).

3) **Prepare MATCOST and PAYROLL_OTHER staging plan:**
   - [ ] Decide exact source for MATCOST (materials per product per month): existing materialization or interim view.
   - [ ] Decide source for PAYROLL_OTHER: OPEX groups mapping (elem→group) aggregated to CC or product+CC.

## This week (Phase A completion)
4) **ETL adapters (minimal):**
   - [ ] Add ETL stubs: `populate_matcost_plan_driver_values`, `populate_payroll_other_plan_driver_values` (even for one month).
   - [ ] Ensure idempotency keys: `(set_id, period, driver_code, product_id, cc_id)`.

5) **Rule matrix skeleton:**
   - [ ] Fill `rule_sets` with `DEFAULT_2026 v1 (active=false)`.
   - [ ] Add one rule for CC 25410 × elem_group MFC_PRIM_1 → `driver=HOURS` (priority=10).
   - [ ] Create or finalize `v_allocation_rule_effective` (specificity→priority + catch‑all).

6) **Docs:**
   - [ ] Update `ERP_TARGET_ARCHITECTURE.md` sections: Drivers, Rates, Rule Matrix.
   - [ ] Add short Runbook: “How to populate HOURS/MATCOST/PAYROLL_OTHER”.

## Ready for Phase B when:
- HOURS and MATCOST exist for the sample month in `driver_values`.
- `rule_sets` has a draft set with at least 1 rule (CC 25410 × MFC_PRIM_1 → HOURS).
- Coverage and sanity checks are green.

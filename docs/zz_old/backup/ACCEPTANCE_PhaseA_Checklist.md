# Phase A — Acceptance Checklist
**Date:** 2025-10-09

## Schema & Views
- [ ] `ensure_schema` creates new core tables without errors.
- [ ] `v_driver_catalog` lists at least HOURS with correct unit and granularity.
- [ ] `v_driver_values` returns HOURS rows for chosen month/set.

## Data
- [ ] ETL wrote HOURS(PLAN) with correct keys (set_id, period, driver_code, product_id, cc_id).
- [ ] Coverage: 0 rows with NULL cc_id (post dep_cc_map fix).

## Compatibility
- [ ] Legacy reports (labor/opR/ovh) read via passthrough views and match numbers on sample month.

## Governance
- [ ] Drivers registered: HOURS, MATCOST, PAYROLL_OTHER.
- [ ] Driver sets registered: PLAN_2026 and ACT_2026M01 (draft).

## Go/No-Go for Phase B
- [ ] All above completed.

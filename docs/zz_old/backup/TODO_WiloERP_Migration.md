# Wilo‑ERP Migration — To‑Do (Three Phases)

**Owner:** Petr Podolyakin  
**Last updated:** 2025-10-09

Legend: [ ] todo · [~] in progress · [x] done

## Phase A — Core & Compatibility (foundations)
- [ ] **A1. DDL — Core entities**
  - [ ] `drivers(driver_code, name, unit, granularity, agg_rule, source_policy, is_ratio)`
  - [ ] `driver_sets(set_id, name, version, valid_from, valid_to, status)`
  - [ ] `driver_values(set_id, period, scenario, driver_code, product_id?, cc_id?, elem_id?, value, unit, source_ref, loaded_at)`
  - [ ] `cost_rates(period_or_year, scenario, component_code, cc_id?, product_id?, rate_value, unit, source, run_id)`
  - [ ] `fact_measures(period, scenario, product_id, component_code, measure_code, value, unit)`
  - [ ] New hierarchies: `item_nodes`, `routing_nodes`, `ovh_nodes`
  - [ ] Bridges: `activity_to_routing`, `elem_to_ovh`
- [ ] **A2. Migrations & back‑compat views**
  - [ ] Views that map new long formats to legacy wide ones:  
        `v_labor_cost_unit_total`, `v_opr_cost_unit_total`, `v_ovh_cost_unit`
  - [ ] `v_driver_catalog`, `v_driver_values`
- [ ] **A3. ETL adapters (populate driver_values)**
  - [ ] HOURS: prod_budget × routing.std_hours (plan) / MES (fact)
  - [ ] MATCOST: material base aggregated to product
  - [ ] PAYROLL_OTHER: payroll+others by CC / product+CC
- [ ] **A4. Rates population**
  - [ ] Map existing labor/opr/ovh tariffs into `cost_rates` (+ snapshots)
- [ ] **A5. Rule matrix skeleton**
  - [ ] `rule_sets`, `rules(priority, driver_code, params_json)`, `rule_scope(cc_node_id?, elem_node_id?)`
  - [ ] `v_allocation_rule_effective` (specificity → priority, catch‑all support)
- [ ] **A6. Quality gates**
  - [ ] Coverage: CC×Element pairs in OPEX without effective rule
  - [ ] Driver completeness: recipients without driver values
  - [ ] Recon: Σpools == Σallocated (placeholder for Phase B)
- [ ] **A7. Docs**
  - [ ] Update `SYSTEM_BLUEPRINT.md` / `ERP_TARGET_ARCHITECTURE.md`
  - [ ] Driver Catalog Spec (HOURS, MATCOST, PAYROLL_OTHER)
  - [ ] Readme: “How to read the system”

**Exit criteria (Phase A):**
- [ ] New core tables exist and are filled for at least HOURS (plan) and one month of MATCOST.  
- [ ] Legacy reports read via compatibility views with identical numbers on sample month.  
- [ ] `v_allocation_rule_effective` returns a single rule per (cc, elem) for sample scope.

---

## Phase B — Allocation Engine & Period Close
- [ ] Allocation Engine v1 (weights/ratios): apply rules → `cost_allocations`
- [ ] Labor direct slice E2E (plan): CC 25410 → LABOR_DIRECT on products
- [ ] Lineage: `lineage_links(src→dst, rule_id, run_id)`
- [ ] Period‑close workflow (UI): Load Fact → Normalize → Apply Rules → Checks → Freeze
- [ ] `cogs_unit` + `v_cogs_unit`, `v_alloc_lineage`, `v_recon_checks`
- [ ] Variance framework (volume/mix/price/rate) — base views

**Exit criteria (Phase B):**
- [ ] End‑to‑end allocation for at least 1 component (LABOR_DIRECT) with formal recon = 0.  
- [ ] Close procedure produces frozen snapshots and lineage for audit.

---

## Phase C — Full Switch & Decommission
- [ ] Migrate calculators to new sources (driver_values/cost_rates)
- [ ] Replace old wide tables with views; remove dead code
- [ ] Expand components (DEPR_OPR, OVH_LOG, OVH_ADM, etc.)
- [ ] Performance hardening (indexes, caches, batch size)
- [ ] Test pack: unit + integration + golden datasets

**Exit criteria (Phase C):**
- [ ] All major reports run on new layer with parity.  
- [ ] Old tables/calculators are deprecated or aliased only via views.

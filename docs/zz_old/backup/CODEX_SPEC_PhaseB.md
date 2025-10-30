# VS Code — gpt‑5‑codex Task Spec (Phase B)

**Context:** Phase A delivered core tables/views and HOURS(PLAN) ETL. Now we implement Allocation Engine v1 and first end‑to‑end slice (Labor Direct via CC 25410).

## Objective (Phase B)
1) Implement **Allocation Engine v1** (weights-based) operating on `driver_values` and `rule_*`.  
2) Deliver **Labor Direct (PLAN)** E2E: CC 25410 × MFC_PRIM_1 → products, write to `cost_allocations` and produce `cogs_unit`.

## Constraints
- SQLite, no external services. Non-destructive changes. Preserve Phase A compat views.
- Deterministic, idempotent writes keyed by (period, scenario, component_code, product_id, cc_id, rule_id).

## Deliverables
1. **Core logic**
   - Module `calc/alloc_engine.py` with function:
     `apply_allocations(conn, period, scenario, rule_set_id)`
     Steps: 
       a) Build effective rule map via `v_allocation_rule_effective`.
       b) For each (cc, elem) pool in OPEX (PLAN) find driver and recipient set.
       c) Compute weights from `driver_values`.
       d) Write to `cost_allocations` with lineage (src rows, rule_id, weight).
   - Helper to compute **Labor Direct** amounts equivalently by weights or by rate for validation.

2. **Lineage**
   - Table `lineage_links(src_table, src_pk, dst_table, dst_pk, rule_id, run_id)` and writes from engine.

3. **Views & Reports**
   - `v_alloc_lineage` (audit), `v_cogs_unit` (unit cost per product & component), `v_recon_checks` (Σpools==Σallocated).

4. **CLI**
   - `tools/alloc_apply.py --period YYYY-MM --scenario PLAN --rule-set DEFAULT_2026`

## Acceptance Criteria
- Running the CLI allocates CC 25410 MFC_PRIM_1 pool to products using HOURS(PLAN), no leftovers, recon=0.
- `v_cogs_unit` shows “Labor Direct” amounts; parity between weights‑based and rate‑based calculations.

## Hints
- Reuse existing SUMs from fact_opex and routing hours to cross-check.
- Use transactions per period and batch inserts.

# VS Code — gpt‑5‑codex Task Spec (Phase A)

**Context:** Wilo‑ERP migrating to unified long formats for drivers, rates, measures, and allocation rules. Keep existing UI/reporting functional via compatibility views. Language: Python (Streamlit UI + SQLite).

## Objective (Phase A)
Implement schema & compatibility layer and minimal ETL to populate HOURS (plan). Do not refactor UI yet.

## Model
Use **gpt‑5‑codex‑medium** for speed/latency. If diff touches complex SQL windowing or tricky migrations, temporarily switch to **gpt‑5‑codex‑high**.

## Constraints
- Non‑destructive migrations; add tables/views without breaking existing readers.
- Backwards‑compatible views MUST keep old column names and types where feasible.
- No external services, SQLite only.
- Add indexes where scans are heavy.

## Deliverables
1. **DDL** (in `db/schema.py` or dedicated migration):  
   - tables: `drivers`, `driver_sets`, `driver_values`, `cost_rates`, `fact_measures`, `item_nodes`, `routing_nodes`, `ovh_nodes`, `activity_to_routing`, `elem_to_ovh`  
   - skeleton: `rule_sets`, `rules`, `rule_scope`
2. **Compat Views** (in `db/schema.py`):  
   - `v_labor_cost_unit_total`, `v_opr_cost_unit_total`, `v_ovh_cost_unit`, `v_driver_catalog`, `v_driver_values`
3. **ETL Adapter (minimal)**:  
   - Populate `driver_values` for **HOURS (PLAN)** from existing prod budget × routing hours (re‑use current helpers).  
   - One month sample data path via existing loaders; ensure idempotent inserts keyed by `(set_id, period, driver_code, product_id, cc_id)`.
4. **Quality Checks:**  
   - SQL for coverage of HOURS (no NULL recipients for CC in sample month).  
   - Basic index hints.

## Acceptance Criteria
- `ensure_schema(conn)` creates new tables & views without errors on an empty db.  
- Running the sample ETL writes HOURS rows into `driver_values` and `v_driver_values` shows them.  
- Legacy labor cost unit report returns identical totals for the sample month via `v_labor_cost_unit_total`.

## Hints for the Assistant (what to read/modify)
- Look into: `db/schema.py` (ensure_*), `calc/item_cost.py`, existing labor/opr/ovh rate builders.  
- Prefer **views** to mimic old wide tables from new long ones.  
- Use consistent naming: snake_case, singular table names, clear PK/UK.

## Out of Scope (Phase A)
- No allocation engine yet; no UI changes; no variance bridges.

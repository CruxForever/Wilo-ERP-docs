# Runbooks (quick commands)

- Initialize DB: `python main.py --init-db` (creates/refreshes `01_DB-Data/costcalc.db`).
- Materialize all data: `python main.py --materialize-all` (or scoped: `--materialize-bom`, `--compute-costs`, `--calc-ovh`).
- Streamlit UI: `streamlit run ui/app_streamlit.py` (runs against `01_DB-Data/costcalc.db` by default).
- Budget year refresh: see detailed steps under `docs/40_runbooks/run_budget_year.md` (load sources → materialize → check scenarios).
- Reporting run: `docs/40_runbooks/run_reporting.md`.
- Inventories flow: section `docs/40_runbooks/06_inventories/` (export 1C → process sheets → check worksheet → final upload).

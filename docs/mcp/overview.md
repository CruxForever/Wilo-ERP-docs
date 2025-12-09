# Wilo-ERP – quick overview

- Purpose: internal controlling toolkit (COGS, budgeting, OPEX), ingesting 1C/Excel exports into SQLite (`01_DB-Data/costcalc.db`) and exposing calculations via Streamlit UI.
- Tech: Python 3.12, SQLite, Streamlit; calculations in `calc/`, data loaders in `loaders/`, UI in `ui/`, DB DDL/queries in `db/`, SQL snippets in `sql/`.
- Key flows: loaders stage/merge Excel/CSV → materialize views -> cost calculations (BOM + direct + overhead) -> Streamlit dashboards/export.
- Entrypoints: `python main.py --init-db` (create/refresh DB), `python main.py --materialize-all` (rebuild materialized data), `streamlit run ui/app_streamlit.py` (UI).
- Documentation: rich Markdown under `docs/` with architecture, schema, data flows, and runbooks (mkdocs compatible).

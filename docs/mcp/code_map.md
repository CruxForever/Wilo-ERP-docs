# Code map (high level)

- `app/` – helpers and batch runners for data operations.
- `calc/` – core calculations: materialize flows, item/unit costs, overhead rates, budgeting, transfer logic, MFC reports.
- `config/` – configuration files (env, constants).
- `db/` – DDL definitions, schema helpers, ensure/queries around SQLite.
- `loaders/` – parsers for Excel/CSV exports into staging/core tables (BOM, personnel, OPEX, routings, etc.).
- `sql/` – parameterized SQL used by calculators/materialization; scenario views live under `sql/materialize` and `sql/budget`.
- `ui/` – Streamlit application (`ui/app_streamlit.py`) and view components (`ui/views_*`).
- `tools/` – utility scripts; `tools/mcp_server.py` houses the MCP server.
- `tests/` – pytest suite for loaders/calculations.
- Data: primary DB at `01_DB-Data/costcalc.db`; ancillary data in `20_data/` and exports in `01_DB-Data/`.

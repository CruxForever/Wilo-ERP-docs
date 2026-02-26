# AI Coding Agent Instructions for Wilo-ERP-docs

This repository contains the **controlling documentation** for the Wilo ERP project. There is no application code; everything is Markdown text assembled by **MkDocs** into a static site. An AI agent should treat the workspace as a documentation/wiki project.

## 1. Big‑Picture Architecture

- The root of the site is `mkdocs.yml` which defines navigation and theme (Material) and sets `docs/` as the source.
- All human‑readable content lives under `docs/` organised into subfolders:
  - `00_overview` – high‑level explanations of the system, company, controlling and production context.
  - `10_data` – master‑data and data‑flow descriptions (cost centres, element structure, etc.).
  - `20_process` – accounting principles and cost‑calculation workflows (BOM, direct and overhead costs).
  - `30_system_wilo_erp` – system architecture information, mostly empty or links to other repos.
  - `40_runbooks` – step‑by‑step operational procedures, e.g., budget run, reporting, inventory exports.
  - `zz_old` – archived material that is no longer navigable by default (`mkdocs.yml` uses `not_in_nav` to hide it).
- Generated site output is under the `site/` directory but is not meant for editing; it is the build artefact.
- Diagrams are embedded using Mermaid syntax or Graphviz; helper scripts in `js/init_mermaid.js` and `js/init_graphviz.js` are included for live preview.
- The repository is purely documentation; the SQL logic and ETL code live elsewhere. Key concepts (BOM, routings, cost rates, etc.) are fleshed out in the Markdown.

## 2. Developer Workflows

1. **Preview locally**:
   ```powershell
   pip install mkdocs-material
   mkdocs serve
   // open http://127.0.0.1:8000 in browser
   ```
   This rebuilds on file changes and supports Mermaid/Graphviz diagrams.

2. **Build output**:
   ```powershell
   mkdocs build        # puts files under site/
   mkdocs gh-deploy --force   # used by GitHub Actions
   ```

3. **Publishing** is automated via `.github/workflows/gh-pages.yml`; pushing to `main` under `docs/**` or `mkdocs.yml` triggers the build and deploy to GitHub Pages.

4. **Editing conventions**
   - New pages must be added to `nav` in `mkdocs.yml` to appear in the left sidebar.
   - Use `mermaid` fenced code blocks for diagrams; a top‑level `flowchart` or `graph` often mirrors architecture diagrams in the docs.
   - Images go under `img/` or nested subfolders; refer to them with relative paths in Markdown.
   - The site uses Russian (`language: ru`); keep terminology consistent (e.g. `себестоимость`, `маршруты`, `оверхед`).
   - Removed or outdated material should be moved to `docs/zz_old` and can be excluded from navigation via `not_in_nav`.

## 3. Project‑Specific Patterns

- **SQL snippets**: Many documents reference SQL files under `sql/` (not stored here) – you should not create them; just document their purpose.
- **Runbooks**: Step sequences are numbered (01_, 02_, etc.) to preserve order; maintain that when adding new procedures.
- **Scenario tables**: The architecture summary uses terms like `v_bom_costs_scenario`, `cost_rates`, `ovh_tariffs`; when explaining a concept refer to these exact names.
- **Naming**: Markdown filenames are upper‑case when they correspond to major subjects (e.g. `DB_SCHEMA.md`, `ARCHITECTURE_SUMMARY.md`); sub‑pages are lowercase or numbered.

## 4. Integration & External Dependencies

- The documentation is consumed by controlling analysts; there are no build dependencies beyond Python and MkDocs.
- External diagrams rely on CDN links for Mermaid and Viz.js – no local assets are required.
- The `assets/` folder contains additional JS and CSS that are bundled by MkDocs, but typically you won't modify them.

## 5. What AI Agents Should Do

- **Add or update documentation** by editing Markdown in `docs/` and adjusting `mkdocs.yml` navigation.
- **Answer codebase questions** by referring to architecture docs and runbooks rather than searching for source code.
- **Follow repository conventions**: maintain Russian language, use existing templates for tables and diagrams, and group related topics in the proper subfolder.
- **Avoid assumptions** about application logic; if unsure, point the user to `ARCHITECTURE_SUMMARY.md` or the relevant runbook for context.

> _Example tasks_: "Explain how BOM materialization works", "Add a new runbook for month‑end reporting", "Fix broken Mermaid diagram in `cost_structure` page".

Please review these instructions and let me know if any section needs clarification or expansion.
# ARCHITECTURE

## Overview
Монолит на Python/SQLite со слоем UI (Streamlit), слоями загрузки (loaders) и слоем БД (db). 
Основной поток: **внешние таблицы → загрузчики → SQLite → материализация/правила → отчёты/бюджет**.

```
Excel / CSV ──► loaders ──► SQLite (db) ──► calc/materialize ──► reports (Excel) / UI
                          ▲
                          └── UI (Streamlit) для загрузки/правил/контроля
```

## Components
- **ui/**: `app_streamlit.py`, `ui_nsi_references.py` (вкладки НСИ).
- **loaders/**: `load_cost_structures.py` (MFCPRIM), `ccg_wru_loader.py` (CCG), `rules_loader.py` (правила).
- **db/**: `connection.py` (`normalize_db_path`), ensure_* схемы, миграции.
- **calc/**: материализация, калькуляции себестоимости/бюджета (план).

## Data flow (НСИ)
1) MFCPRIM.xlsx → `parse_mfc` → `elem_nodes/elem_edges`  
2) CCG WRU.xlsx → `parse_ccg_wru` → `cc_nodes/cc_edges`  
3) Правила (Excel) → `read_rules_excel` → `elem_map_rules`

## Data flow (Бюджет, high‑level)
Budget.xlsx → staging (импорт) → `elem_map_rules` → нормализованный бюджет (привязка к МВЗ/элементам) → отчёты.

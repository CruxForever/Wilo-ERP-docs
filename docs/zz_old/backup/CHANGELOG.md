# Wilo‑ERP — CHANGELOG

_Last updated: 2025-09-12 07:03_

## 2025‑09‑12
- НСИ: скользящий парсер **MFCPRIM** (`parse_mfc`, leaf_level=5) и UPSERT в `elem_nodes/elem_edges`.
- НСИ: парсер **CCG WRU** (`parse_ccg_wru`), позиционные колонки (группы 1..6, лист 7, имя 9, компания 11, ответст. 12).
- UI: вкладки «Справочники», «Просмотр деревьев», «Проверка данных», «Правила» в `ui_nsi_references.py`.
- Правила: таблица `elem_map_rules`, загрузка `detail_rules/fallback_rules`, редактор правил в UI.
- Автогенерация правил (token‑Jaccard), fallback к `Plan*` в группе.
- Устойчивость: нормализация Excel для правил, починка регулярных выражений уровней, нормализация путей к БД.

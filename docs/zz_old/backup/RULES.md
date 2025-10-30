# RULES

## Таблица правил: elem_map_rules
- Приоритет: меньшие значения срабатывают раньше (рекомендуемые диапазоны: 100 — детальные, 500 — дефолт).
- Фильтры: `cost_type` и/или `account_descr_pattern` (SQL LIKE). Достаточно одного.
- Результат: `elem_id` (лист или группа, в зависимости от логики отчёта).

## Импорт из Excel
Ожидаемые листы: `detail_rules`, `fallback_rules`. 
Поддерживаемые заголовки: `priority`, `cost_type`, `account_descr_pattern`, `mapped_elem_id`/`elem_id`, `note`.

## Подбор правил (token‑Jaccard)
1) К каждому `(Cost type, Account descr)` присваиваем «правильную группу».  
2) Ищем лучший **лист внутри группы** по Jaccard(token(Account descr), token(elem_name)).  
3) Если сходства нет — выбираем первый лист `Plan*` в этой группе.  
4) Если и `Plan*` нет — помечаем как `no_match_no_plan` для ручного разбора.

## Тест‑кейс
В UI добавить форму проверки: ввести `Cost type`, `Account descr` → показать правило, `elem_id`, путь в дереве.

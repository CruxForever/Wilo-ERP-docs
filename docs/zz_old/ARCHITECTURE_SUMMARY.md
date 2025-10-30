# ARCHITECTURE_SUMMARY

> Generated: 2025-10-20 16:25 (local)
> Commit: 5fb6b11

## Что добавилось
- Модули (код):
  - calc.materialize
  - calc.materialize_sql
  - calc.mo_materials
- Объекты БД:
  - opex_staging
  - price_scenarios
  - rm_price_load
  - rm_prices
  - v_price_by_scenario

## Как течёт поток данных
От загрузки сырьевых цен → staging → нормализация → материализация → потребители (BOM/calc/UI).
Ключевые элементы: таблицы загрузок (rm_price_loads), нормализованные цены (rm_prices), представления сценариев (v_price_by_scenario).

## Как запускать авто-доки
- Команда: `python tools/gen_docs.py`

## Где править
- `db/schema.py` — ensure_rm_price_load_table / ensure_rm_prices / ensure_price_views
- `loaders` — скрипты загрузки сырьевых цен и материалов
- `calc` — потребители и расчёты
- `app` — интеграция и UI

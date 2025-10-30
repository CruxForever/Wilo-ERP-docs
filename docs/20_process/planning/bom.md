# Материальная себестоимость: формирование по данным BOM

Материальная себестоимость продукции Wilo складывается из трёх составляющих:
1. **Материалы для производства** - сырьё и комплектующие по ресурсным спецификациям.
2. **Брак материалов (scrap)** - плановые потери, рассчитываемые как доля от материальной базы.
3. **Услуги переработчика** - внешняя обработка полуфабрикатов (подрядные операции).

Ниже описан поток данных от входных выгрузок до витрин `v_*`, которые используются в пользовательских сценариях (планирование, калькуляции, отчётность).

## Входные данные

### 1. Универсальный отчёт «Список ресурсных спецификаций» (1С:ERP)
Файл содержит шапки спецификаций. Минимальный состав полей:

| Поле | Назначение | Где используется |
|---|---|---|
| `spec_code` | Код спецификации | первичный ключ `bom_specs.stage` / `bom_specs` |
| `product_id` | Код изделия (готовый продукт) | связь с `items` и плановыми объёмами |
| `batch_size` | Размер партии | нормализация до «на единицу» |
| `batch_uom` | ЕИ партии | аналитика, сохранение в `bom_specs` |
| `valid_from`, `valid_to` | Период действия | ведение версий спецификации |
| `is_default` | Признак основной спецификации | отбор для материализации |

> Ссылка на выгрузку будет добавлена в каталоге `planning/resources`.

### 2. Выгрузка ресурсных спецификаций (структура BOM)
Файл по каждой строке спецификации. Требуются поля:

| Поле | Назначение | Таблица |
|---|---|---|
| `spec_code` | Внешний ключ на шапку | `bom_components_stage` -> `bom_spec_components` |
| `line_no` *(если нет - автогенерация)* | Порядковый номер строки | ключ компонента |
| `component_id` | Материал / полуфабрикат | номенклатура 1С |
| `qty_per_spec` | Количество на партию | дальнейшая нормализация |
| `uom` | Единица измерения строки | хранится для отчётности |
| `operation` | Операция/стадия (вкл. SUBCON) | идентификация услуг переработчика |
| `stage` | Доп. маркер этапа | аналитика, фильтры |

Форма выгрузки должна совпадать с ожиданиями `loaders.bom_loader` - см. карту колонок в коде (`need = ["spec_code", "product_id", "batch_size"]` и `need = ["spec_code", "component_id", "qty_per_spec"]`).  
> Ссылка на шаблон ресурса будет опубликована отдельно.

### 3. Цены услуг переработчика и дополнительные материалы
Для расчёта подрядных услуг используются базы `mo_catalog`, `mo_prices_history`. Требуемые поля:

| Поле | Назначение |
|---|---|
| `after_item_id` | Код полуфабриката после операции |
| `price`, `currency` | Тариф переработчика |
| `vendor` | Контрагент (для контроля) |
| `effective_from`, `effective_to` | Интервал действия цены |
| `source`, `loaded_at` | Трассировка загрузки |

> Загрузчик: `loaders.loader_mo_prices`, UI-форма в `ui.views_upload`.

## Загрузка и нормализация

| Шаг | Функция / скрипт | Результат |
|---|---|---|
| Загрузка шапок | `loaders.bom_loader.load_bom_specs_xlsx` | вставка в `bom_specs_stage` с `load_id` |
| Перенос шапок | `loaders.bom_loader.upsert_bom_specs_from_stage` | заполнение `bom_specs` (версионность, `is_default`) |
| Загрузка строк | `loaders.bom_loader.load_bom_components_xlsx` | вставка в `bom_components_stage` |
| Нормализация строк | `loaders.bom_loader.normalize_bom_components_stage` | авто-нумерация `line_no`, очистка мусора |
| Перенос строк | `loaders.bom_loader.upsert_bom_components_from_stage` | заполнение `bom_spec_components` |
| Формирование дерева | `calc.materialize_sql.materialize_bom_flat` | рекурсивное разворачивание в `bom_flat` |
| Расчёт цен переработчика | `calc.materialize.materialize_mo_cost_unit` | объединение `bom_flat` и `mo_last_price_current` -> `mo_cost_unit` |
| Обновление истории МО | `db.ensure_mo.ensure_mo_schema` | поддержка `mo_last_price_current`, `mo_prices_history` |

Все операции логируют `load_id` / `computed_at` и могут выполняться через UI (`ui.views_upload`) или CLI (`python -m loaders.bom_loader ...`).  

## Материализация и расчёты

### 1. Материалы для производства
1. Рекурсивное CTE (`sql/materialize/bom_flat_build_*.sql`) разворачивает полуфабрикаты до сырьевых материалов и сохраняет результат в `bom_flat` (`parent_item_id`, `component_item_id`, `qty_per_unit`, `level`, `path`).  
2. Цены подтягиваются из `rm_prices` через `v_price_by_scenario` либо `mo_last_price_current` (для собственного прайс-листа).  
3. Функции:
   - `calc.materialize.materialize_mo_cost_unit` - считает фактическую потребность и сумму (`qty_per_unit × price`) для таблицы `mo_cost_unit` и при необходимости `mo_cost_unit_monthly`.
   - `calc.mo_materials.get_mo_materials_df` - формирует отчёт для планирования (использует `mo_cost_unit`, `prod_budget`).

### 2. Брак материалов
1. База для расчёта берётся из `ovh_flat` (материальная составляющая) после запуска `calc.materialize.materialize_ovh_flat`.  
2. Плановые доли брака хранятся в `ovh_tariffs` (`cost_type = 'scrap'`).  
3. Функция `calc.materialize.materialize_scrap_cost_unit` умножает материальную базу на долю брака и пишет результат в `scrap_cost_unit` (`product_id`, `scrap_cost`).  
4. Эти данные попадают в `calc.budget.build_budget_frames` и `calc.cost_tree.fetch_materials_cost`, где скрап идёт отдельной строкой (`scrap_unit`).  

### 3. Услуги переработчика
1. При наличии в `bom_spec_components.operation` значений, относящихся к наружной обработке (например, `SUBCON`), соответствующие компоненты ищутся в `mo_catalog` / `mo_prices_history`.  
2. Функция `calc.materialize.materialize_mo_cost_unit` формирует таблицу `mo_cost_unit`: для каждого полуфабриката и готового изделия фиксируется количество, цена и итоговая сумма услуги.  
3. Вьюха `mo_last_price_current` обеспечивает выбор последней актуальной цены при отсутствии даты.  
4. Сервисные суммы дальше используются в бюджетных калькуляциях (`calc.budget.unit_cost_breakdown_v2`) и передаются в отчёт `MFC Report`.  

## Итоговые представления и точки потребления

| Витрина / таблица | Заполняется | Что содержит | Где используется |
|---|---|---|---|
| `v_bom_costs_scenario` | `db.schema.ensure_scenario_cost_views` | "Количество x цена" материалов по сценарию | калькуляторы (`calc.cost_tree.fetch_materials_cost_by_scenario`), UI cost tree |
| `mo_cost_unit`, `mo_cost_unit_monthly` | `calc.materialize.materialize_mo_cost_unit` | Потребность и стоимость подрядных услуг и материалов на единицу | `calc.mo_materials`, бюджетные выгрузки, Streamlit UI |
| `scrap_cost_unit` | `calc.materialize.materialize_scrap_cost_unit` | Плановый материал на брак | `calc.budget.build_budget_frames`, `v_cogs_unit` (компонент `MATCOST`) |
| `mo_last_price_current` | `db.ensure_mo.ensure_mo_schema` | Последняя активная цена переработчика | `materialize_mo_cost_unit`, UI диагностика |
| `v_cogs_unit` | `db.schema.ensure_scenario_cost_views` | Финальная себестоимость на единицу (материалы + брак + услуги + allocations) | dashboards, variance-анализ, выгрузки CO/PA |

Все три составляющие материальной себестоимости агрегируются в `v_cogs_unit` и доступны downstream‑процессам:
- **Планирование** - `docs/20_process/planning/index.md`, отчёты бюджета (`calc.budget.export_budget_to_excel`).  
- **Отчётность** - `period_close_reporting` (мосты факторов и MFC Report).  
- **Контроль изменений цен** - `ui.views_cost_tree`, `tools/debug_budget.py`.  

Таким образом, непрерывная цепочка «выгрузка -> staging -> нормализация -> материализация -> v_*» обеспечивает прозрачность формирования материальной себестоимости и даёт возможность локализовать отклонения по каждому компоненту. 

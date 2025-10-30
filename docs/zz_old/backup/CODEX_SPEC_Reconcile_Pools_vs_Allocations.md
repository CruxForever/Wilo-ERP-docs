VS Code — gpt-5-codex Task Spec: “Pools→Allocations→v_cogs_unit (no *unit deps)”
Цель

Перевести расчёт LABOR_DIRECT (и аналогичных компонент) на новую ось:

Источник пула — OPEX бюджет/факт по (period, cc, elem_group).

Распределение — из пула в cost_allocations по весам из driver_values (HOURS и др.).

Отчётность — v_cogs_unit строится только из cost_allocations (а не из unit).

Проверка адекватности — отдельный «rate-parity» отчёт (не источник!), который считает сумму «routing × rate × qty» и сверяет её с пулом OPEX (должно быть ≈0).

Границы задач

Да: переработка движка аллокаций и вью; добавление parity-отчёта; отказ от чтения unit в расчёте.

Нет: перерасчёт старых unit; UI-ретушь — минимальная (только заменить источники данных).

Изменения по слоям
1) Пулы затрат (источник истины)

Ввести представление v_component_pools(period, scenario, cc_id, component_code, amount):

Для LABOR_DIRECT: component_code='LABOR_DIRECT', сумма из OPEX-бюджета/факта по elem_group IN (MFC_PRIM_1, …) и производственным CC.

Оставить расширяемость для OPR/DEPR/OVH_* через их elem_group/ovh_nodes.

Удалить любые обращения к unit как источнику пула.

2) Аллокации (единственный расчётный выход)

calc/alloc_engine.apply_allocations(period, scenario, rule_set_id, components=None):

Для каждой пары (cc_leaf, component_code) берём pool = v_component_pools.

Строим получателей (product_id, cc_leaf) и weights из driver_values по выбранному driver_code из правил.

Пишем в cost_allocations(period, scenario, component_code, product_id, cc_id, rule_id, amount, weight, run_id).

Правила (v_allocation_rule_effective) уже учитывают elem-scope — сохранить.

3) v_cogs_unit (только из allocations)

Переписать v_cogs_unit так, чтобы:

суммы по компонентам приходили только из cost_allocations,

деление на qty брать из плана/факта выпуска, без unit,

MATCOST (если уже подмешивали из driver_values) — оставить как есть или тоже через cost_allocations, когда появится соответствующее правило.

4) Параллельный “Rate-parity” отчёт (валидация, не расчёт)

Создать представление v_rate_parity(period, scenario, cc_id, component_code, pool_from_opex, sum_routing_rate_qty, delta):

pool_from_opex: из v_component_pools.

sum_routing_rate_qty: Σ по продуктам и операциям выбранного CC: routing_flat.std_hours_per_unit × rate_per_hour(cc) × qty(product, period, scenario).

Источник rate_per_hour(cc) — только для проверки: из cost_rates (пригодно) или legacy unit (временно, но помечено как deprecated).

delta = pool_from_opex − sum_routing_rate_qty (ожидаем ≈0 с учётом округлений).

CLI tools/alloc_parity_check.py --period YYYY-MM --scenario PLAN --component LABOR_DIRECT --cc 25410.

Изменения кода / места правок
calc/alloc_engine.py

Удалить ветки, где пул вычислялся через unit; всегда брать из v_component_pools.

Сохранить «policy=weights» как основной режим (rate можно оставить только для parity-сравнения, но не для записи в allocations).

Добавить лог предупреждений: если сумма весов = 0 → применить политику fallback из правила или упасть с понятной ошибкой.

db/schema.py (миграция v12+)

Новая вьюха v_component_pools (LABOR_DIRECT минимум).

Переписать v_cogs_unit, чтобы не подтягивал unit.

Новая вьюха v_rate_parity.

(Опционально) фича-флаг settings.no_unit_reads = 1 (таблица app_settings или pragma-view) — использовать в UI и движке для «жёсткого» запрета.

ui/*

Все экраны, где было чтение unit для LABOR_DIRECT, переключить на v_cogs_unit + v_rate_parity (только для сверок).

В Allocation Wizard (страница итогов) — разместить блок “Parity LABOR_DIRECT”: pool vs rate-сумма и дельта.

tools/*

tools/alloc_apply.py — поведение без изменений, но расчёт теперь не зависит от unit.

Новый tools/alloc_parity_check.py (см. выше).

Контроль качества и проверки
Acceptance Criteria

apply_allocations заполняет cost_allocations исходя из v_component_pools, не читая unit.

v_cogs_unit = агрегаты из cost_allocations / qty; совпадает с текущим отчётом по LABOR_DIRECT на тестовом месяце.

v_rate_parity.delta ≈ 0 на LABOR_DIRECT (25410, тестовый месяц).

v_recon_checks по LABOR_DIRECT показывает Σpool == Σalloc (дельта=0).

Поиск в коде подтверждает отсутствие прямых чтений unit в расчёте (только в parity-view допускается временно).

Тесты

Unit:

выбор правил (specificity/priority),

корректный расчёт весов по driver_values,

защита от нулевой суммы драйвера (fallback/ошибка).

Integration (golden):

тестовый месяц YYYY-MM, CC=25410, компонент LABOR_DIRECT:

Σalloc == pool (из OPEX),

v_cogs_unit равен legacy-отчёту,

v_rate_parity.delta в допуске (±0.1% или 1 руб на CC).

Smoke:

CLI alloc_apply отрабатывает без ошибок, пишет run_id,

CLI alloc_parity_check печатает дельту и топ-расхождения.

Подсказки codex (как реализовать быстро)

v_component_pools для LABOR_DIRECT: SELECT period, scenario, cc_id, 'LABOR_DIRECT' AS component_code, SUM(amount) AS amount FROM fact_opex JOIN elem_nodes … WHERE elem_group IN ('MFC_PRIM_1',…) GROUP BY ….

v_rate_parity.sum_routing_rate_qty: соединить routing_flat (std_hours_per_unit × product_id × cc_id) с prod_budget (qty) и cost_rates (rate_per_hour по cc_id).

Для скорости: индексы на fact_opex(period, cc_id, elem_id), driver_values(period, driver_code), cost_allocations(period, component_code).

Не плодить нулевые driver_values — веса считаем по value > 0 (или is_explicit_zero=1).

Декомиссия unit (пост-мероприятие)

Пометить unit источники как deprecated.

Оставить только совместимые VIEW для исторической совместимости (если требуется UI/legacy), но не использовать их ни в одном расчётном пути.
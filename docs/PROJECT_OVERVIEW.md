# PROJECT_OVERVIEW

> Generated: 2025-11-13 16:09 (local)
> Commit: b1d6540

See also: [DB schema](./DB_SCHEMA.md)

## Packages

- [calc](#package-calc)
- [db](#package-db)
- [loaders](#package-loaders)
- [app](#package-app)
- [ui](#package-ui)
- [config](#package-config)

## Package calc
### Module calc.alloc_engine
- func: `apply_allocations(conn: 'sqlite3.Connection', period: 'str', scenario: 'str', rule_set_id: 'str', run_id: 'Optional[str]' = None, components: 'Optional[List[str]]' = None) -> 'int'` — Apply weight-based allocations for given period and rule set.
- func: `ensure_phase_b_default_rules(conn: 'sqlite3.Connection', rule_set_id: 'str' = 'DEFAULT_2026') -> 'None'` — 
- func: `ensure_schema(conn: sqlite3.Connection) -> None` — Ensure database schema is up to date.
### Module calc.budget
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `build_budget_frames(conn: 'sqlite3.Connection', months_ym: 'List[str]', vol_scn: 'str', *, year: 'int | None' = None, price_scn: 'str | None' = None, ktl_split: 'bool' = False) -> 'Dict[str, pd.DataFrame]'` — Build budget sheets dict {sheet_name: DataFrame}: Total and monthly sheets.
- func: `build_budget_preview(conn: 'sqlite3.Connection', months_ym: 'List[str]', vol_scn: 'str', *, year: 'int | None' = None, price_scn: 'str | None' = None, ktl_split: 'bool' = False) -> 'Tuple[Dict[str, pd.DataFrame], bytes]'` — Возвращает словарь DataFrame и Excel-байты для предпросмотра.
- func: `choose_best_rate_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', year: 'int') -> 'Optional[str]'` — Pick scenario from v_routing_costs_scenario (or cost_rates) with max coverage for given year.
- func: `export_budget_to_excel(conn: 'sqlite3.Connection', months_ym: 'List[str]', out_xlsx_path: 'str', vol_scn: 'str', *, year: 'int | None' = None, price_scn: 'str | None' = None, ktl_split: 'bool' = False, frames: 'Dict[str, pd.DataFrame] | None' = None) -> 'str'` — 
- func: `price_by_article_sql() -> 'str'` — SQL for latest price by scenario (v_price_by_scenario).
- func: `unit_cost_breakdown_v2(conn: 'sqlite3.Connection', product_id: 'str', *, year: 'int | None' = None, price_scn: 'str | None' = None, rate_scn: 'str | None' = None) -> 'Dict[str, float]'` — Unit cost via v_*_costs_scenario (materials, directs, ovh).
### Module calc.cost_tree
- class: `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- class: `AuditResult(...)` — dict() -> new empty dictionary
- func: `TypedDict(typename, fields=None, /, *, total=True, **kwargs)` — A simple typed namespace. At runtime it is equivalent to a plain dict.
- func: `audit_schema_and_data(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', *, load_id: 'str', year: 'int', scenario: 'str | None') -> 'AuditResult'` — 
- func: `choose_best_price_load_id(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', *, currency: 'str' = 'RUB') -> 'Optional[str]'` — Pick load_id from rm_prices that provides the best coverage for product BOM components.
- func: `choose_best_rate_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', year: 'int') -> 'Optional[str]'` — Pick scenario from v_routing_costs_scenario (or cost_rates) with max coverage for given year.
- func: `fetch_direct_cost(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', year: 'int', scenario: 'Optional[str]' = None) -> 'Tuple[pd.DataFrame, dict]'` — Return per-operation direct cost rows with rates from cost_rates.
- func: `fetch_direct_cost_by_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', year: 'int', scenario: 'Optional[str]' = None) -> 'Tuple[pd.DataFrame, dict]'` — Прямые (операции) через v_routing_costs_scenario.
- func: `fetch_indirect_costs_by_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]') -> 'pd.DataFrame'` — Fetch indirect (non-production) costs from v_ovh_costs_scenario for selected products.
- func: `fetch_materials_cost(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', load_id: 'Optional[str]') -> 'Tuple[pd.DataFrame, dict]'` — Return materials subtree rows with price from rm_prices(load_id) and diagnostics.
- func: `fetch_materials_cost_by_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', price_scenario: 'str', *, currency: 'str' = 'RUB') -> 'Tuple[pd.DataFrame, dict]'` — Материалы из v_bom_costs_scenario для выбранного сценария цен.
- func: `list_price_load_ids(conn: 'sqlite3.Connection') -> 'list[str]'` — Вернёт список load_id из rm_prices (упорядоченный по последней дате загрузки, если доступно).
- func: `list_price_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — Список доступных сценариев цен (price_scenarios.scenario_code).
- func: `list_produced_items(conn: 'sqlite3.Connection') -> 'pd.DataFrame'` — 
- func: `list_rate_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `list_rate_years(conn: 'sqlite3.Connection') -> 'list[int]'` — 
- func: `log_report_event(*, log_path: 'str', product_ids: 'Iterable[str]', load_id: 'str', year: 'int', scenario: 'Optional[str]', materials_diag: 'Dict[str, Any] | None' = None, direct_diag: 'Dict[str, Any] | None' = None, error: 'Optional[str]' = None) -> 'None'` — 
### Module calc.dl_transfers
- func: `apply_transfer(conn, bud_year: int, rule_id: int, donorshare: float = 1.0, elem_root: str = 'MFC_PRIM_1', recipients_cc: list[str] | None = None, comment: str = '', created_by: str = None) -> str` — Создает батч и записывает перенос (только дельты).
- func: `apply_transfer_by_rules(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21', allow_fallback_global: bool = True, comment: str = '', created_by: str = None) -> str` — 
- func: `create_transfer_batch(conn, bud_year: int, rule_id: int, comment: str = '', created_by: str = None) -> str` — 
- func: `find_zero_cc(conn, bud_year: int) -> pandas.core.frame.DataFrame` — ЦЗ с часами > 0 и нулевым среднегодовым headcount.
- func: `get_cc_hours(conn, bud_year: int) -> pandas.core.frame.DataFrame` — 
- func: `get_opex_by_cc_elem(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1') -> pandas.core.frame.DataFrame` — 
- func: `get_opex_by_cc_elem_detailed(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21') -> pandas.core.frame.DataFrame` — Суммы OPEX по ЦЗ и КАЖДОМУ elem_id внутри elem_root,
- func: `get_personnel_year_base(conn, bud_year: int) -> pandas.core.frame.DataFrame` — 
- func: `plan_transfer(conn, bud_year: int, rule_id: int, donorshare: float = 1.0, elem_root: str = 'MFC_PRIM_1', recipients_cc: list[str] | None = None) -> tuple[pandas.core.frame.DataFrame, pandas.core.frame.DataFrame]` — Возвращает два DF: items_personnel, items_opex.
- func: `plan_transfer_by_rules(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21', allow_fallback_global: bool = True) -> tuple[pandas.core.frame.DataFrame, pandas.core.frame.DataFrame]` — Строит план переносов:
- func: `revert_transfer(conn, batch_id: str)` — 
### Module calc.driver_etl
- class: `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- func: `delete_zero_driver_values(conn: 'sqlite3.Connection', set_id: 'str | None' = None, driver_code: 'str | None' = None, period_prefix: 'str | None' = None) -> 'int'` — Delete rows from driver_values where ABS(value) is effectively zero.
- func: `ensure_driver_catalog_min(conn: 'sqlite3.Connection') -> 'None'` — Insert driver cards for HOURS, MATCOST, PAYROLL_OTHER if missing.
- func: `ensure_schema(conn: sqlite3.Connection) -> None` — Ensure database schema is up to date.
- func: `hours_coverage_check(conn: 'sqlite3.Connection', set_id: 'str', month_code: 'str') -> 'List[Dict[str, Any]]'` — Return records where HOURS values landed with NULL cc_id (unmapped department -> CC).
- func: `populate_hours_plan_driver_values(conn: 'sqlite3.Connection', set_id: 'str', month_code: 'str') -> 'int'` — Populate driver_values for HOURS (PLAN) for a given month.
- func: `populate_matcost_plan_driver_values(conn: 'sqlite3.Connection', set_id: 'str', month_code: 'str') -> 'int'` — Populate driver_values for MATCOST (PLAN) for a given month.
- func: `populate_payroll_other_plan_driver_values(conn: 'sqlite3.Connection', set_id: 'str', month_code: 'str') -> 'int'` — Populate driver_values for PAYROLL_OTHER (PLAN) for a given month.
### Module calc.efficiency
- func: `apply_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', vol_scenario: 'str | None' = None, comment: 'str' = 'efficiency normalize', created_by: 'str | None' = None) -> 'str'` — 
- func: `compute_efficiency_table(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', vol_scenario: 'str | None' = None) -> 'pd.DataFrame'` — Таблица эффективности по производственным ЦЗ:
- func: `get_routing_hours(conn: 'sqlite3.Connection') -> 'pd.DataFrame'` — Return DataFrame with product_id, department_code, hours_per_unit.
- func: `plan_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', vol_scenario: 'str | None' = None) -> 'tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]'` — Строит план нормализации:
### Module calc.logger
- class: `RunLogger(conn, scope: str, params: dict)` — 
### Module calc.materialize
- class: `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- func: `cleanup_routing_tree(conn, product_id: 'str | None' = None)` — 
- func: `debug_snapshot(conn, pid: 'str | None', tag: 'str')` — 
- func: `materialize_depr_costs(conn, product_id: 'str | None' = None)` — 
- func: `materialize_flat_bom_fast(conn, product_id: 'str | None' = None, max_depth: 'int' = 20)` — Materialise leaf-level flat BOM fast (iterative, cycle-safe, <=5 min target).
- func: `materialize_flat_bom_recursive(conn, product_id: 'str | None' = None)` — 
- func: `materialize_labor_costs(conn, product_id: 'str | None' = None, on_date: 'str | None' = None)` — 
- func: `materialize_labor_hours(conn, product_id: 'str | None' = None)` — 
- func: `materialize_mo_cost_unit(conn, *, on_date: 'str | None' = None)` — Р—Р°РїРѕР»РЅСЏРµС‚ mo_cost_unit РёР· bom_flat Г— mo_last_price (РЅР° РґР°С‚Сѓ РёР»Рё РїРѕ С‚РµРєСѓС‰РµР№).
- func: `materialize_mo_cost_unit_monthly(conn, month_code: 'str')` — Р”Р»СЏ Р±СЋРґР¶РµС‚Р°: С„РёРєСЃРёСЂСѓРµС‚ С†РµРЅСѓ РЅР° РјРµСЃСЏС† (РЅР° РїРµСЂРІС‹Р№ РґРµРЅСЊ РјРµСЃСЏС†Р°).
- func: `materialize_opr_costs(conn, product_id: 'str | None' = None)` — 
- func: `materialize_ovh_costs(conn, product_ids=None, year=2026, scenario=None)` — 
- func: `materialize_ovh_flat(conn, price_scn: 'str', asof: 'str | None' = None, product_ids: 'list[str] | None' = None)` — РЎС‚СЂРѕРёС‚ ovh_flat РёР· ovh_tree, СЂР°СЃРїСЂРµРґРµР»СЏСЏ РњРђРўР•Р РРђР›Р¬РќРЈР® СЃС‚РѕРёРјРѕСЃС‚СЊ РїРѕ alloc_group
- func: `materialize_ovh_tree(conn, product_ids=None, max_depth: 'int' = 20)` — РЎС‚СЂРѕРёС‚ ovh_tree СЃ РїСЂРѕС‚Р°СЃРєРёРІР°РЅРёРµРј alloc_group (Р±Р»РёР¶Р°Р№С€Р°СЏ СЃРІРµСЂС…Сѓ Р·Р°РґР°РЅРЅР°СЏ РіСЂСѓРїРїР°).
- func: `materialize_routing_flat(conn, product_id: 'str | None' = None)` — Р—Р°РїРѕР»РЅСЏРµС‚ routing_flat РЅР° РѕСЃРЅРѕРІР°РЅРёРё routing_tree Рё routing_operations.
- func: `materialize_routing_tree(conn, product_id: 'str | None' = None, max_depth: 'int' = 20)` — 
- func: `materialize_scrap_cost_unit(conn, product_ids=None, year=2026, scenario=None)` — SCRAP = Σ по группам ( mat_cost_group * scrap_share[group] )
- func: `run_routing_and_labor_pipeline(conn, product_ids=None, *, on_date=None, max_depth=20, clean_before=True, ovh_year=2026)` — Р•РґРёРЅС‹Р№ РЅР°РґС‘Р¶РЅС‹Р№ РїР°Р№РїР»Р°Р№РЅ:
### Module calc.materialize_sql
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `materialize_bom_flat(conn: 'sqlite3.Connection', product_id: 'str | None' = None) -> 'int'` — Materialize bom_flat using SQL scripts under sql/materialize.
### Module calc.mo_materials
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `get_mo_materials_df(conn: 'sqlite3.Connection', months_ym: 'Iterable[str]', vol_scn: 'str', price_scn: 'Optional[str]' = None, use_monthly_if_present: 'bool' = True) -> 'pd.DataFrame'` — Вернёт DataFrame со сведениями о деталях после МО и их стоимости.
- func: `streamlit_app(db_path: 'Optional[str | None]' = None)` — 
### Module calc.opr_rates_calc
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- class: `Sequence()` — All the operations on a read-only sequence.
- class: `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- func: `amounts_by_cc_for_elemgroup(conn, bud_year: int, cc_list: list[str], elem_list: list[str]) -> pandas.core.frame.DataFrame` — 
- func: `amounts_by_cc_for_elemgroup_sql(conn, bud_year: int, cc_list: collections.abc.Sequence[str], elem_list: collections.abc.Sequence[str]) -> pandas.core.frame.DataFrame` — 
- func: `compare_with_previous(conn, df_current: pandas.core.frame.DataFrame, component_code: str, base_scenario: str | None = None) -> pandas.core.frame.DataFrame` — Если base_scenario задан и отличается от текущего → сравниваем со снапшотом указанного сценария.
- func: `component_code_for_kind(kind: str, components: pandas.core.frame.DataFrame | None = None) -> str` — 
- func: `compute_rates(conn, price_scn: str, months_ym: list[str], cc_root: str, kind: str = 'labor', vol_scn: str = 'BG26_VOL') -> pandas.core.frame.DataFrame` — Универсальный расчёт ставки = (Сумма по группе элементов) / (Плановые часы) по каждому ЦЗ.
- func: `fetch_last_snapshot(conn, scenario: str, component_code: str) -> pandas.core.frame.DataFrame` — 
- func: `hours_by_department(conn, months_ym: list[str], *, vol_scn: str) -> pandas.core.frame.DataFrame` — Плановые часы по участкам за указанные месяцы:
- func: `hours_by_department_sql(conn, months_ym: collections.abc.Sequence[str], *, vol_scn: str) -> pandas.core.frame.DataFrame` — 
- func: `list_rate_components(conn) -> pandas.core.frame.DataFrame` — Return active cost rate components with fallbacks.
- func: `save_rates_cost_rates(conn, df_rates: pandas.core.frame.DataFrame, component_code: str, scenario: str = '') -> int` — Save computed yearly rates into unified cost_rates (idempotent).
- func: `scenario_to_year(price_scn: str, default: int | None = None) -> int` — Derive numeric budget year from scenario code (e.g. BG26_VOL -> 2026).
### Module calc.ovh_flat
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `materialize_ovh_flat(conn: 'sqlite3.Connection') -> 'int'` — Materialize ovh_flat via SQL scripts under sql/materialize.
### Module calc.ovh_rates_calc
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- class: `TariffParams(year: 'int', vol_scenario: 'str', price_scenario: 'str', routing_scenario: 'str') -> None` — TariffParams(year: 'int', vol_scenario: 'str', price_scenario: 'str', routing_scenario: 'str')
- class: `TariffPreview(params: 'TariffParams', summary: 'pd.DataFrame', shares: 'pd.DataFrame', totals: 'dict[str, float]', distributions: 'dict[str, pd.DataFrame]') -> None` — TariffPreview(params: 'TariffParams', summary: 'pd.DataFrame', shares: 'pd.DataFrame', totals: 'dict[str, float]', distributions: 'dict[str, pd.DataFrame]')
- func: `build_cost_distributions(summary: 'pd.DataFrame', totals: 'dict[str, float]') -> 'dict[str, pd.DataFrame]'` — 
- func: `calculate_tariff_summary(material_df: 'pd.DataFrame', admin_df: 'pd.DataFrame') -> 'pd.DataFrame'` — 
- func: `dataclass(cls=None, /, *, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False, weakref_slot=False)` — Add dunder methods based on the fields defined in the class.
- func: `expand_tariff_rows(summary: 'pd.DataFrame', *, scrap_share: 'Optional[float]' = None, distributions: 'Optional[dict[str, pd.DataFrame]]' = None) -> 'pd.DataFrame'` — 
- func: `fetch_admin_base(conn: 'sqlite3.Connection', params: 'TariffParams') -> 'pd.DataFrame'` — 
- func: `fetch_cost_pools(conn: 'sqlite3.Connection', year: 'int') -> 'dict[str, float]'` — 
- func: `fetch_material_base(conn: 'sqlite3.Connection', params: 'TariffParams') -> 'pd.DataFrame'` — 
- func: `list_price_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `list_routing_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `list_volume_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `preview_tariffs(conn: 'sqlite3.Connection', *, year: 'Optional[int]' = None, vol_scenario: 'Optional[str]' = None, price_scenario: 'Optional[str]' = None, routing_scenario: 'Optional[str]' = None, scrap_share: 'Optional[float]' = None) -> 'TariffPreview'` — 
- func: `save_tariffs(conn: 'sqlite3.Connection', preview: 'TariffPreview', *, cost_types: 'Optional[Iterable[str]]' = None) -> 'int'` — 
- func: `write_scrap_tariffs(conn: 'sqlite3.Connection', params: 'TariffParams', share: 'float', *, year: 'Optional[int]' = None, groups: 'Optional[Sequence[str]]' = None) -> 'int'` — 
### Module calc.ppv_by_cg
- func: `compute_ppv_by_cg(conn: 'sqlite3.Connection', *, vol_s: 'str', s1: 'str', s2: 'str', s3: 'str', pure_only: 'bool' = False) -> 'Dict[str, pd.DataFrame]'` — Рассчитать PPV по commodity group.
### Module calc.quality
- func: `check_bom_components_missing_prices(conn)` — Компоненты из BOM без цены в rm_prices (по последней загрузке).
- func: `check_bom_unknown_items(conn)` — BOM с компонентами, отсутствующими в items.
- func: `check_budget_has_nonproduced(conn)` — В prod_budget есть product_id, который в items помечен как is_produced=0.
- func: `check_budget_missing_routing_ops(conn)` — Produced items in active volume scenario that are missing in routing_flat,
- func: `check_items_duplicate_article(conn)` — Дубли артикулов (один article на несколько item_id).
- func: `check_items_nonproduced_has_routing_or_ovh(conn)` — Непроизводимые (is_produced=0) с заполненными routing_group/ovh_group_code (подозрительно).
- func: `check_items_produced_missing_routing_or_ovh(conn)` — Производимые (is_produced=1), у которых пусты routing_group или ovh_group_code.
- func: `check_items_required_fields(conn)` — Пустые/нулевые article, name, uom.
- func: `check_ovh_groups_missing_tariffs(conn, year: 'int | None' = None, scenario: 'str | None' = None)` — Группы из ovh_flat, которых нет в ovh_tariffs (по году; если год None — берём max(year)).
- func: `check_routing_flat_missing_rates(conn)` — Департаменты из routing_flat без ставки в labor_rates_snapshot.
- func: `render_quality_ui(conn, st)` — Экран проверок с чекбоксами. Пример использования в вашей вьюшке:
- func: `run_quality_checks(conn, selected: 'list[str] | None' = None) -> 'dict[str, pd.DataFrame]'` — selected: список кодов проверок. Если None — запустить все.
### Module calc.routing_flat
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `materialize_routing_flat(conn: 'sqlite3.Connection') -> 'int'` — Materialize routing_flat via SQL scripts under sql/materialize.
### Module calc.routing_hours
- func: `get_routing_hours(conn: 'sqlite3.Connection') -> 'pd.DataFrame'` — Return DataFrame with product_id, department_code, hours_per_unit.
### Module calc.transfers_opex
- func: `apply_cycle(conn, cycle_id: 'int', cycle_no: 'int', comment: 'str', created_by: 'str | None' = None) -> 'str'` — 
- func: `apply_transfer_opex_by_rules(conn, bud_year: 'int', elem_root: 'str', cycle_no: 'int', rules_df, comment: 'str', created_by: 'str | None', rule_id: 'int') -> 'str'` — 
- func: `ensure_rule_for_cycle(conn, cycle_id: 'int') -> 'int'` — 
- func: `load_cycle_meta(conn: 'sqlite3.Connection', cycle_id: 'int')` — 
- func: `load_cycle_rule_id(conn: 'sqlite3.Connection', cycle_id: 'int') -> 'int'` — 
- func: `load_cycle_rules_df(conn: 'sqlite3.Connection', cycle_id: 'int') -> 'pd.DataFrame'` — 
- func: `load_rule_meta(conn: 'sqlite3.Connection', rule_id: 'int')` — 
- func: `load_rule_recipients_df(conn: 'sqlite3.Connection', rule_id: 'int') -> 'pd.DataFrame'` — 
- func: `plan_transfer_opex_by_rules(conn: 'sqlite3.Connection', bud_year: 'int', elem_root: 'str', cycle_no: 'int', rules_df: 'pd.DataFrame') -> 'pd.DataFrame'` — rules_df: columns = donor_cc_id, to_cc_id, share (0..1), optional to_elem_id.

## Package db
### Module db.connection
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `contextmanager(func)` — @contextmanager decorator.
- func: `get_table_info(conn, table: str)` — 
- func: `normalize_db_path(raw: str | pathlib.Path) -> pathlib.Path` — 
### Module db.ensure_mfc_report
- func: `ensure_mfc_report_defs_table(conn)` — Таблица вариантов отчёта (версионирование Target2026/2027 и т.п.).
- func: `ensure_mfc_report_indexes(conn)` — Доп. индексы для быстрых выборок по году/сценариям через mfc_report_defs.
- func: `ensure_mfc_report_line_rules_table(conn)` — Правила агрегации для каждой строки.
- func: `ensure_mfc_report_lines_table(conn)` — Список строк внутри конкретного отчёта (порядок, заголовок).
- func: `ensure_mfc_report_rules_add_sets(conn)` — 
- func: `ensure_mfc_report_schema(conn)` — Главная обёртка: создать всё для правила-сборки отчётов.
- func: `ensure_mfc_sets_schema(conn)` — 
### Module db.ensure_mo
- func: `ensure_mo_tables(conn)` — 
### Module db.queries
- func: `fetch_flat_bom_for_parent(conn, product_id)` — 
- func: `fetch_labor_cost_unit(conn, product_id)` — 
- func: `fetch_labor_total(conn, product_id) -> float` — 
- func: `fetch_materials_from_bom(conn, product_id)` — 
- func: `fetch_produced_items(conn)` — 
- func: `search_items_by_tokens(conn, tokens: str | list[str], limit_per_token: int = 20) -> pandas.core.frame.DataFrame` — Ищет items по множеству токенов (артикул/название/код).
### Module db.schema
- class: `Migration(version: int, name: str, apply: Callable[[sqlite3.Connection], NoneType]) -> None` — Migration(version: int, name: str, apply: Callable[[sqlite3.Connection], NoneType])
- class: `SchemaManager(migrations: Optional[List[db.schema.Migration]] = None)` — 
- func: `add_column_if_missing(conn, table: str, coldef: str)` — 
- func: `column_exists(conn, table: str, column: str) -> bool` — 
- func: `dataclass(cls=None, /, *, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False, weakref_slot=False)` — Add dunder methods based on the fields defined in the class.
- func: `ensure_active_scenarios(conn)` — 
- func: `ensure_bom_struct_stage_table(conn)` — 
- func: `ensure_bom_table(conn)` — Ensure bom_flat exists and 'bom' view points to it; handle legacy bom table.
- func: `ensure_budget_tables(conn)` — РЎРѕР·РґР°С‚СЊ С‚Р°Р±Р»РёС†С‹ РґР»СЏ Р·Р°РіСЂСѓР·РєРё Рё С…СЂР°РЅРµРЅРёСЏ Р±СЋРґР¶РµС‚Р° OPEX.
- func: `ensure_cc_extra_columns(conn)` — Backwards-compatible helper; migrations add required columns.
- func: `ensure_commodity_map(conn)` — 
- func: `ensure_cost_rates_indexes(conn)` — 
- func: `ensure_depr_opr_cost_tables(conn)` — 
- func: `ensure_depr_opr_rates(conn)` — 
- func: `ensure_elem_structure_tables(conn: sqlite3.Connection) -> None` — Create elem_nodes/elem_edges tables used for hierarchy traversal.
- func: `ensure_item_cg_view(conn)` — 
- func: `ensure_items_columns(conn)` — 
- func: `ensure_labor_cost_table(conn)` — 
- func: `ensure_labor_hours_table(conn)` — 
- func: `ensure_labor_rates_snapshot_schema(conn)` — 
- func: `ensure_mfc_report_schema(conn)` — Главная обёртка: создать всё для правила-сборки отчётов.
- func: `ensure_mo_tables(conn)` — 
- func: `ensure_ovh_bases_year_table(conn)` — РЎРЅРёРјРѕРє Р±Р°Р· Рё СЂР°СЃРїСЂРµРґРµР»РµРЅРёР№ РїРѕ РѕРІРµСЂС…РµРґ-РіСЂСѓРїРїР°Рј (A001вЂ“A010) РЅР° РєРѕРЅРєСЂРµС‚РЅС‹Р№ РіРѕРґ.
- func: `ensure_ovh_cost_unit_table(conn)` — 
- func: `ensure_ovh_costs_table(conn)` — Ensure ovh_costs table exists and is indexed.
- func: `ensure_ovh_flat_table(conn)` — Ensure ovh_flat unified schema columns exist (idempotent).
- func: `ensure_ovh_tariffs_indexes(conn)` — 
- func: `ensure_ovh_tariffs_table(conn)` — 
- func: `ensure_ovh_views(conn)` — 
- func: `ensure_price_views(conn)` — 
- func: `ensure_prod_budget_table(conn)` — 
- func: `ensure_prod_budget_views(conn)` — 
- func: `ensure_rm_price_load_table(conn)` — 
- func: `ensure_rm_prices(conn)` — 
- func: `ensure_routing_flat_table(conn)` — Ensure routing_flat exists with required columns and indexes.
- func: `ensure_routing_tree_table(conn)` — 
- func: `ensure_routings_columns(conn)` — 
- func: `ensure_run_logging(conn)` — 
- func: `ensure_scenario_cost_views(conn)` — Create scenario-based cost views for BOM, routing, and overhead (OVH).
- func: `ensure_schema(conn: sqlite3.Connection) -> None` — Ensure database schema is up to date.
- func: `ensure_scrap_cost_unit_table(conn)` — 
- func: `ensure_transfers_schema(conn)` — 
- func: `ensure_unique_routing_group(conn)` — 
- func: `get_table_info(conn, table: str)` — 
- func: `migrate_ovh_tariffs_to_tall(conn)` — Миграция таблицы ovh_tariffs к формату (overhead_group, year, scenario, cost_type, share)
- func: `populate_ovh_costs(conn)` — Rebuild ovh_costs for active year with restricted driverв†’cost_type mapping.
- func: `table_exists(conn, name: str) -> bool` — 

## Package loaders
### Module loaders.bom_loader
- class: `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- func: `load_bom_components_xlsx(conn, file_bytes: 'bytes', mapping: 'Optional[Dict[str, str]]' = None, default_spec_valid_from: 'Optional[str]' = None, load_id: 'Optional[str]' = None) -> 'str'` — 
- func: `load_bom_specs_xlsx(conn, file_bytes: 'bytes', mapping: 'Optional[Dict[str, str]]' = None, default_valid_from: 'Optional[str]' = None, load_id: 'Optional[str]' = None) -> 'str'` — 
- func: `normalize_bom_components_stage(conn, load_id: 'Optional[str]' = None) -> 'int'` — Normalize bom_components_stage by assigning line_no where missing and clearing error_flag.
- func: `upsert_bom_components_from_stage(conn, load_id: 'str', verbose: 'bool' = False) -> 'int'` — Fast upsert from stage to bom_spec_components for a given load_id.
- func: `upsert_bom_specs_from_stage(conn, load_id: 'str') -> 'int'` — 
### Module loaders.ccg_wru_loader
- class: `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- func: `ensure_cc_extra_columns(conn)` — Backwards-compatible helper; migrations add required columns.
- func: `load_cc_structure_twofiles(conn: 'sqlite3.Connection', groups_path: 'str', leaves_path: 'str', sheet_name: 'str | None' = None)` — 
- func: `parse_groups_from_ccg(df: 'pd.DataFrame') -> 'Tuple[List[Dict], List[Tuple[str, str]]]'` — 
- func: `parse_leaves_from_list(df: 'pd.DataFrame') -> 'Tuple[List[Dict], List[Tuple[str, str]]]'` — 
- func: `upsert_cc(conn: 'sqlite3.Connection', nodes: 'List[Dict]', edges: 'List[Tuple[str, str]]')` — 
### Module loaders.direct_cost_loader
- class: `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- class: `ColumnMap(cc_id_col: 'str | None', dept_col: 'str | None', month_cols: 'list[Any]', yearly_col: 'str | None') -> None` — ColumnMap(cc_id_col: 'str | None', dept_col: 'str | None', month_cols: 'list[Any]', yearly_col: 'str | None')
- func: `dataclass(cls=None, /, *, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False, weakref_slot=False)` — Add dunder methods based on the fields defined in the class.
- func: `render(conn)` — 
### Module loaders.load_cost_structures
- class: `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- func: `cc_duplicates_report(conn: sqlite3.Connection) -> Dict[str, pandas.core.frame.DataFrame]` — Возвращает диагностические DataFrame:
- func: `ensure_schema(conn: sqlite3.Connection) -> None` — 
- func: `main()` — 
- func: `parse_ccg(df: pandas.core.frame.DataFrame) -> Tuple[List[Dict], List[Tuple[str, str]]]` — Разбор CCG WRU с поддержкой разных имён колонок уровней (Level0/LEVEL 1/L2/Уровень 3 и т.д.).
- func: `parse_mfc(df: pandas.core.frame.DataFrame, leaf_level: int = 5) -> Tuple[List[Dict], List[Tuple[str, str]]]` — Скольжение по дереву MFCPRIM:
- func: `quality_checks(conn: sqlite3.Connection) -> Dict[str, int]` — 
- func: `upsert_cc(conn: sqlite3.Connection, nodes: List[Dict], edges: List[Tuple[str, str]]) -> None` — 
- func: `upsert_elem(conn, nodes, edges)` — 
### Module loaders.loader_mo_prices
- class: `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- func: `load_mo_prices(path: str, conn, *, sheet_name: int | str = 0, vendor: Optional[str] = None, effective_from: Optional[str] = None, effective_to: Optional[str] = None, source: Optional[str] = None, preview_only: bool = True)` — 
### Module loaders.loaders
- class: `Decimal(value='0', context=None)` — Construct a new Decimal object. 'value' can be an integer, string, tuple,
- class: `InvalidOperation(...)` — Base class for arithmetic errors.
- class: `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- func: `apply_department_suggestions(conn, df_suggestions)` — Применяет suggested_dept к операциям с UNASSIGNED/пустым департаментом.
- func: `diagnose_routings(conn)` — Возвращает словарь DataFrame'ов:
- func: `ensure_items_columns(conn)` — 
- func: `ensure_prod_budget_table(conn)` — 
- func: `ensure_routings_columns(conn)` — 
- func: `is_object_dtype(arr_or_dtype) -> 'bool'` — Check whether an array-like or dtype is of the object dtype.
- func: `load_ovh_tariffs(conn, csv_path: 'str', year: 'int')` — Принимает wide CSV (колонки: overhead_group, scrap_share, depr_opr_share, log_share, adm_share)
- func: `load_prod_budget_from_xlsx(conn, xlsx_path: 'str', scenario: 'str', article_aliases=None, name_aliases=None)` — Двухстрочный заголовок: склеиваем header=[0,1].
- func: `normalize_date_any(x)` — 
- func: `normalize_department_code(dept_raw, operation_text: 'str')` — Возвращает (dept_code, source), где source ∈ {"given","inferred","default"}.
- func: `read_rm_prices_xlsx(file_or_path, sheet_name=0) -> 'pd.DataFrame'` — 
- func: `safe_col(df: pandas.core.frame.DataFrame, name: str, default=None)` — 
- func: `split_work_type(row) -> 'pd.Series'` — Из "Вид работ" пытается извлечь operation и department.
- func: `sync_bom_struct_from_stage(conn, spec_codes: 'list[str] | None' = None)` — 
- func: `to_float_ru(x)` — 
- func: `upsert_bom_general(conn, df: 'pd.DataFrame', allow_stub_items: 'bool' = False)` — 
- func: `upsert_bom_struct(conn, df: 'pd.DataFrame', *, default_qty_if_blank: 'float' = 1.0, create_stub_items: 'bool' = True, source_batch: 'str | None' = None)` — 
- func: `upsert_depr_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- func: `upsert_items(conn, df: 'pd.DataFrame')` — 
- func: `upsert_items_from_xlsx(conn, df: 'pd.DataFrame')` — Ожидаемые колонки:
- func: `upsert_labor_rates_periodic(conn, df: 'pd.DataFrame')` — 
- func: `upsert_labor_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- func: `upsert_opr_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- func: `upsert_rm_prices(conn, df: 'pd.DataFrame', filename: 'str', effective_from: 'str | None' = None, load_id: 'str | None' = None)` — 
- func: `upsert_routings(conn, df: 'pd.DataFrame')` — Единый routing на один routing_group.
### Module loaders.opex_loader
- func: `commit_opex(conn: sqlite3.Connection, load_id: str, bud_year: int = 2026) -> tuple[int, float]` — 
- func: `diagnose_opex_stage(conn, load_id: str) -> dict` — 
- func: `read_opex_excel(path: str, sheet_name: str = 'INPUT') -> pandas.core.frame.DataFrame` — 
- func: `stage_opex(conn, df: pandas.core.frame.DataFrame, sheet_name: str, treat_empty_as_zero: bool = False)` — 
### Module loaders.personnel_loader
- class: `BinaryIO()` — Typed version of the return of open() in binary mode.
- func: `load_personnel_monthly_from_excel(conn, xls: 'ExcelInput', bud_year: 'int', sheet: 'Optional[str]' = None, clear_year_first: 'bool' = False, source: 'str' = 'file', note: 'str' = None) -> 'tuple[int, pd.DataFrame]'` — Загружает персонал по месяцам (personnel_monthly) из xlsx формата как в 110_HC_2026.xlsx.
### Module loaders.rules_loader
- func: `ensure_rules_schema(conn: 'sqlite3.Connection') -> 'None'` — 
- func: `list_rules(conn: 'sqlite3.Connection', q: 'Optional[str]' = None, limit: 'int' = 500) -> 'pd.DataFrame'` — 
- func: `read_rules_excel(xlsx_path: 'str') -> 'Tuple[pd.DataFrame, pd.DataFrame]'` — Читает оба листа из файла: detail_rules и fallback_rules (если есть).
- func: `toggle_rule(conn: 'sqlite3.Connection', rule_id: 'int', enabled: 'bool') -> 'None'` — 
- func: `update_rule_row(conn: 'sqlite3.Connection', row: 'Dict') -> 'None'` — 
- func: `upsert_rules(conn: 'sqlite3.Connection', df_rules: 'pd.DataFrame', enable: 'bool' = True) -> 'int'` — Массовая запись правил. Если правило с теми же (priority, cost_type, pattern, elem_id) уже есть —
- func: `validate_rules(conn: 'sqlite3.Connection', df_rules: 'pd.DataFrame') -> 'pd.DataFrame'` — Проверка: elem_id существует в elem_nodes; предупреждения по пустым cost_type и pattern одновременно.
### Module loaders.updater
- class: `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- func: `apply_items_updates(conn, preview_df: 'pd.DataFrame') -> 'int'` — Принимает датафрейм из preview_items_updates; применяет UPDATE только по изменённым полям.
- func: `apply_std_prices(conn, preview_df: 'pd.DataFrame', source_name: 'str') -> 'int'` — Принимаем датафрейм из preview_std_prices (можно отфильтровать note IS NULL),
- func: `preview_items_updates(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0) -> 'pd.DataFrame'` — 
- func: `preview_std_prices(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0, article_col='Material', price_col='STD 2026', uom='ШТ', currency='RUB') -> 'pd.DataFrame'` — 
### Module loaders.utils
- func: `drop_1c_totals(df: pandas.core.frame.DataFrame) -> pandas.core.frame.DataFrame` — 
- func: `read_1c_txt(file_bytes: bytes, encoding='auto') -> pandas.core.frame.DataFrame` — 
- func: `read_excel(file_bytes: bytes) -> pandas.core.frame.DataFrame` — 
- func: `safe_col(df: pandas.core.frame.DataFrame, name: str, default=None)` — 
- func: `to_float_ru(x)` — 

## Package app
### Module app.app — _import failed_
### Module app.init_db
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `main()` — 

## Package ui
### Module ui.admin_table_editor
- func: `render_table_editor(conn: sqlite3.Connection)` — 
### Module ui.alloc_wizard
- class: `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- class: `DraftRule(component_code: 'str' = 'LABOR_DIRECT', description: 'str' = '', policy: 'str' = 'weights', cc_nodes: 'List[str]' = <factory>, elem_nodes: 'List[str]' = <factory>, driver_code: 'str' = 'HOURS', driver_set: 'str' = 'PLAN_HOURS_2026', fallback: 'str' = 'error', overrides: 'List[Dict[str, Any]]' = <factory>) -> None` — DraftRule(component_code: 'str' = 'LABOR_DIRECT', description: 'str' = '', policy: 'str' = 'weights', cc_nodes: 'List[str]' = <factory>, elem_nodes: 'List[str]' = <factory>, driver_code: 'str' = 'HOURS', driver_set: 'str' = 'PLAN_HOURS_2026', fallback: 'str' = 'error', overrides: 'List[Dict[str, Any]]' = <factory>)
- class: `WizardState(period_from: 'str' = '2026-01', period_to: 'str' = '2026-01', scenario: 'str' = 'PLAN', rule_set_id: 'str' = 'DEFAULT_2026', rule_set_status: 'str' = 'DRAFT', scope_filter: 'str' = '', draft: 'DraftRule' = <factory>) -> None` — WizardState(period_from: 'str' = '2026-01', period_to: 'str' = '2026-01', scenario: 'str' = 'PLAN', rule_set_id: 'str' = 'DEFAULT_2026', rule_set_status: 'str' = 'DRAFT', scope_filter: 'str' = '', draft: 'DraftRule' = <factory>)
- func: `apply_allocations(conn: 'sqlite3.Connection', period: 'str', scenario: 'str', rule_set_id: 'str', run_id: 'Optional[str]' = None, components: 'Optional[List[str]]' = None) -> 'int'` — Apply weight-based allocations for given period and rule set.
- func: `asdict(obj, *, dict_factory=<class 'dict'>)` — Return the fields of a dataclass instance as a new dictionary mapping
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `dataclass(cls=None, /, *, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False, weakref_slot=False)` — Add dunder methods based on the fields defined in the class.
- func: `field(*, default=<dataclasses._MISSING_TYPE object at 0x000001C4572A50A0>, default_factory=<dataclasses._MISSING_TYPE object at 0x000001C4572A50A0>, init=True, repr=True, hash=None, compare=True, metadata=None, kw_only=<dataclasses._MISSING_TYPE object at 0x000001C4572A50A0>)` — Return an object to identify dataclass fields.
- func: `render(db_path: 'str')` — 
### Module ui.app_streamlit
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `ensure_bom_table(conn)` — Ensure bom_flat exists and 'bom' view points to it; handle legacy bom table.
- func: `ensure_unique_routing_group(conn)` — 
- func: `main()` — 
- func: `normalize_db_path(raw: str | pathlib.Path) -> pathlib.Path` — 
- func: `render_alloc_wizard(db_path: 'str')` — 
- func: `render_budget_run(db_path: str)` — 
- func: `render_cost_tree(db_path: 'str')` — 
- func: `render_costing_run(db_path)` — 
- func: `render_import_data(db_path: str, encoding='auto')` — 
- func: `render_updater(db_path: str)` — 
- func: `run_nsi_refs()` — 
### Package ui.components
### Module ui.components.item_picker
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `item_paste_picker(db_path: str, key_prefix: str = 'picker', title: str = 'Выбор позиций для расчёта') -> List[str]` — Возвращает список выбранных item_id.
- func: `search_items_by_tokens(conn, tokens: str | list[str], limit_per_token: int = 20) -> pandas.core.frame.DataFrame` — Ищет items по множеству токенов (артикул/название/код).
### Module ui.components.set_window_title
- func: `set_window_title(title: str)` — 
### Module ui.data_cogs
- func: `fetch_cogs_unit(conn: 'sqlite3.Connection', period: 'str', scenario: 'str', product_ids: 'list[str] | None' = None) -> 'pd.DataFrame'` — 
- func: `get_periods(conn: 'sqlite3.Connection') -> 'list[str]'` — Fast list of available periods from base tables (avoid heavy v_cogs_unit).
- func: `get_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `pivot_cogs(df: 'pd.DataFrame') -> 'pd.DataFrame'` — 
### Module ui.views_bom_xlsx
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `load_bom_components_xlsx(conn, file_bytes: 'bytes', mapping: 'Optional[Dict[str, str]]' = None, default_spec_valid_from: 'Optional[str]' = None, load_id: 'Optional[str]' = None) -> 'str'` — 
- func: `load_bom_specs_xlsx(conn, file_bytes: 'bytes', mapping: 'Optional[Dict[str, str]]' = None, default_valid_from: 'Optional[str]' = None, load_id: 'Optional[str]' = None) -> 'str'` — 
- func: `render(db_path: str)` — 
- func: `upsert_bom_components_from_stage(conn, load_id: 'str', verbose: 'bool' = False) -> 'int'` — Fast upsert from stage to bom_spec_components for a given load_id.
- func: `upsert_bom_specs_from_stage(conn, load_id: 'str') -> 'int'` — 
### Module ui.views_budget
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `list_price_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — Список доступных сценариев цен (price_scenarios.scenario_code).
- func: `list_rate_years(conn: 'sqlite3.Connection') -> 'list[int]'` — 
- func: `normalize_db_path(raw: str | pathlib.Path) -> pathlib.Path` — 
- func: `render_budget_run(db_path: str)` — 
- func: `render_ppv(conn: sqlite3.Connection)` — Рендер PPV (Price Purchase Variance) по Commodity Group.
### Module ui.views_cost_tree
- func: `audit_schema_and_data(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', *, load_id: 'str', year: 'int', scenario: 'str | None') -> 'AuditResult'` — 
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `fetch_direct_cost(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', year: 'int', scenario: 'Optional[str]' = None) -> 'Tuple[pd.DataFrame, dict]'` — Return per-operation direct cost rows with rates from cost_rates.
- func: `fetch_direct_cost_by_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', year: 'int', scenario: 'Optional[str]' = None) -> 'Tuple[pd.DataFrame, dict]'` — Прямые (операции) через v_routing_costs_scenario.
- func: `fetch_indirect_costs_by_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]') -> 'pd.DataFrame'` — Fetch indirect (non-production) costs from v_ovh_costs_scenario for selected products.
- func: `fetch_materials_cost(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', load_id: 'Optional[str]') -> 'Tuple[pd.DataFrame, dict]'` — Return materials subtree rows with price from rm_prices(load_id) and diagnostics.
- func: `fetch_materials_cost_by_scenario(conn: 'sqlite3.Connection', product_ids: 'Iterable[str]', price_scenario: 'str', *, currency: 'str' = 'RUB') -> 'Tuple[pd.DataFrame, dict]'` — Материалы из v_bom_costs_scenario для выбранного сценария цен.
- func: `list_price_load_ids(conn: 'sqlite3.Connection') -> 'list[str]'` — Вернёт список load_id из rm_prices (упорядоченный по последней дате загрузки, если доступно).
- func: `list_price_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — Список доступных сценариев цен (price_scenarios.scenario_code).
- func: `list_produced_items(conn: 'sqlite3.Connection') -> 'pd.DataFrame'` — 
- func: `list_rate_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `list_rate_years(conn: 'sqlite3.Connection') -> 'list[int]'` — 
- func: `log_report_event(*, log_path: 'str', product_ids: 'Iterable[str]', load_id: 'str', year: 'int', scenario: 'Optional[str]', materials_diag: 'Dict[str, Any] | None' = None, direct_diag: 'Dict[str, Any] | None' = None, error: 'Optional[str]' = None) -> 'None'` — 
- func: `render(db_path: 'str')` — 
### Module ui.views_costing_run
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `normalize_db_path(raw: str | pathlib.Path) -> pathlib.Path` — 
- func: `render_costing_run(db_path)` — 
- func: `render_ovh_rates_calc(conn, default_year: int = 2026)` — 
- func: `render_rates_calc(conn: sqlite3.Connection, vol_scn: str | None = None) -> None` — 
- func: `render_transfers(conn)` — 
### Module ui.views_mo_loader
- func: `load_mo_prices(path: str, conn, *, sheet_name: int | str = 0, vendor: Optional[str] = None, effective_from: Optional[str] = None, effective_to: Optional[str] = None, source: Optional[str] = None, preview_only: bool = True)` — 
- func: `view_mo_loader(conn)` — 
### Module ui.views_opr_rates
- func: `cast(typ, val)` — Cast a value to a type.
- func: `compare_with_previous(conn, df_current: pandas.core.frame.DataFrame, component_code: str, base_scenario: str | None = None) -> pandas.core.frame.DataFrame` — Если base_scenario задан и отличается от текущего → сравниваем со снапшотом указанного сценария.
- func: `component_code_for_kind(kind: str, components: pandas.core.frame.DataFrame | None = None) -> str` — 
- func: `compute_rates(conn, price_scn: str, months_ym: list[str], cc_root: str, kind: str = 'labor', vol_scn: str = 'BG26_VOL') -> pandas.core.frame.DataFrame` — Универсальный расчёт ставки = (Сумма по группе элементов) / (Плановые часы) по каждому ЦЗ.
- func: `fetch_last_snapshot(conn, scenario: str, component_code: str) -> pandas.core.frame.DataFrame` — 
- func: `list_price_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — Список доступных сценариев цен (price_scenarios.scenario_code).
- func: `list_rate_components(conn) -> pandas.core.frame.DataFrame` — Return active cost rate components with fallbacks.
- func: `render_rates_calc(conn: sqlite3.Connection, vol_scn: str | None = None) -> None` — 
- func: `resolve_vol_scenario(conn, bud_year: int, vol_scn: str | None) -> str` — 
- func: `save_rates_cost_rates(conn, df_rates: pandas.core.frame.DataFrame, component_code: str, scenario: str = '') -> int` — Save computed yearly rates into unified cost_rates (idempotent).
- func: `scenario_to_year(price_scn: str, default: int | None = None) -> int` — Derive numeric budget year from scenario code (e.g. BG26_VOL -> 2026).
### Module ui.views_ovh_rates
- class: `TariffParams(year: 'int', vol_scenario: 'str', price_scenario: 'str', routing_scenario: 'str') -> None` — TariffParams(year: 'int', vol_scenario: 'str', price_scenario: 'str', routing_scenario: 'str')
- func: `list_price_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `list_routing_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `list_volume_scenarios(conn: 'sqlite3.Connection') -> 'list[str]'` — 
- func: `preview_tariffs(conn: 'sqlite3.Connection', *, year: 'Optional[int]' = None, vol_scenario: 'Optional[str]' = None, price_scenario: 'Optional[str]' = None, routing_scenario: 'Optional[str]' = None, scrap_share: 'Optional[float]' = None) -> 'TariffPreview'` — 
- func: `render_ovh_rates_calc(conn, default_year: int = 2026)` — 
- func: `save_tariffs(conn: 'sqlite3.Connection', preview: 'TariffPreview', *, cost_types: 'Optional[Iterable[str]]' = None) -> 'int'` — 
- func: `write_scrap_tariffs(conn: 'sqlite3.Connection', params: 'TariffParams', share: 'float', *, year: 'Optional[int]' = None, groups: 'Optional[Sequence[str]]' = None) -> 'int'` — 
### Module ui.views_ppv
- class: `BytesIO(initial_bytes=b'')` — Buffered I/O implementation using an in-memory bytes buffer.
- func: `compute_ppv_by_cg(conn: 'sqlite3.Connection', *, vol_s: 'str', s1: 'str', s2: 'str', s3: 'str', pure_only: 'bool' = False) -> 'Dict[str, pd.DataFrame]'` — Рассчитать PPV по commodity group.
- func: `render_ppv(conn: sqlite3.Connection)` — Рендер PPV (Price Purchase Variance) по Commodity Group.
### Module ui.views_quality
- func: `check_bom_components_missing_prices(conn)` — Компоненты из BOM без цены в rm_prices (по последней загрузке).
- func: `check_bom_unknown_items(conn)` — BOM с компонентами, отсутствующими в items.
- func: `check_budget_has_nonproduced(conn)` — В prod_budget есть product_id, который в items помечен как is_produced=0.
- func: `check_items_duplicate_article(conn)` — Дубли артикулов (один article на несколько item_id).
- func: `check_items_nonproduced_has_routing_or_ovh(conn)` — Непроизводимые (is_produced=0) с заполненными routing_group/ovh_group_code (подозрительно).
- func: `check_items_produced_missing_routing_or_ovh(conn)` — Производимые (is_produced=1), у которых пусты routing_group или ovh_group_code.
- func: `check_items_required_fields(conn)` — Пустые/нулевые article, name, uom.
- func: `check_ovh_groups_missing_tariffs(conn, year: 'int | None' = None, scenario: 'str | None' = None)` — Группы из ovh_flat, которых нет в ovh_tariffs (по году; если год None — берём max(year)).
- func: `check_routing_flat_missing_rates(conn)` — Департаменты из routing_flat без ставки в labor_rates_snapshot.
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `render(db_path: str)` — 
### Module ui.views_transfers
- func: `apply_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', vol_scenario: 'str | None' = None, comment: 'str' = 'efficiency normalize', created_by: 'str | None' = None) -> 'str'` — 
- func: `compute_efficiency_table(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', vol_scenario: 'str | None' = None) -> 'pd.DataFrame'` — Таблица эффективности по производственным ЦЗ:
- func: `plan_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', vol_scenario: 'str | None' = None) -> 'tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]'` — Строит план нормализации:
- func: `render_opex_cycles(conn: sqlite3.Connection)` — 
- func: `render_transfers(conn)` — 
- func: `revert_transfer(conn, batch_id: str)` — 
### Module ui.views_transfers_opex
- func: `apply_cycle(conn, cycle_id: 'int', cycle_no: 'int', comment: 'str', created_by: 'str | None' = None) -> 'str'` — 
- func: `load_cycle_meta(conn: 'sqlite3.Connection', cycle_id: 'int')` — 
- func: `load_cycle_rules_df(conn: 'sqlite3.Connection', cycle_id: 'int') -> 'pd.DataFrame'` — 
- func: `plan_transfer_opex_by_rules(conn: 'sqlite3.Connection', bud_year: 'int', elem_root: 'str', cycle_no: 'int', rules_df: 'pd.DataFrame') -> 'pd.DataFrame'` — rules_df: columns = donor_cc_id, to_cc_id, share (0..1), optional to_elem_id.
- func: `render_opex_cycles(conn: sqlite3.Connection)` — 
### Module ui.views_updater
- func: `apply_items_updates(conn, preview_df: 'pd.DataFrame') -> 'int'` — Принимает датафрейм из preview_items_updates; применяет UPDATE только по изменённым полям.
- func: `apply_std_prices(conn, preview_df: 'pd.DataFrame', source_name: 'str') -> 'int'` — Принимаем датафрейм из preview_std_prices (можно отфильтровать note IS NULL),
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `preview_items_updates(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0) -> 'pd.DataFrame'` — 
- func: `preview_std_prices(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0, article_col='Material', price_col='STD 2026', uom='ШТ', currency='RUB') -> 'pd.DataFrame'` — 
- func: `render(db_path: str)` — 
### Module ui.views_upload
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- func: `apply_department_suggestions(conn, df_suggestions)` — Применяет suggested_dept к операциям с UNASSIGNED/пустым департаментом.
- func: `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- func: `is_object_dtype(arr_or_dtype) -> 'bool'` — Check whether an array-like or dtype is of the object dtype.
- func: `load_bom_components_xlsx(conn, file_bytes: 'bytes', mapping: 'Optional[Dict[str, str]]' = None, default_spec_valid_from: 'Optional[str]' = None, load_id: 'Optional[str]' = None) -> 'str'` — 
- func: `load_bom_specs_xlsx(conn, file_bytes: 'bytes', mapping: 'Optional[Dict[str, str]]' = None, default_valid_from: 'Optional[str]' = None, load_id: 'Optional[str]' = None) -> 'str'` — 
- func: `load_mo_prices(path: str, conn, *, sheet_name: int | str = 0, vendor: Optional[str] = None, effective_from: Optional[str] = None, effective_to: Optional[str] = None, source: Optional[str] = None, preview_only: bool = True)` — 
- func: `load_personnel_monthly_from_excel(conn, xls: 'ExcelInput', bud_year: 'int', sheet: 'Optional[str]' = None, clear_year_first: 'bool' = False, source: 'str' = 'file', note: 'str' = None) -> 'tuple[int, pd.DataFrame]'` — Загружает персонал по месяцам (personnel_monthly) из xlsx формата как в 110_HC_2026.xlsx.
- func: `load_prod_budget_from_xlsx(conn, xlsx_path: 'str', scenario: 'str', article_aliases=None, name_aliases=None)` — Двухстрочный заголовок: склеиваем header=[0,1].
- func: `materialize_bom_flat(conn: 'sqlite3.Connection', product_id: 'str | None' = None) -> 'int'` — Materialize bom_flat using SQL scripts under sql/materialize.
- func: `materialize_mo_cost_unit(conn, *, on_date: 'str | None' = None)` — Р—Р°РїРѕР»РЅСЏРµС‚ mo_cost_unit РёР· bom_flat Г— mo_last_price (РЅР° РґР°С‚Сѓ РёР»Рё РїРѕ С‚РµРєСѓС‰РµР№).
- func: `read_1c_txt(file_bytes: bytes, encoding='auto') -> pandas.core.frame.DataFrame` — 
- func: `read_rm_prices_xlsx(file_or_path, sheet_name=0) -> 'pd.DataFrame'` — 
- func: `render(db_path: str, encoding='auto')` — 
- func: `render_direct_cost_loader(conn)` — 
- func: `to_float_ru(x)` — 
- func: `upsert_bom_components_from_stage(conn, load_id: 'str', verbose: 'bool' = False) -> 'int'` — Fast upsert from stage to bom_spec_components for a given load_id.
- func: `upsert_bom_specs_from_stage(conn, load_id: 'str') -> 'int'` — 
- func: `upsert_items(conn, df: 'pd.DataFrame')` — 
- func: `upsert_items_from_xlsx(conn, df: 'pd.DataFrame')` — Ожидаемые колонки:
- func: `upsert_rm_prices(conn, df: 'pd.DataFrame', filename: 'str', effective_from: 'str | None' = None, load_id: 'str | None' = None)` — 
- func: `upsert_routings(conn, df: 'pd.DataFrame')` — Единый routing на один routing_group.

## Package config
### Module config.settings
- class: `Path(*args, **kwargs)` — PurePath subclass that can make system calls.

## Materials-related
- calc.materialize
- calc.materialize_sql
- calc.mo_materials

See: [DB schema](./DB_SCHEMA.md) · [Rules](./RULES_COVERAGE.md)
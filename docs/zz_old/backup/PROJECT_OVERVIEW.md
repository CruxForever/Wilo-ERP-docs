# Project overview

## Package `calc`
### Module `calc.budget`
- **func** `build_budget_frames(conn, months_ym: list[str])` — Возвращает dict {sheet_name: DataFrame} для Total + помесячных листов.
- **func** `export_budget_to_excel(conn, months_ym: list[str], out_xlsx_path: str)` — 
- **func** `unit_cost_breakdown(conn, product_id: str) -> dict` — 
### Module `calc.efficiency`
- **func** `apply_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', comment: 'str' = 'efficiency normalize', created_by: 'str | None' = None) -> 'str'` — 
- **func** `compute_efficiency_table(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21') -> 'pd.DataFrame'` — Таблица эффективности по производственным ЦЗ:
- **func** `plan_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21') -> 'tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]'` — Строит план нормализации:
### Module `calc.item_cost`
- **func** `build_unified_compact_table(conn, product_id: str) -> pandas.core.frame.DataFrame` — Компактный вид: суммы по секциям + TOTAL (и доля секции от TOTAL).
- **func** `build_unified_detailed_table(conn, product_id) -> pandas.core.frame.DataFrame` — Расширенный вид по правилам контекста:
- **func** `compute_item_cost_unified(conn, product_id)` — Собирает компактный вид: строки секций + подитоги по секциям + GRAND.
### Module `calc.logger`
- **class** `RunLogger(conn, scope: str, params: dict)` — 
### Module `calc.materialize`
- **class** `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- **func** `cleanup_routing_tree(conn, product_id: str | None = None)` — 
- **func** `debug_snapshot(conn, pid: str | None, tag: str)` — 
- **func** `ensure_depr_opr_cost_tables(conn)` — 
- **func** `ensure_labor_cost_table(conn)` — 
- **func** `ensure_labor_hours_table(conn)` — 
- **func** `ensure_ovh_cost_unit_table(conn)` — 
- **func** `ensure_routing_flat_table(conn)` — 
- **func** `ensure_routing_tree_table(conn)` — 
- **func** `ensure_scrap_cost_unit_table(conn)` — 
- **func** `materialize_depr_costs(conn, product_id: str | None = None)` — 
- **func** `materialize_flat_bom_recursive(conn, product_id: str | None = None)` — 
- **func** `materialize_labor_costs(conn, product_id: str | None = None, on_date: str | None = None)` — 
- **func** `materialize_labor_hours(conn, product_id: str | None = None)` — 
- **func** `materialize_mo_cost_unit(conn, *, on_date: str | None = None)` — Заполняет mo_cost_unit из bom_flat × mo_last_price (на дату или по текущей).
- **func** `materialize_mo_cost_unit_monthly(conn, month_code: str)` — Для бюджета: фиксирует цену на месяц (на первый день месяца).
- **func** `materialize_opr_costs(conn, product_id: str | None = None)` — 
- **func** `materialize_ovh_costs(conn, product_ids=None, year=2026)` — АмортизацияОПР  = Σ ( mat_cost_g * depr_opr_share_g )
- **func** `materialize_ovh_flat(conn, product_ids=None)` — Строит ovh_flat из ovh_tree, распределяя МАТЕРИАЛЬНУЮ стоимость по alloc_group:
- **func** `materialize_ovh_tree(conn, product_ids=None, max_depth: int = 20)` — Строит ovh_tree с протаскиванием alloc_group (ближайшая сверху заданная группа).
- **func** `materialize_routing_flat(conn, product_id: str | None = None)` — Заполняет routing_flat на основании routing_tree и routing_operations.
- **func** `materialize_routing_tree(conn, product_id: str | None = None, max_depth: int = 20)` — 
- **func** `materialize_scrap_cost_unit(conn, product_ids=None, year=2026)` — SCRAP = Σ по группам ( mat_cost_group * scrap_share[group] )
- **func** `run_routing_and_labor_pipeline(conn, product_ids=None, *, on_date=None, max_depth=20, clean_before=True)` — Единый надёжный пайплайн:
### Module `calc.pipeline`
- **func** `debug_snapshot(conn, pid: str | None, tag: str)` — 
- **func** `run_full_pipeline(conn, product_ids=None, *, max_depth=20, on_date=None, clean_before=True, dry_run=False) -> str` — Массовый расчёт:
- **func** `run_routing_and_labor_pipeline(conn, product_ids=None, *, on_date=None, max_depth=20, clean_before=True)` — Единый надёжный пайплайн:
### Module `calc.quality`
- **func** `check_bom_components_missing_prices(conn)` — Компоненты из BOM без цены в rm_prices (по последней загрузке).
- **func** `check_bom_unknown_items(conn)` — BOM с компонентами, отсутствующими в items.
- **func** `check_budget_has_nonproduced(conn)` — В prod_budget есть product_id, который в items помечен как is_produced=0.
- **func** `check_items_duplicate_article(conn)` — Дубли артикулов (один article на несколько item_id).
- **func** `check_items_nonproduced_has_routing_or_ovh(conn)` — Непроизводимые (is_produced=0) с заполненными routing_group/ovh_group_code (подозрительно).
- **func** `check_items_produced_missing_routing_or_ovh(conn)` — Производимые (is_produced=1), у которых пусты routing_group или ovh_group_code.
- **func** `check_items_required_fields(conn)` — Пустые/нулевые article, name, uom.
- **func** `check_ovh_groups_missing_tariffs(conn, year: 'int | None' = None)` — Группы из ovh_flat, которых нет в ovh_tariffs (по году; если год None — берём max(year)).
- **func** `check_routing_flat_missing_rates(conn)` — Департаменты из routing_flat без ставки в labor_rates_snapshot.
- **func** `render_quality_ui(conn, st)` — Экран проверок с чекбоксами. Пример использования в вашей вьюшке:
- **func** `run_quality_checks(conn, selected: 'list[str] | None' = None) -> 'dict[str, pd.DataFrame]'` — selected: список кодов проверок. Если None — запустить все.
### Module `calc.rates_calc`
- **class** `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- **func** `amounts_by_cc_for_elemgroup(conn, bud_year: int, cc_list: list[str], elem_list: list[str]) -> pandas.core.frame.DataFrame` — 
- **func** `compare_with_previous(conn, df_current: pandas.core.frame.DataFrame, component_code: str, base_year: int | None = None) -> pandas.core.frame.DataFrame` — Если base_year указан и он отличается от текущего bud_year → сравниваем с последним снапшотом base_year.
- **func** `compute_rates(conn, bud_year: int, months_ym: list[str], cc_root: str, kind: str = 'labor') -> pandas.core.frame.DataFrame` — Универсальный расчёт ставки = (Сумма по группе элементов) / (Плановые часы) по каждому ЦЗ.
- **func** `fetch_last_snapshot(conn, bud_year: int, component_code: str) -> pandas.core.frame.DataFrame` — 
- **func** `hours_by_department(conn, months_ym: list[str]) -> pandas.core.frame.DataFrame` — Плановые часы по участку за указанные месяцы:
- **func** `save_rates_snapshot(conn, df_rates: pandas.core.frame.DataFrame, kind: str, replace_year: bool = True) -> int` — Пишет в таблицу снапшота по kind.
### Module `calc.transfers`
- **func** `apply_transfer(conn, bud_year: int, rule_id: int, donorshare: float = 1.0, elem_root: str = 'MFC_PRIM_1', recipients_cc: list[str] | None = None, comment: str = '', created_by: str = None) -> str` — Создает батч и записывает перенос (только дельты).
- **func** `apply_transfer_by_rules(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21', allow_fallback_global: bool = True, comment: str = '', created_by: str = None) -> str` — 
- **func** `create_transfer_batch(conn, bud_year: int, rule_id: int, comment: str = '', created_by: str = None) -> str` — 
- **func** `find_zero_cc(conn, bud_year: int) -> pandas.core.frame.DataFrame` — ЦЗ с часами > 0 и нулевым среднегодовым headcount.
- **func** `get_cc_hours(conn, bud_year: int) -> pandas.core.frame.DataFrame` — 
- **func** `get_opex_by_cc_elem(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1') -> pandas.core.frame.DataFrame` — 
- **func** `get_opex_by_cc_elem_detailed(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21') -> pandas.core.frame.DataFrame` — Суммы OPEX по ЦЗ и КАЖДОМУ elem_id внутри elem_root,
- **func** `get_personnel_year_base(conn, bud_year: int) -> pandas.core.frame.DataFrame` — 
- **func** `plan_transfer(conn, bud_year: int, rule_id: int, donorshare: float = 1.0, elem_root: str = 'MFC_PRIM_1', recipients_cc: list[str] | None = None) -> tuple[pandas.core.frame.DataFrame, pandas.core.frame.DataFrame]` — Возвращает два DF: items_personnel, items_opex.
- **func** `plan_transfer_by_rules(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21', allow_fallback_global: bool = True) -> tuple[pandas.core.frame.DataFrame, pandas.core.frame.DataFrame]` — Строит план переносов:
- **func** `revert_transfer(conn, batch_id: str)` — Откат: просто удаляем дельты; базовые таблицы не трогаем.

## Package `db`
### Module `db.connection`
- **class** `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `contextmanager(func)` — @contextmanager decorator.
- **func** `get_table_info(conn, table: str)` — 
- **func** `normalize_db_path(raw: str | pathlib.Path) -> pathlib.Path` — 
### Module `db.ensure_mo`
- **func** `ensure_mo_tables(conn)` — 
### Module `db.queries`
- **func** `fetch_flat_bom_for_parent(conn, product_id)` — 
- **func** `fetch_labor_cost_unit(conn, product_id)` — 
- **func** `fetch_labor_total(conn, product_id) -> float` — 
- **func** `fetch_materials_from_bom(conn, product_id)` — 
- **func** `fetch_produced_items(conn)` — 
- **func** `search_items_by_tokens(conn, tokens: str | list[str], limit_per_token: int = 20) -> pandas.core.frame.DataFrame` — Ищет items по множеству токенов (артикул/название/код).
### Module `db.schema`
- **func** `add_column_if_missing(conn, table: str, coldef: str)` — 
- **func** `column_exists(conn, table: str, column: str) -> bool` — 
- **func** `ensure_bom_struct_stage_table(conn)` — 
- **func** `ensure_bom_table(conn)` — 
- **func** `ensure_budget_tables(conn)` — Создать таблицы для загрузки и хранения бюджета OPEX.
- **func** `ensure_cc_extra_columns(conn)` — 
- **func** `ensure_depr_opr_cost_tables(conn)` — 
- **func** `ensure_depr_opr_rates(conn)` — 
- **func** `ensure_items_columns(conn)` — 
- **func** `ensure_labor_cost_table(conn)` — 
- **func** `ensure_labor_hours_table(conn)` — 
- **func** `ensure_labor_rates_snapshot_schema(conn)` — 
- **func** `ensure_mo_tables(conn)` — 
- **func** `ensure_ovh_cost_unit_table(conn)` — 
- **func** `ensure_ovh_flat_table(conn)` — 
- **func** `ensure_ovh_tariffs_table(conn)` — 
- **func** `ensure_prod_budget_table(conn)` — 
- **func** `ensure_routing_flat_table(conn)` — 
- **func** `ensure_routing_tree_table(conn)` — 
- **func** `ensure_routings_columns(conn)` — 
- **func** `ensure_run_logging(conn)` — 
- **func** `ensure_schema(conn)` — 
- **func** `ensure_scrap_cost_unit_table(conn)` — 
- **func** `ensure_transfers_schema(conn)` — 
- **func** `ensure_unique_routing_group(conn)` — 
- **func** `get_table_info(conn, table: str)` — 
- **func** `table_exists(conn, name: str) -> bool` — 

## Package `loaders`
### Module `loaders.ccg_wru_loader`
- **class** `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- **func** `ensure_cc_extra_columns(conn)` — 
- **func** `load_cc_structure_twofiles(conn: 'sqlite3.Connection', groups_path: 'str', leaves_path: 'str', sheet_name: 'str | None' = None)` — 
- **func** `parse_groups_from_ccg(df: 'pd.DataFrame') -> 'Tuple[List[Dict], List[Tuple[str, str]]]'` — 
- **func** `parse_leaves_from_list(df: 'pd.DataFrame') -> 'Tuple[List[Dict], List[Tuple[str, str]]]'` — 
- **func** `upsert_cc(conn: 'sqlite3.Connection', nodes: 'List[Dict]', edges: 'List[Tuple[str, str]]')` — 
### Module `loaders.load_cost_structures`
- **class** `Any(*args, **kwargs)` — Special type indicating an unconstrained type.
- **func** `cc_duplicates_report(conn: sqlite3.Connection) -> Dict[str, pandas.core.frame.DataFrame]` — Возвращает диагностические DataFrame:
- **func** `ensure_schema(conn: sqlite3.Connection) -> None` — 
- **func** `main()` — 
- **func** `parse_ccg(df: pandas.core.frame.DataFrame) -> Tuple[List[Dict], List[Tuple[str, str]]]` — Разбор CCG WRU с поддержкой разных имён колонок уровней (Level0/LEVEL 1/L2/Уровень 3 и т.д.).
- **func** `parse_mfc(df: pandas.core.frame.DataFrame, leaf_level: int = 5) -> Tuple[List[Dict], List[Tuple[str, str]]]` — Скольжение по дереву MFCPRIM:
- **func** `quality_checks(conn: sqlite3.Connection) -> Dict[str, int]` — 
- **func** `upsert_cc(conn: sqlite3.Connection, nodes: List[Dict], edges: List[Tuple[str, str]]) -> None` — 
- **func** `upsert_elem(conn, nodes, edges)` — 
### Module `loaders.loader_mo_prices`
- **class** `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- **func** `load_mo_prices(path: str, conn, *, sheet_name: int | str = 0, vendor: Optional[str] = None, effective_from: Optional[str] = None, effective_to: Optional[str] = None, source: Optional[str] = None, preview_only: bool = True)` — 
### Module `loaders.loaders`
- **class** `Decimal(value='0', context=None)` — Construct a new Decimal object. 'value' can be an integer, string, tuple,
- **class** `InvalidOperation(...)` — Base class for arithmetic errors.
- **func** `apply_department_suggestions(conn, df_suggestions)` — Применяет suggested_dept к операциям с UNASSIGNED/пустым департаментом.
- **func** `diagnose_routings(conn)` — Возвращает словарь DataFrame'ов:
- **func** `ensure_bom_struct_stage_table(conn)` — 
- **func** `ensure_items_columns(conn)` — 
- **func** `ensure_ovh_tariffs_table(conn)` — 
- **func** `ensure_prod_budget_table(conn)` — 
- **func** `ensure_routings_columns(conn)` — 
- **func** `load_ovh_tariffs_from_xlsx(conn, xlsx_path: 'str', year: 'int')` — Ожидается 5 колонок:
- **func** `load_prod_budget_from_xlsx(conn, xlsx_path: 'str', article_aliases=None, name_aliases=None)` — Двухстрочный заголовок: склеиваем header=[0,1].
- **func** `normalize_department_code(dept_raw, operation_text: 'str')` — Возвращает (dept_code, source), где source ∈ {"given","inferred","default"}.
- **func** `safe_col(df: pandas.core.frame.DataFrame, name: str, default=None)` — 
- **func** `split_work_type(row) -> 'pd.Series'` — Из "Вид работ" пытается извлечь operation и department.
- **func** `sync_bom_struct_from_stage(conn, spec_codes: 'list[str] | None' = None)` — 
- **func** `to_float_ru(x)` — 
- **func** `upsert_bom_general(conn, df: 'pd.DataFrame', allow_stub_items: 'bool' = False)` — 
- **func** `upsert_bom_struct(conn, df: 'pd.DataFrame', *, default_qty_if_blank: 'float' = 1.0, create_stub_items: 'bool' = True, source_batch: 'str | None' = None)` — 
- **func** `upsert_depr_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- **func** `upsert_items(conn, df: 'pd.DataFrame')` — 
- **func** `upsert_labor_rates_periodic(conn, df: 'pd.DataFrame')` — 
- **func** `upsert_labor_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- **func** `upsert_opr_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- **func** `upsert_rm_prices(conn, df: 'pd.DataFrame', filename: 'str')` — 
- **func** `upsert_routings(conn, df: 'pd.DataFrame')` — Единый routing на один routing_group.
### Module `loaders.opex_loader`
- **func** `commit_opex(conn: sqlite3.Connection, load_id: str, bud_year: int = 2026) -> tuple[int, float]` — 
- **func** `diagnose_opex_stage(conn, load_id: str) -> dict` — 
- **func** `read_opex_excel(path: str, sheet_name: str = 'INPUT') -> pandas.core.frame.DataFrame` — 
- **func** `stage_opex(conn, df: pandas.core.frame.DataFrame, sheet_name: str, treat_empty_as_zero: bool = False)` — 
### Module `loaders.personnel_loader`
- **class** `BinaryIO()` — Typed version of the return of open() in binary mode.
- **func** `load_personnel_monthly_from_excel(conn, xls: 'ExcelInput', bud_year: 'int', sheet: 'Optional[str]' = None, clear_year_first: 'bool' = False, source: 'str' = 'file', note: 'str' = None) -> 'tuple[int, pd.DataFrame]'` — Загружает персонал по месяцам (personnel_monthly) из xlsx формата как в 110_HC_2026.xlsx.
### Module `loaders.rules_loader`
- **func** `ensure_rules_schema(conn: 'sqlite3.Connection') -> 'None'` — 
- **func** `list_rules(conn: 'sqlite3.Connection', q: 'Optional[str]' = None, limit: 'int' = 500) -> 'pd.DataFrame'` — 
- **func** `read_rules_excel(xlsx_path: 'str') -> 'Tuple[pd.DataFrame, pd.DataFrame]'` — Читает оба листа из файла: detail_rules и fallback_rules (если есть).
- **func** `toggle_rule(conn: 'sqlite3.Connection', rule_id: 'int', enabled: 'bool') -> 'None'` — 
- **func** `update_rule_row(conn: 'sqlite3.Connection', row: 'Dict') -> 'None'` — 
- **func** `upsert_rules(conn: 'sqlite3.Connection', df_rules: 'pd.DataFrame', enable: 'bool' = True) -> 'int'` — Массовая запись правил. Если правило с теми же (priority, cost_type, pattern, elem_id) уже есть —
- **func** `validate_rules(conn: 'sqlite3.Connection', df_rules: 'pd.DataFrame') -> 'pd.DataFrame'` — Проверка: elem_id существует в elem_nodes; предупреждения по пустым cost_type и pattern одновременно.
### Module `loaders.updater`
- **class** `datetime(...)` — datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])
- **func** `apply_items_updates(conn, preview_df: 'pd.DataFrame') -> 'int'` — Принимает датафрейм из preview_items_updates; применяет UPDATE только по изменённым полям.
- **func** `apply_std_prices(conn, preview_df: 'pd.DataFrame', source_name: 'str') -> 'int'` — Принимаем датафрейм из preview_std_prices (можно отфильтровать note IS NULL),
- **func** `preview_items_updates(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0) -> 'pd.DataFrame'` — 
- **func** `preview_std_prices(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0, article_col='Material', price_col='STD 2026', uom='ШТ', currency='RUB') -> 'pd.DataFrame'` — 
### Module `loaders.utils`
- **func** `drop_1c_totals(df: pandas.core.frame.DataFrame) -> pandas.core.frame.DataFrame` — 
- **func** `read_1c_txt(file_bytes: bytes, encoding='auto') -> pandas.core.frame.DataFrame` — 
- **func** `read_excel(file_bytes: bytes) -> pandas.core.frame.DataFrame` — 
- **func** `safe_col(df: pandas.core.frame.DataFrame, name: str, default=None)` — 
- **func** `to_float_ru(x)` — 

## Package `app`
### Module `app.app` — _import failed_
### Module `app.init_db`
- **class** `Path(*args, **kwargs)` — PurePath subclass that can make system calls.
- **func** `main()` — 

## Package `ui`
### Module `ui.admin_table_editor`
- **func** `render_table_editor(conn: sqlite3.Connection)` — 
### Module `ui.app_streamlit`
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `ensure_schema(conn)` — 
- **func** `ensure_unique_routing_group(conn)` — 
- **func** `main()` — 
- **func** `normalize_db_path(raw: str | pathlib.Path) -> pathlib.Path` — 
- **func** `render_admin(db_path: str, encoding='auto')` — 
- **func** `render_budget_run(db_path: str)` — 
- **func** `render_bulk_run(db_path: str)` — 
- **func** `render_item_cost(db_path: str)` — 
- **func** `render_updater(db_path: str)` — 
- **func** `run_nsi_refs()` — 

### Package `ui.components`

### Module `ui.components.item_picker`
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `item_paste_picker(db_path: str, key_prefix: str = 'picker', title: str = 'Выбор позиций для расчёта') -> List[str]` — Возвращает список выбранных item_id.
- **func** `search_items_by_tokens(conn, tokens: str | list[str], limit_per_token: int = 20) -> pandas.core.frame.DataFrame` — Ищет items по множеству токенов (артикул/название/код).
### Module `ui.components.set_window_title`
- **func** `set_window_title(title: str)` — 
### Module `ui.views_admin`
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `ensure_mo_tables(conn)` — 
- **func** `ensure_schema(conn)` — 
- **func** `load_mo_prices(path: str, conn, *, sheet_name: int | str = 0, vendor: Optional[str] = None, effective_from: Optional[str] = None, effective_to: Optional[str] = None, source: Optional[str] = None, preview_only: bool = True)` — 
- **func** `materialize_mo_cost_unit(conn, *, on_date: str | None = None)` — Заполняет mo_cost_unit из bom_flat × mo_last_price (на дату или по текущей).
- **func** `read_1c_txt(file_bytes: bytes, encoding='auto') -> pandas.core.frame.DataFrame` — 
- **func** `read_excel(file_bytes: bytes) -> pandas.core.frame.DataFrame` — 
- **func** `render(db_path: str, encoding='auto')` — 
- **func** `sync_bom_struct_from_stage(conn, spec_codes: 'list[str] | None' = None)` — 
- **func** `upsert_bom_general(conn, df: 'pd.DataFrame', allow_stub_items: 'bool' = False)` — 
- **func** `upsert_bom_struct(conn, df: 'pd.DataFrame', *, default_qty_if_blank: 'float' = 1.0, create_stub_items: 'bool' = True, source_batch: 'str | None' = None)` — 
- **func** `upsert_depr_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- **func** `upsert_items(conn, df: 'pd.DataFrame')` — 
- **func** `upsert_labor_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- **func** `upsert_opr_rates_snapshot(conn, df: 'pd.DataFrame', default_year: 'int | None' = None, source: 'str' = 'file')` — 
- **func** `upsert_rm_prices(conn, df: 'pd.DataFrame', filename: 'str')` — 
- **func** `upsert_routings(conn, df: 'pd.DataFrame')` — Единый routing на один routing_group.
### Module `ui.views_budget`
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `ensure_schema(conn)` — 
- **func** `load_prod_budget_from_xlsx(conn, xlsx_path: 'str', article_aliases=None, name_aliases=None)` — Двухстрочный заголовок: склеиваем header=[0,1].
- **func** `normalize_db_path(raw: str | pathlib.Path) -> pathlib.Path` — 
- **func** `render_budget_run(db_path: str)` — 
- **func** `render_rates_calc(conn: sqlite3.Connection)` — 
- **func** `render_transfers(conn)` — 
### Module `ui.views_bulk_run`
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `ensure_schema(conn)` — 
- **func** `item_paste_picker(db_path: str, key_prefix: str = 'picker', title: str = 'Выбор позиций для расчёта') -> List[str]` — Возвращает список выбранных item_id.
- **func** `render(db_path: str)` — 
### Module `ui.views_item_cost`
- **func** `build_unified_compact_table(conn, product_id: str) -> pandas.core.frame.DataFrame` — Компактный вид: суммы по секциям + TOTAL (и доля секции от TOTAL).
- **func** `build_unified_detailed_table(conn, product_id) -> pandas.core.frame.DataFrame` — Расширенный вид по правилам контекста:
- **func** `compute_item_cost_unified(conn, product_id)` — Собирает компактный вид: строки секций + подитоги по секциям + GRAND.
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `item_paste_picker(db_path: str, key_prefix: str = 'picker', title: str = 'Выбор позиций для расчёта') -> List[str]` — Возвращает список выбранных item_id.
- **func** `render(db_path: str)` — 
### Module `ui.views_mo_loader`
- **func** `load_mo_prices(path: str, conn, *, sheet_name: int | str = 0, vendor: Optional[str] = None, effective_from: Optional[str] = None, effective_to: Optional[str] = None, source: Optional[str] = None, preview_only: bool = True)` — 
- **func** `view_mo_loader(conn)` — 
### Module `ui.views_quality`
- **func** `check_bom_components_missing_prices(conn)` — Компоненты из BOM без цены в rm_prices (по последней загрузке).
- **func** `check_bom_unknown_items(conn)` — BOM с компонентами, отсутствующими в items.
- **func** `check_budget_has_nonproduced(conn)` — В prod_budget есть product_id, который в items помечен как is_produced=0.
- **func** `check_items_duplicate_article(conn)` — Дубли артикулов (один article на несколько item_id).
- **func** `check_items_nonproduced_has_routing_or_ovh(conn)` — Непроизводимые (is_produced=0) с заполненными routing_group/ovh_group_code (подозрительно).
- **func** `check_items_produced_missing_routing_or_ovh(conn)` — Производимые (is_produced=1), у которых пусты routing_group или ovh_group_code.
- **func** `check_items_required_fields(conn)` — Пустые/нулевые article, name, uom.
- **func** `check_ovh_groups_missing_tariffs(conn, year: 'int | None' = None)` — Группы из ovh_flat, которых нет в ovh_tariffs (по году; если год None — берём max(year)).
- **func** `check_routing_flat_missing_rates(conn)` — Департаменты из routing_flat без ставки в labor_rates_snapshot.
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `ensure_schema(conn)` — 
- **func** `render(db_path: str)` — 
### Module `ui.views_rates`
- **func** `compare_with_previous(conn, df_current: pandas.core.frame.DataFrame, component_code: str, base_year: int | None = None) -> pandas.core.frame.DataFrame` — Если base_year указан и он отличается от текущего bud_year → сравниваем с последним снапшотом base_year.
- **func** `compute_rates(conn, bud_year: int, months_ym: list[str], cc_root: str, kind: str = 'labor') -> pandas.core.frame.DataFrame` — Универсальный расчёт ставки = (Сумма по группе элементов) / (Плановые часы) по каждому ЦЗ.
- **func** `fetch_last_snapshot(conn, bud_year: int, component_code: str) -> pandas.core.frame.DataFrame` — 
- **func** `render_rates_calc(conn: sqlite3.Connection)` — 
- **func** `save_rates_snapshot(conn, df_rates: pandas.core.frame.DataFrame, kind: str, replace_year: bool = True) -> int` — Пишет в таблицу снапшота по kind.
### Module `ui.views_transfers`
- **func** `apply_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21', comment: 'str' = 'efficiency normalize', created_by: 'str | None' = None) -> 'str'` — 
- **func** `apply_transfer_by_rules(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21', allow_fallback_global: bool = True, comment: str = '', created_by: str = None) -> str` — 
- **func** `compute_efficiency_table(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21') -> 'pd.DataFrame'` — Таблица эффективности по производственным ЦЗ:
- **func** `ensure_transfers_schema(conn)` — 
- **func** `load_personnel_monthly_from_excel(conn, xls: 'ExcelInput', bud_year: 'int', sheet: 'Optional[str]' = None, clear_year_first: 'bool' = False, source: 'str' = 'file', note: 'str' = None) -> 'tuple[int, pd.DataFrame]'` — Загружает персонал по месяцам (personnel_monthly) из xlsx формата как в 110_HC_2026.xlsx.
- **func** `plan_efficiency_normalization(conn, bud_year: 'int', hours_per_person: 'float' = 1972, elem_root: 'str' = 'MFC_PRIM_1', cc_root: 'str' = 'RU1OP1P21') -> 'tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]'` — Строит план нормализации:
- **func** `plan_transfer_by_rules(conn, bud_year: int, elem_root: str = 'MFC_PRIM_1', cc_root: str = 'RU1OP1P21', allow_fallback_global: bool = True) -> tuple[pandas.core.frame.DataFrame, pandas.core.frame.DataFrame]` — Строит план переносов:
- **func** `render_transfers(conn)` — 
- **func** `revert_transfer(conn, batch_id: str)` — Откат: просто удаляем дельты; базовые таблицы не трогаем.
### Module `ui.views_updater`
- **func** `apply_items_updates(conn, preview_df: 'pd.DataFrame') -> 'int'` — Принимает датафрейм из preview_items_updates; применяет UPDATE только по изменённым полям.
- **func** `apply_std_prices(conn, preview_df: 'pd.DataFrame', source_name: 'str') -> 'int'` — Принимаем датафрейм из preview_std_prices (можно отфильтровать note IS NULL),
- **func** `connect_sqlite(p: str | pathlib.Path) -> sqlite3.Connection` — 
- **func** `ensure_schema(conn)` — 
- **func** `preview_items_updates(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0) -> 'pd.DataFrame'` — 
- **func** `preview_std_prices(conn, excel_bytes: 'bytes', sheet: 'str | int' = 0, article_col='Material', price_col='STD 2026', uom='ШТ', currency='RUB') -> 'pd.DataFrame'` — 
- **func** `render(db_path: str)` — 

## Package `config`
### Module `config.settings`
- **class** `Path(*args, **kwargs)` — PurePath subclass that can make system calls.

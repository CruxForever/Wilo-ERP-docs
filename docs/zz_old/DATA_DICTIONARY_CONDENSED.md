# Data dictionary (condensed)

- Tables: **35**, Views: **3**

## `bom`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| parent_item_id | TEXT | 1 |  | 1 |
| component_item_id | TEXT | 1 |  | 2 |
| qty_per_unit | REAL | 1 |  | 0 |
| valid_from | TEXT | 1 |  | 3 |
| valid_to | TEXT | 1 |  | 0 |
| level | INTEGER | 1 |  | 0 |
| path | TEXT | 0 |  | 0 |

## `bom_spec_components`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| spec_code | TEXT | 1 |  | 1 |
| line_no | INTEGER | 1 |  | 2 |
| component_id | TEXT | 1 |  | 0 |
| qty_per_spec | REAL | 1 |  | 0 |
| uom | TEXT | 0 |  | 0 |
| operation | TEXT | 0 |  | 0 |
| stage | TEXT | 0 |  | 0 |
| valid_from | TEXT | 1 | '1900-01-01' | 3 |
| valid_to | TEXT | 1 | '2999-12-31' | 0 |

## `bom_specs`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| spec_code | TEXT | 0 |  | 1 |
| product_id | TEXT | 1 |  | 0 |
| batch_size | REAL | 1 | 1 | 0 |
| batch_uom | TEXT | 0 |  | 0 |
| valid_from | TEXT | 1 | '1900-01-01' | 0 |
| valid_to | TEXT | 1 | '2999-12-31' | 0 |
| is_default | INTEGER | 1 | 1 | 0 |

## `dep_cc_map`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| department_code | TEXT | 0 |  | 1 |
| cc_id | TEXT | 1 |  | 0 |

## `depr_cost_unit`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 1 |  | 1 |
| department_code | TEXT | 1 |  | 2 |
| hours_total | REAL | 1 |  | 0 |
| rate_per_hour | REAL | 0 |  | 0 |
| currency | TEXT | 0 |  | 0 |
| cost_total | REAL | 0 |  | 0 |

## `depr_cost_unit_total`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 0 |  | 1 |
| cost_total | REAL | 0 |  | 0 |

## `depr_rates_snapshot`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| department_code | TEXT | 0 |  | 0 |
| cc_id | TEXT | 0 |  | 0 |
| rate_per_hour | REAL | 1 |  | 0 |
| hours_year | REAL | 0 |  | 0 |
| personnel_cost_year | REAL | 0 |  | 0 |
| bud_year | INTEGER | 0 |  | 0 |
| currency | TEXT | 1 | 'RUB' | 0 |
| source | TEXT | 0 |  | 0 |
| calc_at | TEXT | 0 |  | 0 |
| loaded_at | TEXT | 0 | datetime('now') | 0 |

## `items`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| item_id | TEXT | 0 |  | 1 |
| article | TEXT | 0 |  | 0 |
| name | TEXT | 0 |  | 0 |
| uom | TEXT | 0 |  | 0 |
| is_produced | INTEGER | 1 | 0 | 0 |

## `labor_rates`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| period | TEXT | 1 |  | 1 |
| department_code | TEXT | 1 |  | 2 |
| rate_per_hour | REAL | 1 |  | 0 |
| currency | TEXT | 1 | 'RUB' | 0 |

## `labor_rates_snapshot`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| department_code | TEXT | 0 |  | 0 |
| cc_id | TEXT | 0 |  | 0 |
| rate_per_hour | REAL | 0 |  | 0 |
| hours_year | REAL | 0 |  | 0 |
| personnel_cost_year | REAL | 0 |  | 0 |
| bud_year | INTEGER | 0 |  | 0 |
| source | TEXT | 0 |  | 0 |
| calc_at | TEXT | 0 |  | 0 |
| currency | TEXT | 0 |  | 0 |

## `mo_catalog`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| before_item_id | TEXT | 1 |  | 0 |
| after_item_id | TEXT | 1 |  | 0 |
| is_active | INTEGER | 1 | 1 | 0 |
| source | TEXT | 0 |  | 0 |
| loaded_at | TEXT | 1 |  | 0 |

## `mo_cost_unit`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 1 |  | 1 |
| component_item_id | TEXT | 1 |  | 2 |
| qty_per_unit | REAL | 1 |  | 0 |
| price | REAL | 1 |  | 0 |
| amount | REAL | 1 |  | 0 |
| currency | TEXT | 1 | 'RUB' | 0 |
| computed_at | TEXT | 1 |  | 0 |

## `mo_prices_history`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| after_item_id | TEXT | 1 |  | 0 |
| price | REAL | 1 |  | 0 |
| currency | TEXT | 1 | 'RUB' | 0 |
| vendor | TEXT | 0 |  | 0 |
| effective_from | TEXT | 0 |  | 0 |
| effective_to | TEXT | 0 |  | 0 |
| source | TEXT | 0 |  | 0 |
| loaded_at | TEXT | 1 |  | 0 |

## `opex_budget`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| id | INTEGER | 0 |  | 1 |
| load_id | TEXT | 1 |  | 0 |
| cc_id | TEXT | 1 |  | 0 |
| elem_id | TEXT | 1 |  | 0 |
| bud_year | INTEGER | 1 |  | 0 |
| amount | REAL | 1 |  | 0 |
| text_note | TEXT | 0 |  | 0 |
| comments | TEXT | 0 |  | 0 |
| supplier_text | TEXT | 0 |  | 0 |
| source_sheet | TEXT | 0 |  | 0 |
| created_at | INTEGER | 1 | strftime('%s','now') | 0 |

## `opex_staging`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| id | INTEGER | 0 |  | 1 |
| load_id | TEXT | 1 |  | 0 |
| sheet_name | TEXT | 0 |  | 0 |
| cc_id | TEXT | 0 |  | 0 |
| cost_type | TEXT | 0 |  | 0 |
| account_descr | TEXT | 0 |  | 0 |
| bud_2026 | REAL | 0 |  | 0 |
| text_note | TEXT | 0 |  | 0 |
| comments | TEXT | 0 |  | 0 |
| supplier_text | TEXT | 0 |  | 0 |
| mapped_elem_id | TEXT | 0 |  | 0 |
| missing_cc | INTEGER | 1 | 0 | 0 |
| unmapped_elem | INTEGER | 1 | 0 | 0 |
| bad_amount | INTEGER | 1 | 0 | 0 |
| dup_candidate | INTEGER | 1 | 0 | 0 |
| created_at | INTEGER | 1 | strftime('%s','now') | 0 |

## `opr_cost_unit`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 1 |  | 1 |
| department_code | TEXT | 1 |  | 2 |
| hours_total | REAL | 1 |  | 0 |
| rate_per_hour | REAL | 0 |  | 0 |
| currency | TEXT | 0 |  | 0 |
| cost_total | REAL | 0 |  | 0 |

## `opr_cost_unit_total`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 0 |  | 1 |
| cost_total | REAL | 0 |  | 0 |

## `opr_rates_snapshot`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| department_code | TEXT | 0 |  | 0 |
| cc_id | TEXT | 0 |  | 0 |
| rate_per_hour | REAL | 1 |  | 0 |
| hours_year | REAL | 0 |  | 0 |
| personnel_cost_year | REAL | 0 |  | 0 |
| bud_year | INTEGER | 0 |  | 0 |
| currency | TEXT | 1 | 'RUB' | 0 |
| source | TEXT | 0 |  | 0 |
| calc_at | TEXT | 0 |  | 0 |
| loaded_at | TEXT | 0 | datetime('now') | 0 |

## `ovh_cost_unit`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 0 |  | 1 |
| depr_opr_cost | REAL | 1 | 0.0 | 0 |
| log_cost | REAL | 1 | 0.0 | 0 |
| adm_cost | REAL | 1 | 0.0 | 0 |

## `ovh_flat`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 1 |  | 1 |
| overhead_group | TEXT | 1 |  | 2 |
| mat_cost | REAL | 1 | 0.0 | 0 |

## `ovh_tariffs`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| overhead_group | TEXT | 1 |  | 1 |
| year | INTEGER | 1 |  | 2 |
| scrap_share | REAL | 0 |  | 0 |
| depr_opr_share | REAL | 0 |  | 0 |
| log_share | REAL | 0 |  | 0 |
| adm_share | REAL | 0 |  | 0 |

## `personnel_monthly`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| cc_id | TEXT | 1 |  | 1 |
| ym | TEXT | 1 |  | 2 |
| headcount | REAL | 1 |  | 0 |
| source | TEXT | 0 |  | 0 |
| note | TEXT | 0 |  | 0 |
| loaded_at | TEXT | 0 | datetime('now') | 0 |

## `prod_budget`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 1 |  | 1 |
| month_code | TEXT | 1 |  | 2 |
| qty | REAL | 1 | 0 | 0 |

## `rm_prices`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| item_code | TEXT | 1 |  | 1 |
| article | TEXT | 0 |  | 0 |
| uom | TEXT | 0 |  | 0 |
| price | REAL | 1 |  | 0 |
| currency | TEXT | 1 | 'RUB' | 2 |
| source | TEXT | 0 |  | 0 |
| loaded_at | TEXT | 0 | datetime('now') | 0 |

## `routing_operations`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| routing_op_id | INTEGER | 0 |  | 1 |
| routing_id | INTEGER | 1 |  | 0 |
| seq | INTEGER | 1 |  | 0 |
| operation | TEXT | 1 |  | 0 |
| department | TEXT | 0 |  | 0 |
| hours | REAL | 1 | 0 | 0 |

## `routing_tree`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| root_product_id | TEXT | 0 |  | 1 |
| node_product_id | TEXT | 0 |  | 2 |
| level | INTEGER | 0 |  | 0 |
| qty_per_unit | REAL | 0 |  | 0 |
| path | TEXT | 0 |  | 0 |
| routing_id | TEXT | 0 |  | 0 |
| routing_group | TEXT | 0 |  | 0 |
| routing_name | TEXT | 0 |  | 0 |

## `routings`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| routing_id | INTEGER | 0 |  | 1 |
| routing_group | TEXT | 1 |  | 0 |
| spec_code | TEXT | 0 |  | 0 |
| item_id | TEXT | 0 |  | 0 |

## `run_history`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| run_id | TEXT | 0 |  | 1 |
| started_at | TEXT | 0 |  | 0 |
| ended_at | TEXT | 0 |  | 0 |
| scope | TEXT | 0 |  | 0 |
| params_json | TEXT | 0 |  | 0 |
| status | TEXT | 0 |  | 0 |

## `run_log`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| run_id | TEXT | 0 |  | 0 |
| step | TEXT | 0 |  | 0 |
| product_id | TEXT | 0 |  | 0 |
| level | TEXT | 0 |  | 0 |
| msg | TEXT | 0 |  | 0 |
| extra_json | TEXT | 0 |  | 0 |
| ts | TEXT | 0 |  | 0 |

## `scrap_cost_unit`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| product_id | TEXT | 0 |  | 1 |
| scrap_cost | REAL | 1 | 0.0 | 0 |

## `sqlite_sequence`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| name |  | 0 |  | 0 |
| seq |  | 0 |  | 0 |

## `transfer_batches`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| batch_id | TEXT | 0 |  | 1 |
| bud_year | INTEGER | 1 |  | 0 |
| rule_id | INTEGER | 1 |  | 0 |
| created_at | TEXT | 0 | datetime('now') | 0 |
| created_by | TEXT | 0 |  | 0 |
| comment | TEXT | 0 |  | 0 |

## `transfer_opex_items`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| batch_id | TEXT | 1 |  | 1 |
| from_cc_id | TEXT | 1 |  | 2 |
| to_cc_id | TEXT | 1 |  | 3 |
| to_elem_id | TEXT | 0 |  | 0 |
| elem_id | TEXT | 1 |  | 4 |
| amount_delta | REAL | 1 |  | 0 |

## `transfer_personnel_items`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| id | INTEGER | 0 |  | 1 |
| batch_id | TEXT | 1 |  | 0 |
| from_cc_id | TEXT | 0 |  | 0 |
| to_cc_id | TEXT | 1 |  | 0 |
| headcount_delta | REAL | 1 |  | 0 |

## `transfer_rules`
| column | type | notnull | default | pk |
|--------|------|:------:|---------|:--:|
| rule_id | INTEGER | 0 |  | 1 |
| name | TEXT | 1 |  | 0 |
| donor_cc_id | TEXT | 1 |  | 0 |
| enabled | INTEGER | 1 | 1 | 0 |
| scope | TEXT | 0 | 'direct_personnel' | 0 |
| recipient_cc_id | TEXT | 0 |  | 0 |

## Views

- `mo_last_price_current`
- `personnel_yearly`
- `personnel_yearly_effective`
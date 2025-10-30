# DATA_DICTIONARY

## elem_nodes
| column    | type  | note                                  |
|-----------|-------|---------------------------------------|
| elem_id   | TEXT  | PK                                    |
| name      | TEXT  |                                       |
| level_no  | INT   | реальный номер уровня из Excel        |
| node_type | TEXT  | 'GROUP' / 'LEAF'                      |
| parent_id | TEXT  | заполняется для удобства/контроля     |

## elem_edges
| column   | type | note                     |
|----------|------|--------------------------|
| parent_id| TEXT | FK → elem_nodes.elem_id  |
| child_id | TEXT | FK → elem_nodes.elem_id  |

Уникальный ключ: (parent_id, child_id). У листьев ровно один родитель.

## cc_nodes
| column       | type | note                                |
|--------------|------|-------------------------------------|
| cc_id        | TEXT | PK                                  |
| name         | TEXT |                                     |
| level_no     | INT  | позиция колонки (1..6 или 7 для leaf)|
| node_type    | TEXT | 'GROUP' / 'LEAF'                    |
| parent_id    | TEXT |                                     |
| company_code | TEXT | из файла CCG                        |
| ext_code     | TEXT | резерв                              |
| person       | TEXT | из файла CCG                        |

## cc_edges
Аналогично `elem_edges` (parent_id, child_id).

## elem_map_rules
| column                 | type   | note                                                |
|------------------------|--------|-----------------------------------------------------|
| rule_id (PK)           | INT    | AUTOINCREMENT                                       |
| enabled                | INT    | 1/0                                                |
| priority               | INT    | меньше — важнее (напр., 100 детальнее 500)         |
| cost_type              | TEXT   | фильтр по Cost type                                 |
| account_descr_pattern  | TEXT   | шаблон LIKE для Account descr                       |
| elem_id                | TEXT   | целевой элемент                                     |
| weight                 | REAL   | доля/вес строки (по умолчанию 1.0)                  |
| valid_from / valid_to  | TEXT   | YYYY-MM-DD                                          |
| note                   | TEXT   | комментарий                                         |
| created_at / updated_at| INT    | unix time                                           |

Индексы: (priority, enabled), cost_type, account_descr_pattern, elem_id.

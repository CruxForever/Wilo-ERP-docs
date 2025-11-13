# Иерархия элементов затрат

> Сгенерировано 2025-11-13 09:16 из `costcalc.db`

## Верхний уровень
- [MFC_PRIM - MFC - Total primary costs](level_00/MFC_PRIM.md)

## Как обновить

```bash
python tools/gen_elem_docs.py
```

Данные берутся из таблиц `elem_nodes` и `elem_edges`. Листовые элементы отображаются прямо в карточке родительской группы.
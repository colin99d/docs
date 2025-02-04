---
title: clean
description: OpenBB Terminal Function
---

# Forecasting

## clean

### Description: 

Clean a dataset by filling and dropping NaN values.

### Usage: 
```python
usage: clean [-f {rfill,cfill,rbfill,cbfill,rffill,bffill}] [--drop {rdrop,cdrop}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| fill | The method of filling NaNs. This has options to fill rows (rfill, rbfill, rffill) or fill columns (cfill, cbfill, cffill). Furthermore, it has the option to forward fill and backward fill (up to --limit) which refer to how many rows/columns can be set equal to the last non-NaN value | None | False | rfill, cfill, rbfill, cbfill, rffill, bffill |
| drop | The method of dropping NaNs. This either has the option rdrop (drop rows that contain NaNs) or cdrop (drop columns that contain NaNs) | None | False | rdrop, cdrop |


## Examples

```python

(🦋) /forecast/ $ show TSLA

TSLA dataset has shape (row, column): (611, 7)

                    Dataset TSLA | Showing 10 of 611 rows
┏━━━┳━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━┓
┃   ┃ date       ┃ open   ┃ high   ┃ low    ┃ close  ┃ adj_close ┃ volume    ┃
┡━━━╇━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━┩
│ 0 │ 2020-01-02 │ 84.90  │ 86.14  │ 84.34  │ 86.05  │ 86.05     │ 47660500  │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 1 │ 2020-01-03 │ 88.10  │ 90.80  │ 87.38  │ 88.60  │ 88.60     │ 88892500  │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 2 │ 2020-01-06 │ 88.09  │ 90.31  │ 88.00  │ 90.31  │ 90.31     │ 50665000  │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 3 │ 2020-01-07 │ 92.28  │ 94.33  │ 90.67  │ 93.81  │ 93.81     │ 89410500  │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 4 │ 2020-01-08 │ 94.74  │ 99.70  │ 93.65  │ 98.43  │ 98.43     │ 155721500 │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 5 │ 2020-01-09 │ 99.42  │ 99.76  │ 94.57  │ 96.27  │ 96.27     │ 142202000 │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 6 │ 2020-01-10 │ 96.36  │ 96.99  │ 94.74  │ 95.63  │ 95.63     │ 64797500  │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 7 │ 2020-01-13 │ 98.70  │ 105.13 │ 98.40  │ 104.97 │ 104.97    │ 132588000 │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 8 │ 2020-01-14 │ 108.85 │ 109.48 │ 104.98 │ 107.58 │ 107.58    │ 144981000 │
├───┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┤
│ 9 │ 2020-01-15 │ 105.95 │ 107.57 │ 103.36 │ 103.70 │ 103.70    │ 86844000  │
└───┴────────────┴────────┴────────┴────────┴────────┴───────────┴───────────┘


```


---
title: signal
description: OpenBB Terminal Function
---

# Forecasting

## signal

### Description: 

Add price signal to dataset based on closing price. 1 if the signal is that short term price will go up as compared to the long term. 0 if the signal is that short term price will go down as compared to the long term.

### Usage: 
```python
usage: signal
```



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

(🦋) /forecast/ $ signal TSLA
Successfully added 'Price Signal' to 'TSLA' dataset

(🦋) /forecast/ $ show TSLA -l 30
TSLA dataset has shape (row, column): (611, 8)

                         Dataset TSLA | Showing 30 of 611 rows
┏━━━━┳━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━┓
┃    ┃ date       ┃ open   ┃ high   ┃ low    ┃ close  ┃ adj_close ┃ volume    ┃ signal ┃
┡━━━━╇━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━┩
│ 0  │ 2020-01-02 │ 84.90  │ 86.14  │ 84.34  │ 86.05  │ 86.05     │ 47660500  │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 1  │ 2020-01-03 │ 88.10  │ 90.80  │ 87.38  │ 88.60  │ 88.60     │ 88892500  │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 2  │ 2020-01-06 │ 88.09  │ 90.31  │ 88.00  │ 90.31  │ 90.31     │ 50665000  │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 3  │ 2020-01-07 │ 92.28  │ 94.33  │ 90.67  │ 93.81  │ 93.81     │ 89410500  │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 4  │ 2020-01-08 │ 94.74  │ 99.70  │ 93.65  │ 98.43  │ 98.43     │ 155721500 │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 5  │ 2020-01-09 │ 99.42  │ 99.76  │ 94.57  │ 96.27  │ 96.27     │ 142202000 │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 6  │ 2020-01-10 │ 96.36  │ 96.99  │ 94.74  │ 95.63  │ 95.63     │ 64797500  │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 7  │ 2020-01-13 │ 98.70  │ 105.13 │ 98.40  │ 104.97 │ 104.97    │ 132588000 │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 8  │ 2020-01-14 │ 108.85 │ 109.48 │ 104.98 │ 107.58 │ 107.58    │ 144981000 │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 9  │ 2020-01-15 │ 105.95 │ 107.57 │ 103.36 │ 103.70 │ 103.70    │ 86844000  │ 0.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 10 │ 2020-01-16 │ 98.75  │ 102.89 │ 98.43  │ 102.70 │ 102.70    │ 108683500 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 11 │ 2020-01-17 │ 101.52 │ 103.13 │ 100.63 │ 102.10 │ 102.10    │ 68145500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 12 │ 2020-01-21 │ 106.05 │ 109.72 │ 105.68 │ 109.44 │ 109.44    │ 89017500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 13 │ 2020-01-22 │ 114.38 │ 118.90 │ 111.82 │ 113.91 │ 113.91    │ 156845000 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 14 │ 2020-01-23 │ 112.85 │ 116.40 │ 111.12 │ 114.44 │ 114.44    │ 98255000  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 15 │ 2020-01-24 │ 114.13 │ 114.77 │ 110.85 │ 112.96 │ 112.96    │ 71768000  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 16 │ 2020-01-27 │ 108.40 │ 112.89 │ 107.86 │ 111.60 │ 111.60    │ 68040500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 17 │ 2020-01-28 │ 113.70 │ 115.36 │ 111.62 │ 113.38 │ 113.38    │ 58942500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 18 │ 2020-01-29 │ 115.14 │ 117.96 │ 113.49 │ 116.20 │ 116.20    │ 89007500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 19 │ 2020-01-30 │ 126.48 │ 130.18 │ 123.60 │ 128.16 │ 128.16    │ 145028500 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 20 │ 2020-01-31 │ 128.00 │ 130.60 │ 126.50 │ 130.11 │ 130.11    │ 78596500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 21 │ 2020-02-03 │ 134.74 │ 157.23 │ 134.70 │ 156.00 │ 156.00    │ 235325000 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 22 │ 2020-02-04 │ 176.59 │ 193.80 │ 166.78 │ 177.41 │ 177.41    │ 304694000 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 23 │ 2020-02-05 │ 164.65 │ 169.20 │ 140.82 │ 146.94 │ 146.94    │ 242119000 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 24 │ 2020-02-06 │ 139.98 │ 159.17 │ 137.40 │ 149.79 │ 149.79    │ 199404000 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 25 │ 2020-02-07 │ 146.11 │ 153.95 │ 146.00 │ 149.61 │ 149.61    │ 85317500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 26 │ 2020-02-10 │ 160.00 │ 164.00 │ 150.48 │ 154.26 │ 154.26    │ 123446000 │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 27 │ 2020-02-11 │ 153.76 │ 156.70 │ 151.60 │ 154.88 │ 154.88    │ 58487500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 28 │ 2020-02-12 │ 155.57 │ 157.95 │ 152.67 │ 153.46 │ 153.46    │ 60112500  │ 1.00   │
├────┼────────────┼────────┼────────┼────────┼────────┼───────────┼───────────┼────────┤
│ 29 │ 2020-02-13 │ 148.37 │ 163.60 │ 147.00 │ 160.80 │ 160.80    │ 131446500 │ 1.00   │
└────┴────────────┴────────┴────────┴────────┴────────┴───────────┴───────────┴────────┘

```

---
title: load
description: OpenBB Terminal Function
---

# Econometrics

## load

### Description: 

Load dataset (from previous export, custom imports or StatsModels).

### Usage: 
```python
usage: load [-f FILE] [-a ALIAS] [-e]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| file | File to load data in (can be custom import, may have been exported before or can be from Statsmodels) | None | False | None |
| alias | Alias name to give to the dataset | None | False | None |
| examples | Use this argument to show examples of Statsmodels to load in. See: https://www.statsmodels.org/devel/datasets/index.html | None | False | None |


## Examples

```python

2022 Feb 28, 04:19 (✨) /econometrics/ $ load MSFT_20220221_140503.xlsx -a msft

2022 Feb 28, 04:20 (✨) /econometrics/ $ show msft
                                         msft
┏━━━┳━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┓
┃   ┃ date                ┃ open   ┃ high   ┃ low    ┃ close  ┃ adj_close ┃ volume   ┃
┡━━━╇━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━┩
│ 0 │ 2019-02-19 00:00:00 │ 107.79 │ 108.66 │ 107.78 │ 108.17 │ 104.38    │ 18038500 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 1 │ 2019-02-20 00:00:00 │ 107.86 │ 107.94 │ 106.29 │ 107.15 │ 103.84    │ 21607700 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 2 │ 2019-02-21 00:00:00 │ 106.90 │ 109.48 │ 106.87 │ 109.41 │ 106.03    │ 29063200 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 3 │ 2019-02-22 00:00:00 │ 110.05 │ 111.20 │ 109.82 │ 110.97 │ 107.54    │ 27763200 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 4 │ 2019-02-25 00:00:00 │ 111.76 │ 112.18 │ 111.26 │ 111.59 │ 108.14    │ 23750600 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 5 │ 2019-02-26 00:00:00 │ 111.26 │ 113.24 │ 111.17 │ 112.36 │ 108.89    │ 21536700 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 6 │ 2019-02-27 00:00:00 │ 111.69 │ 112.36 │ 110.88 │ 112.17 │ 108.71    │ 21487100 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 7 │ 2019-02-28 00:00:00 │ 112.04 │ 112.88 │ 111.73 │ 112.03 │ 108.57    │ 29083900 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 8 │ 2019-03-01 00:00:00 │ 112.89 │ 113.02 │ 111.67 │ 112.53 │ 109.06    │ 23501200 │
├───┼─────────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ 9 │ 2019-03-04 00:00:00 │ 113.02 │ 113.25 │ 110.80 │ 112.26 │ 108.79    │ 26608000 │
└───┴─────────────────────┴────────┴────────┴────────┴────────┴───────────┴──────────┘

```


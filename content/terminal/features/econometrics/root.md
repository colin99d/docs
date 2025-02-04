---
title: root
description: OpenBB Terminal Function
---

# Econometrics

## root

### Description: 

Show unit root tests of a column of a dataset

### Usage: 
```python
usage: root -v {} [-r {c,ct,ctt,n}] [-k {c,ct}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| column | The column and name of the database you want test unit root for | None | True |  |
| fuller_reg | Type of regression. Can be 'c','ct','ctt','nc'. c - Constant and t - trend order | c | False | c, ct, ctt, n |
| kpss_reg | Type of regression. Can be 'c', 'ct'. c - Constant and t - trend order | c | False | c, ct |


## Examples

```python

2022 Jun 01, 06:47 (🦋) /econometrics/ $ load fair

2022 Jun 01, 06:47 (🦋) /econometrics/ $ root fair.yrs_married

Unitroot from dataset 'fair of 'yrs_married'
┏━━━━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━┓
┃                ┃ ADF      ┃ KPSS  ┃
┡━━━━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━┩
│ Test Statistic │ -8.08    │ 7.01  │
├────────────────┼──────────┼───────┤
│ P-Value        │ 0.00     │ 0.01  │
├────────────────┼──────────┼───────┤
│ NLags          │ 34.00    │ 26.00 │
├────────────────┼──────────┼───────┤
│ Nobs           │ 6331.00  │ 0.00  │
├────────────────┼──────────┼───────┤
│ ICBest         │ 42958.72 │ 0.00  │
└────────────────┴──────────┴───────┘

```


---
title: seasonalnaive
description: OpenBB Terminal Function
---

# Forecasting

## seasonalnaive

### Description: 

Perform SeasonalNaive forecasting: https://nixtla.github.io/statsforecast/models.html#seasonalnaive

### Usage: 
```python
usage: seasonalnaive
```



## Examples

```python

2022 Nov 07, 19:24 (🦋) /stocks/ $ forecast

2022 Nov 07, 19:24 (🦋) /forecast/ $ seasonalnaive AAPL

Cross Validation Time Series 1: 100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:02<00:00, 47.75it/s]
Forecast: 100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 1/1 [00:00<00:00, 14873.42it/s]
SeasonalNaive obtains MAPE: 4.26% 


   Actual price: 138.38    
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime   ┃ Prediction ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-11-07 │ 138.38     │
├────────────┼────────────┤
│ 2022-11-08 │ 144.80     │
├────────────┼────────────┤
│ 2022-11-09 │ 155.74     │
├────────────┼────────────┤
│ 2022-11-10 │ 153.34     │
├────────────┼────────────┤
│ 2022-11-11 │ 150.65     │
└────────────┴────────────┘

```


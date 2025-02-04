---
title: rwd
description: OpenBB Terminal Function
---

# Forecasting

## rwd

### Description: 

Perform Random Walk with Drift forecast: https://nixtla.github.io/statsforecast/models.html#randomwalkwithdrift

### Usage: 
```python
usage: rwd
```



## Examples

```python

2022 Nov 07, 18:43 (🦋) /stocks/ $ load AAPL

2022 Nov 07, 18:43 (🦋) /stocks/ $ forecast

2022 Nov 07, 18:43 (🦋) /forecast/ $ rwd AAPL

Cross Validation Time Series 1: 100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:02<00:00, 49.97it/s]
Forecast: 100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 1/1 [00:00<00:00, 15887.52it/s]
RWD obtains MAPE: 2.98% 


   Actual price: 138.38    
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime   ┃ Prediction ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-11-07 │ 138.47     │
├────────────┼────────────┤
│ 2022-11-08 │ 138.57     │
├────────────┼────────────┤
│ 2022-11-09 │ 138.66     │
├────────────┼────────────┤
│ 2022-11-10 │ 138.76     │
├────────────┼────────────┤
│ 2022-11-11 │ 138.85     │
└────────────┴────────────┘

```


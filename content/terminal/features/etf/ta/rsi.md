---
title: rsi
description: OpenBB Terminal Function
---

# Technical Analysis

## rsi

### Description: 

The Relative Strength Index (RSI) calculates a ratio of the recent upward price movements to the absolute price movement. The RSI ranges from 0 to 100. The RSI is interpreted as an overbought/oversold indicator when the value is over 70/below 30. You can also look for divergence with price. If the price is making new highs/lows, and the RSI is not, it indicates a reversal.

### Usage: 
```python
usage: rsi [-l N_LENGTH] [-s N_SCALAR] [-d N_DRIFT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | length | 14 | False | None |
| n_scalar | scalar | 100 | False | None |
| n_drift | drift | 1 | False | None |



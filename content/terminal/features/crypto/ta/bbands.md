---
title: bbands
description: OpenBB Terminal Function
---

# Technical Analysis

## bbands

### Description: 

Bollinger Bands consist of three lines. The middle band is a simple moving average (generally 20 periods) of the typical price (TP). The upper and lower bands are F standard deviations (generally 2) above and below the middle band. The bands widen and narrow when the volatility of the price is higher or lower, respectively. Bollinger Bands do not, in themselves, generate buy or sell signals; they are an indicator of overbought or oversold conditions. When the price is near the upper or lower band it indicates that a reversal may be imminent. The middle band becomes a support or resistance level. The upper and lower bands can also be interpreted as price targets. When the price bounces off of the lower band and crosses the middle band, then the upper band becomes the price target.

### Usage: 
```python
usage: bbands [-l N_LENGTH] [-s N_STD] [-m {ema,sma,wma,hma,zlma}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | length | 15 | False | None |
| n_std | std | 2 | False | None |
| s_mamode | mamode | sma | False | ema, sma, wma, hma, zlma |



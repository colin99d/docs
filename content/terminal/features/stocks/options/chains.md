---
title: chains
description: OpenBB Terminal Function
---

# Options

## chains

### Description: 

Display option chains

### Usage: 
```python
usage: chains [-c] [-p] [-m MIN_SP] [-M MAX_SP] [-d TO_DISPLAY]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| calls | Flag to show calls only | None | False | None |
| puts | Flag to show puts only | None | False | None |
| min_sp | minimum strike price to consider. | -1 | False | None |
| max_sp | maximum strike price to consider. | -1 | False | None |
| to_display | (tradier only) Columns to look at. Columns can be: bid, ask, strike, bidsize, asksize, volume, open_interest, delta, gamma, theta, vega, ask_iv, bid_iv, mid_iv. E.g. 'bid,ask,strike' | mid_iv, vega, delta, gamma, theta, volume, open_interest, bid, ask | False | None |



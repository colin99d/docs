---
title: mcapdom
description: OpenBB Terminal Function
---

# Due Diligence

## mcapdom

### Description: 

Display asset's percentage share of total crypto circulating market cap [Source: https://messari.io]

### Usage: 
```python
usage: mcapdom [-i {5m,15m,30m,1h,1d,1w}] [-s START] [-end END]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| interval | Frequency interval. Default: 1d | 1d | False | 5m, 15m, 30m, 1h, 1d, 1w |
| start | Initial date. Default: A year ago | 2021-11-16 | False | None |
| end | End date. Default: Today | 2022-11-16 | False | None |



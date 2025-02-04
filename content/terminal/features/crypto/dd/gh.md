---
title: gh
description: OpenBB Terminal Function
---

# Due Diligence

## gh

### Description: 

Display github activity over time for a given coin. Github activity includes the following actions: creating a Pull Request, an Issue, commenting on an issue / PR, and many more. See detailed definition at https://academy.santiment.net/metrics/development-activity/ [Source: https://santiment.net/]

### Usage: 
```python
usage: gh [-i INTERVAL] [-d DEV] [-s START] [-end END]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| interval | Frequency interval. Default: 1d | 1d | False | None |
| dev | Filter only for development activity. Default: False | None | False | None |
| start | Initial date. Default: A year ago | 2021-11-16 | False | None |
| end | End date. Default: Today | 2022-11-16 | False | None |



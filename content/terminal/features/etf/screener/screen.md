---
title: screen
description: OpenBB Terminal Function
---

# Screener

## screen

### Description: 

Screens ETFS from a personal scraping github repository. Data scraped from stockanalysis.com

### Usage: 
```python
usage: screen [-l LIMIT] [-s {Assets,NAV,Expense,PE,SharesOut,Div,DivYield,Volume,Open,PrevClose,YrLow,YrHigh,Beta,N_Hold}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of etfs to display | 10 | False | None |
| sortby | Sort by given column. Default: Assets | Assets | False | Assets, NAV, Expense, PE, SharesOut, Div, DivYield, Volume, Open, PrevClose, YrLow, YrHigh, Beta, N_Hold |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |



---
title: balance
description: OpenBB Terminal Function
---

# OnChain

## balance

### Description: 

Display info about tokens on given ethereum blockchain balance. [Source: Ethplorer]

### Usage: 
```python
usage: balance [-l LIMIT] [-s {index,balance,tokenName,tokenSymbol}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | display N number records | 10 | False | None |
| sortby | Sort by given column. Default: index | index | False | index, balance, tokenName, tokenSymbol |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


---
title: holders
description: OpenBB Terminal Function
---

# OnChain

## holders

### Description: 

Display top ERC20 token holders: e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 [Source: Ethplorer]

### Usage: 
```python
usage: holders [-l LIMIT] [-s {balance,share}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | display N number records | 10 | False | None |
| sortby | Sort by given column. Default: share | share | False | balance, share |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |



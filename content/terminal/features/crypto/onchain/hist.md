---
title: hist
description: OpenBB Terminal Function
---

# OnChain

## hist

### Description: 

Display history for given ethereum blockchain balance. e.g. 0x3cD751E6b0078Be393132286c442345e5DC49699 [Source: Ethplorer]

### Usage: 
```python
usage: hist [-l LIMIT] [-s {timestamp,transactionHash,token,value}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | display N number records | 10 | False | None |
| sortby | Sort by given column. Default: timestamp | timestamp | False | timestamp, transactionHash, token, value |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


---
title: rmv
description: OpenBB Terminal Function
---

# Hedge

## rmv

### Description: 

Remove one of the options to be shown in the hedge.

### Usage: 
```python
usage: rmv [-o OPTION [OPTION ...]] [-a]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| option | index of the option to remove | None | False | None |
| all | remove all of the options | None | False | None |


## Examples

```python

2022 May 10, 09:32 (🦋) /stocks/options/hedge/ $ rmv Option A
          Current Option Positions           
┏━━━━━━┳━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━┓
┃ Type ┃ Hold ┃ Strike ┃ Implied Volatility ┃
┡━━━━━━╇━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━┩
│ Call │ Long │ 155.00 │ 0.06               │
└──────┴──────┴────────┴────────────────────┘

```


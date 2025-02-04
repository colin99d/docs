---
title: plot
description: OpenBB Terminal Function
---

# Options

## plot

### Description: 

Shows a plot for the given x and y variables

### Usage: 
```python
usage: plot [-p] [-x {ltd,s,lp,b,a,c,pc,v,oi,iv}] [-y {ltd,s,lp,b,a,c,pc,v,oi,iv}] [-c {smile}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| put | Shows puts instead of calls | None | False | None |
| x | ltd- last trade date, s- strike, lp- last price, b- bid, a- ask,c- change, pc- percent change, v- volume, oi- open interest, iv- implied volatility | s | False | ltd, s, lp, b, a, c, pc, v, oi, iv |
| y | ltd- last trade date, s- strike, lp- last price, b- bid, a- ask,c- change, pc- percent change, v- volume, oi- open interest, iv- implied volatility | iv | False | ltd, s, lp, b, a, c, pc, v, oi, iv |
| custom | Choose from already created graphs | None | False | smile |


## Examples

```python

2022 Feb 16, 09:37 (✨) /stocks/options/ $ plot -p -x s -y iv

```

![plot](https://user-images.githubusercontent.com/46355364/154287325-97de8945-a44c-418d-9e88-5123ee70469f.png)


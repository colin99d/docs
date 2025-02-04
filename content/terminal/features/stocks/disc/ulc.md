---
title: ulc
description: OpenBB Terminal Function
---

# Discovery

## ulc

### Description: 

Print up to 25 potentially undervalued large cap stocks. [Source: Yahoo Finance]

### Usage: 
```python
usage: ulc [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of stocks to display. | 5 | False | None |


## Examples

```python

2022 Feb 16, 04:15 (✨) /stocks/disc/ $ ulc -l 25
                                                            Undervalued Large Cap Stocks
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┓
┃ Symbol ┃ Name                                 ┃ Price (Intraday) ┃ Change ┃ % Change ┃ Volume  ┃ Avg Vol (3 month) ┃ Market Cap ┃ PE Ratio (TTM) ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━┩
│ F      │ Ford Motor Company                   │ 18.08            │ 0.62   │ +3.55%   │ 64.555M │ 108.718M          │ 72.397B    │ 4.06           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ NOK    │ Nokia Corporation                    │ 5.60             │ 0.17   │ +3.13%   │ 29.464M │ 24.911M           │ 32.265B    │ 17.07          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ ITUB   │ Itaú Unibanco Holding S.A.           │ 5.14             │ 0.08   │ +1.58%   │ 41.059M │ 45.848M           │ 50.269B    │ 9.92           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ FCX    │ Freeport-McMoRan Inc.                │ 43.67            │ 1.22   │ +2.87%   │ 15.482M │ 18.44M            │ 64.128B    │ 15.06          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ PBR    │ Petróleo Brasileiro S.A. - Petrobras │ 13.77            │ -0.21  │ -1.50%   │ 27.492M │ 31.187M           │ 89.809B    │ 3.49           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ VALE   │ Vale S.A.                            │ 17.14            │ -0.35  │ -2.00%   │ 33.93M  │ 32.586M           │ 80.669B    │ 4.79           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ GOLD   │ Barrick Gold Corporation             │ 20.68            │ -0.41  │ -1.94%   │ 21.46M  │ 17.845M           │ 36.812B    │ 18.56          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ NLY    │ Annaly Capital Management, Inc.      │ 7.26             │ 0.07   │ +0.97%   │ 23.269M │ 22.798M           │ 10.598B    │ 4.54           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ CLF    │ Cleveland-Cliffs Inc.                │ 19.77            │ 1.30   │ +7.04%   │ 21.478M │ 20.134M           │ 10.387B    │ 3.69           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ GM     │ General Motors Company               │ 49.67            │ 1.27   │ +2.62%   │ 14.813M │ 20.688M           │ 72.172B    │ 7.41           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ HBAN   │ Huntington Bancshares Incorporated   │ 16.21            │ 0.51   │ +3.25%   │ 5.809M  │ 12.004M           │ 23.306B    │ 18.01          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ UMC    │ United Microelectronics Corporation  │ 9.90             │ 0.41   │ +4.32%   │ 14.052M │ 8.722M            │ 24.52B     │ 12.07          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ ET     │ Energy Transfer LP                   │ 10.17            │ 0.07   │ +0.69%   │ 13.167M │ 22.73M            │ 32.354B    │ 5.67           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ VIAC   │ ViacomCBS Inc.                       │ 35.99            │ 0.96   │ +2.74%   │ 13.027M │ 14.338M           │ 23.436B    │ 7.03           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ LUMN   │ Lumen Technologies, Inc.             │ 10.04            │ 0.13   │ +1.31%   │ 22.151M │ 13.534M           │ 10.28B     │ 5.26           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ HPE    │ Hewlett Packard Enterprise Company   │ 17.38            │ 0.51   │ +3.02%   │ 7.326M  │ 10.758M           │ 22.48B     │ 6.74           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ MRNA   │ Moderna, Inc.                        │ 151.12           │ 8.65   │ +6.07%   │ 10.858M │ 10.898M           │ 61.272B    │ 9.05           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ PBR-A  │ Petróleo Brasileiro S.A. - Petrobras │ 12.54            │ -0.10  │ -0.79%   │ 11.855M │ 12.201M           │ 70.249B    │ 3.18           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ LYG    │ Lloyds Banking Group plc             │ 2.82             │ 0.06   │ +2.17%   │ 10.023M │ 9.419M            │ 53.069B    │ 8493.98        │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ SUZ    │ Suzano S.A.                          │ 11.11            │ -0.08  │ -0.71%   │ 861227  │ 852793            │ 14.99B     │ 9.14           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ GFI    │ Gold Fields Limited                  │ 11.79            │ -0.49  │ -3.99%   │ 10.13M  │ 7.067M            │ 10.466B    │ 11.19          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ HPQ    │ HP Inc.                              │ 37.37            │ 0.86   │ +2.36%   │ 7.367M  │ 10.599M           │ 40.461B    │ 7.01           │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ HAL    │ Halliburton Company                  │ 32.52            │ 0.16   │ +0.49%   │ 10.356M │ 11.058M           │ 29.222B    │ 19.95          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ RF     │ Regions Financial Corporation        │ 25.29            │ 0.77   │ +3.14%   │ 7.727M  │ 9.327M            │ 23.823B    │ 10.16          │
├────────┼──────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ DOW    │ Dow Inc.                             │ 61.86            │ 1.03   │ +1.69%   │ 4.025M  │ 5.732M            │ 45.513B    │ 7.38           │
└────────┴──────────────────────────────────────┴──────────────────┴────────┴──────────┴─────────┴───────────────────┴────────────┴────────────────┘

```


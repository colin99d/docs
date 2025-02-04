---
title: arkord
description: OpenBB Terminal Function
---

# Discovery

## arkord

### Description: 

Orders by ARK Investment Management LLC - https://ark-funds.com/. [Source: https://cathiesark.com]

### Usage: 
```python
usage: arkord [-l LIMIT] [-s {date,volume,open,high,close,low,total,weight,shares}] [-r] [-b] [-c] [--fund {ARKK,ARKF,ARKW,ARKQ,ARKG,ARKX,}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of stocks to display. | 10 | False | None |
| sort_col | Column to sort by | None | False | date, volume, open, high, close, low, total, weight, shares |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |
| buys_only | Flag to look at buys only | None | False | None |
| sells_only | Flag to look at sells only | None | False | None |
| fund | Filter by fund | None | False | ARKK, ARKF, ARKW, ARKQ, ARKG, ARKX,  |


## Examples

```python

2022 Feb 16, 03:49 (✨) /stocks/disc/ $ arkord

                                      Orders by ARK Investment Management LLC
┏━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━━━━┳━━━━━━┳━━━━━━━━┳━━━━━━━━┓
┃ Date       ┃ Ticker ┃ Direction ┃ Volume  ┃ Open  ┃ Close ┃ High  ┃ Low   ┃ Total      ┃ Fund ┃ Weight ┃ Shares ┃
┡━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━━━━╇━━━━━━╇━━━━━━━━╇━━━━━━━━┩
│ 2022-02-15 │ TSP    │ Buy       │ 1960200 │ 17.52 │ 17.86 │ 17.95 │ 16.83 │ 623206.86  │ ARKK │ 0.0049 │ 34894  │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ MKFG   │ Buy       │ 1057800 │ 4.55  │ 4.67  │ 4.73  │ 4.54  │ 94847.70   │ ARKQ │ 0.0058 │ 20310  │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ TWOU   │ Buy       │ 6176700 │ 9.92  │ 9.77  │ 10.20 │ 9.70  │ 269749.71  │ ARKK │ 0.0023 │ 27610  │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ CND    │ Buy       │ 926500  │ 10.29 │ 10.37 │ 10.59 │ 10.25 │ 2883415.93 │ ARKF │ 0.1825 │ 278000 │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ TSP    │ Buy       │ 1960200 │ 17.52 │ 17.86 │ 17.95 │ 16.83 │ 675215.18  │ ARKQ │ 0.0403 │ 37806  │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ AQB    │ Sell      │ 510200  │ 1.66  │ 1.65  │ 1.66  │ 1.62  │ 147107.40  │ ARKG │ 0.0038 │ 89156  │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ CLLS   │ Sell      │ 182200  │ 5.69  │ 5.60  │ 5.74  │ 5.57  │ 82364.80   │ ARKG │ 0.0022 │ 14708  │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ TWOU   │ Buy       │ 6176700 │ 9.92  │ 9.77  │ 10.20 │ 9.70  │ 57340.13   │ ARKW │ 0.0023 │ 5869   │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ TWOU   │ Buy       │ 6176700 │ 9.92  │ 9.77  │ 10.20 │ 9.70  │ 34507.64   │ ARKQ │ 0.0022 │ 3532   │
├────────────┼────────┼───────────┼─────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼────────┤
│ 2022-02-15 │ MKFG   │ Buy       │ 1057800 │ 4.55  │ 4.67  │ 4.73  │ 4.54  │ 22131.13   │ ARKX │ 0.0057 │ 4739   │
└────────────┴────────┴───────────┴─────────┴───────┴───────┴───────┴───────┴────────────┴──────┴────────┴────────┘

2022 Feb 16, 03:50 (✨) /stocks/disc/ $ arkord -b --fund ARKK

                                         Orders by ARK Investment Management LLC
┏━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━┳━━━━━━━━┳━━━━━━━━━┓
┃ Date       ┃ Ticker ┃ Direction ┃ Volume   ┃ Open   ┃ Close  ┃ High   ┃ Low    ┃ Total       ┃ Fund ┃ Weight ┃ Shares  ┃
┡━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━╇━━━━━━━━╇━━━━━━━━━┩
│ 2022-02-15 │ TSP    │ Buy       │ 1960200  │ 17.52  │ 17.86  │ 17.95  │ 16.83  │ 623206.86   │ ARKK │ 0.0049 │ 34894   │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-15 │ TWOU   │ Buy       │ 6176700  │ 9.92   │ 9.77   │ 10.20  │ 9.70   │ 269749.71   │ ARKK │ 0.0023 │ 27610   │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-14 │ HOOD   │ Buy       │ 21768500 │ 13.10  │ 13.35  │ 13.87  │ 12.97  │ 1423710.79  │ ARKK │ 0.0114 │ 106645  │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-14 │ TSP    │ Buy       │ 3316800  │ 16.37  │ 17.23  │ 18.00  │ 16.35  │ 5257717.13  │ ARKK │ 0.0431 │ 305149  │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-11 │ TSP    │ Buy       │ 3500000  │ 16.25  │ 16.47  │ 17.37  │ 16.18  │ 7952045.07  │ ARKK │ 0.0638 │ 482820  │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-11 │ TWST   │ Buy       │ 3457400  │ 59.19  │ 55.99  │ 62.13  │ 55.77  │ 17381704.09 │ ARKK │ 0.1348 │ 310443  │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-11 │ HOOD   │ Buy       │ 17567800 │ 13.61  │ 13.32  │ 14.19  │ 13.07  │ 2032285.63  │ ARKK │ 0.0159 │ 152574  │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-10 │ TSP    │ Buy       │ 5914200  │ 15.71  │ 16.37  │ 17.96  │ 15.00  │ 4849383.57  │ ARKK │ 0.0391 │ 296236  │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-10 │ SQ     │ Buy       │ 26289600 │ 109.25 │ 108.94 │ 119.00 │ 107.30 │ 13000464.13 │ ARKK │ 0.1095 │ 119336  │
├────────────┼────────┼───────────┼──────────┼────────┼────────┼────────┼────────┼─────────────┼──────┼────────┼─────────┤
│ 2022-02-10 │ DNA    │ Buy       │ 13850600 │ 5.64   │ 5.76   │ 6.30   │ 5.60   │ 12554836.34 │ ARKK │ 0.1017 │ 2179659 │
└────────────┴────────┴───────────┴──────────┴────────┴────────┴────────┴────────┴─────────────┴──────┴────────┴─────────┘

```


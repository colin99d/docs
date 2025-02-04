---
title: warnings
description: OpenBB Terminal Function
---

# Fundamental Analysis

## warnings

### Description: 

Sean Seah warnings. Check: Consistent historical earnings per share; Consistently high return on equity; Consistently high return on assets; 5x Net Income  Long-Term Debt; and Interest coverage ratio more than 3. See https://www.drwealth.com/gone-fishing-with-buffett-by-sean-seah/comment-page-1/ [Source: Market Watch]

### Usage: 
```python
usage: warnings [-d]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| b_debug | print insights into warnings calculation. | None | False | None |


## Examples

```python

2022 Feb 16, 07:14 (✨) /stocks/fa/ $ warnings

                                                  Sean Seah Warnings
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃                                    ┃ 2017          ┃ 2018          ┃ 2019          ┃ 2020          ┃ 2021          ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━┩
│ EPS (Basic)                        │  6.32         │  20.68        │  23.46        │  42.66        │  65.94        │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ Net Income                         │  3030000000   │  10070000000  │  11590000000  │  21330000000  │  33360000000  │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ Interest Expense                   │  848000000    │  1420000000   │  1600000000   │  1650000000   │  1810000000   │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ EBITDA                             │  13520000000  │  25330000000  │  30460000000  │  39570000000  │  48360000000  │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ Total Shareholders' Equity         │  27710000000  │  43550000000  │  62060000000  │  93400000000  │  138250000000 │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ Liabilities & Shareholders' Equity │  131310000000 │  162650000000 │  225250000000 │  321200000000 │  420550000000 │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ Long-Term Debt                     │  37930000000  │  39790000000  │  63210000000  │  84390000000  │  116400000000 │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ ROE                                │  0.11         │  0.23         │  0.19         │  0.23         │  0.24         │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ Interest Coverage Ratio            │  15.94        │  17.84        │  19.04        │  23.98        │  26.72        │
├────────────────────────────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ ROA                                │  0.02         │  0.06         │  0.05         │  0.07         │  0.08         │
└────────────────────────────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┘
Warnings:

NOT consistently high return on equity
NOT consistently high return on assets
5x Net Income < Long-Term Debt

```


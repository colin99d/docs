---
title: treasury
description: OpenBB Terminal Function
---

# Economy

## treasury

### Description: 

Obtain any set of U.S. treasuries and plot them together. These can be a range of maturities for nominal, inflation-adjusted (on long term average of inflation adjusted) and secondary markets over a lengthy period. Note: 3-month and 10-year treasury yields for other countries are available via the command 'macro' and parameter 'M3YD' and 'Y10YD'. [Source: EconDB / FED]

### Usage: 
```python
usage: treasury [-m MATURITY] [--show] [--freq {annually,monthly,weekly,daily}] [-t TYPE] [-s START_DATE] [-e END_DATE]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| maturity | The preferred maturity which is dependent on the type of the treasury | 10y | False | None |
| show_maturities | Show the maturities available for every instrument. | None | False | None |
| frequency | The frequency, this can be annually, monthly, weekly or daily | monthly | False | annually:  203,  monthly:  129,  weekly:  21,  daily:  9 |
| type | Choose from: nominal, inflation, average, secondary | nominal | False | None |
| start_date | The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31) | 1934-01-31 | False | None |
| end_date | The end date of the data (format: YEAR-DAY-MONTH, i.e. 2021-06-02) | 2022-11-16 | False | None |


## Examples

```python

2022 Mar 15, 07:33 (✨) /economy/ $ treasury -sm
               Maturity options per instrument
┏━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Instrument ┃ Maturities                                    ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ nominal    │ 1m, 3m, 6m, 1y, 2y, 3y, 5y, 7y, 10y, 20y, 30y │
├────────────┼───────────────────────────────────────────────┤
│ inflation  │ 5y, 7y, 10y, 20y, 30y                         │
├────────────┼───────────────────────────────────────────────┤
│ average    │ Defined by function                           │
├────────────┼───────────────────────────────────────────────┤
│ secondary  │ 4w, 3m, 6m, 1y                                │
└────────────┴───────────────────────────────────────────────┘

```

![3y 5y 10y 30y nominal](https://user-images.githubusercontent.com/46355364/158575884-8ec4e1dc-fb5b-4440-be4b-5e1dcd6d2a5e.png)

![5y nominal inflation average](https://user-images.githubusercontent.com/46355364/158575921-ff7c387c-8eb6-4716-80c4-f4c5121633f2.png)


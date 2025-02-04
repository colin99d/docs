---
title: maxdecorr
description: OpenBB Terminal Function
---

# Portfolio Optimization

## maxdecorr

### Description: 

Maximizes the portfolio's decorrelation

### Usage: 
```python
usage: maxdecorr [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-de SMOOTHING_FACTOR_EWMA] [-vs SHORT_ALLOCATION] [-mt NAN_FILL_METHOD] [-ct CATEGORIES] [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-v LONG_ALLOCATION] [--name NAME] {sa} ...
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| covariance | Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method | hist | False | hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink |
| smoothing_factor_ewma | Smoothing factor for ewma estimators | 0.94 | False | None |
| short_allocation | Amount to allocate to portfolio in short positions | None | False | None |
| ==SUPPRESS== | sensitivity analysis | None | False | sa:  ArgumentParser(prog='maxdecorr sa', usage=None, description=None, formatter_class=<class 'argparse.HelpFormatter'>, conflict_handler='error', add_help=True) |
| nan_fill_method | Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points | time | False | None |
| categories | Show selected categories | None | False | None |
| historic_period | Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset | 3y | False | None |
| start_period | Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format | None | False | None |
| end_period | End date to get yfinance data from. Must be in 'YYYY-MM-DD' format | None | False | None |
| log_returns | If use logarithmic or arithmetic returns to calculate returns | None | False | None |
| return_frequency | Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns | d | False | d, w, m |
| max_nan | Max percentage of nan values accepted per asset to be considered in the optimization process | 0.05 | False | None |
| threshold_value | Value used to replace outliers that are higher to threshold in absolute value | 0.3 | False | None |
| long_allocation | Amount to allocate to portfolio | 1 | False | None |
| name | Save portfolio with personalized or default name | MAXDECORR_0 | False | None |


## Examples

```python

2022 Apr 05, 14:15 (🦋) /portfolio/po/ $ maxdecorr

 [3 Years] Display a maximal decorrelation portfolio
     Weights
┏━━━━━━┳━━━━━━━━━┓
┃      ┃ Value   ┃
┡━━━━━━╇━━━━━━━━━┩
│ AAPL │  0.0 %  │
├──────┼─────────┤
│ AMZN │ 18.49 % │
├──────┼─────────┤
│ BA   │ 17.29 % │
├──────┼─────────┤
│ FB   │ 12.33 % │
├──────┼─────────┤
│ MSFT │  0.0 %  │
├──────┼─────────┤
│ T    │ 27.37 % │
├──────┼─────────┤
│ TSLA │ 24.50 % │
└──────┴─────────┘

Annual (by 252) expected return: 36.58%
Annual (by √252) volatility: 31.17%
Sharpe ratio: 1.1735

```


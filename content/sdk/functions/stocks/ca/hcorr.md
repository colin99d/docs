---
title: hcorr
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# hcorr

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.comparison_analysis.yahoo_finance_model.get_correlation

```python title='openbb_terminal/stocks/comparison_analysis/yahoo_finance_model.py'
def get_correlation(similar: List[str], start_date: str, candle_type: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_model.py#L98)

Description: Get historical price correlation. [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.<br/>Comparable companies can be accessed through<br/>finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Initial date (e.g., 2021-10-01). Defaults to 1 year back | 1 | True |
| candle_type | str | OHLCA column to use for candles or R for returns, by default "a" for Adjusted Close | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame] | Dataframe with correlation matrix, Dataframe with historical prices for all comparison stocks |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.comparison_analysis.yahoo_finance_view.display_correlation

```python title='openbb_terminal/stocks/comparison_analysis/yahoo_finance_view.py'
def display_correlation(similar: List[str], start_date: str, candle_type: str, display_full_matrix: bool, raw: bool, external_axes: Optional[List[matplotlib.axes._axes.Axes]], export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_view.py#L162)

Description: Correlation heatmap based on historical price comparison

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.<br/>Comparable companies can be accessed through<br/>finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Initial date (e.g., 2021-10-01). Defaults to 1 year back | 1 | True |
| candle_type | str | OHLCA column to use for candles or R for returns, by default "a" for Adjusted Close | None | True |
| display_full_matrix | bool | Optionally display all values in the matrix, rather than masking off half, by default False | False | True |
| raw | bool | Whether to display raw data | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |
| export | str | Format to export correlation prices, by default "" | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>
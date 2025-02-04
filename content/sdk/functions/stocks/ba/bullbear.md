---
title: bullbear
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# bullbear

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.behavioural_analysis.stocktwits_model.get_bullbear

```python title='openbb_terminal/common/behavioural_analysis/stocktwits_model.py'
def get_bullbear(symbol: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_model.py#L16)

Description: Gets bullbear sentiment for ticker [Source: stocktwits].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to look at | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[int, int, int, int] | Watchlist count,<br/>Number of cases found for ticker,<br/>Number of bullish statements,<br/>Number of bearish statements, |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.behavioural_analysis.stocktwits_view.display_bullbear

```python title='openbb_terminal/common/behavioural_analysis/stocktwits_view.py'
def display_bullbear(symbol: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_view.py#L17)

Description: Print bullbear sentiment based on last 30 messages on the board.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>
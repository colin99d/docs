---
title: trending
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# trending

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.discovery.pycoingecko_model.get_trending_coins

```python title='openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py'
def get_trending_coins() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L317)

Description: Returns trending coins [Source: CoinGecko]

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Trending Coins |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.discovery.pycoingecko_view.display_trending

```python title='openbb_terminal/cryptocurrency/discovery/pycoingecko_view.py'
def display_trending(export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_view.py#L192)

Description: Prints table showing trending coins [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>
---
title: active
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# active

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.glassnode_model.get_active_addresses

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py'
def get_active_addresses(symbol: str, interval: str, start_date: str, end_date: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py#L310)

Description: Returns active addresses of a certain symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| interval | str | Interval frequency (e.g., 24h) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | active addresses over time |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.glassnode_view.display_active_addresses

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py'
def display_active_addresses(symbol: str, start_date: str, end_date: str, interval: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py#L32)

Description: Plots active addresses of a certain symbol over time

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| interval | str | Interval frequency (possible values are: 24h, 1w, 1month) | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>
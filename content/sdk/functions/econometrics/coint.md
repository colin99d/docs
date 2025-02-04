---
title: coint
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# coint

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.econometrics.econometrics_model.get_coint_df

```python title='openbb_terminal/econometrics/econometrics_model.py'
def get_coint_df() -> Union
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L249)

Description: Calculate cointegration tests between variable number of input series

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| datasets | pd.Series | Input series to test cointegration for | None | False |
| return_z | bool | Flag to return the z data to plot | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame,Dict] | Dataframe with results of cointegration tests or a Dict of the z results |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.econometrics.econometrics_view.display_cointegration_test

```python title='openbb_terminal/econometrics/econometrics_view.py'
def display_cointegration_test() -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_view.py#L314)

Description: Estimates long-run and short-run cointegration relationship for series y and x and apply

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| datasets | pd.Series | Variable number of series to test for cointegration | None | False |
| significant | float | Show only companies that have p-values lower than this percentage | None | False |
| plot | bool | Whether you wish to plot the z-values of all pairs. | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>
---
title: clean
description: OpenBB SDK Function
---

# clean

## openbb_terminal.econometrics.econometrics_model.clean

```python title='openbb_terminal/econometrics/econometrics_model.py'
def clean(dataset: pd.DataFrame, fill: str, drop: str, limit: Optional[int]) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L65)

Description: Clean up NaNs from the dataset

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset you wish to clean | None | False |
| fill | str | The method of filling NaNs. Choose from:<br/>rfill, cfill, rbfill, cbfill, rffill, cffill | None | False |
| drop | str | The method of dropping NaNs. Choose from:<br/>rdrop, cdrop | None | False |
| limit | int | The maximum limit you wish to apply that can be forward or backward filled | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with cleaned up data |

## Examples


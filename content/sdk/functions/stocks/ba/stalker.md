---
title: stalker
description: OpenBB SDK Function
---

# stalker

## openbb_terminal.common.behavioural_analysis.stocktwits_model.get_stalker

```python title='openbb_terminal/common/behavioural_analysis/stocktwits_model.py'
def get_stalker(user: str, limit: int) -> List
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_model.py#L103)

Description: Gets messages from given user [Source: stocktwits].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| user | str | User to get posts for | None | False |
| limit | int | Number of posts to get, by default 30 | 30 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| List[Dict[str, Any]] | List of posts |

## Examples


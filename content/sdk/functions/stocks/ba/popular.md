---
title: popular
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# popular

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.behavioural_analysis.reddit_model.get_popular_tickers

```python title='openbb_terminal/common/behavioural_analysis/reddit_model.py'
def get_popular_tickers(limit: int, post_limit: int, subreddits: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L145)

Description: Get popular tickers from list of subreddits [Source: reddit].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top tickers to get | None | False |
| post_limit | int | How many posts to analyze in each subreddit | None | False |
| subreddits | str | String of comma separated subreddits. | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of top tickers from supplied subreddits |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.behavioural_analysis.reddit_view.display_popular_tickers

```python title='openbb_terminal/common/behavioural_analysis/reddit_view.py'
def display_popular_tickers(limit: int, post_limit: int, subreddits: str, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_view.py#L184)

Description: Prints table showing latest popular tickers. [Source: Reddit].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top tickers to get | None | False |
| post_limit | int | How many posts to analyze in each subreddit | None | False |
| subreddits | str | String of comma separated subreddits. | None | True |
| export | str | Format to export dataframe | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>
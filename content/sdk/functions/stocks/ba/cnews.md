---
title: cnews
description: OpenBB SDK Function
---

# cnews

## openbb_terminal.stocks.behavioural_analysis.finnhub_model.get_company_news

```python title='openbb_terminal/stocks/behavioural_analysis/finnhub_model.py'
def get_company_news(symbol: str, start_date: str, end_date: str) -> List
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/behavioural_analysis/finnhub_model.py#L20)

Description: Get news from a company. [Source: Finnhub]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | company ticker to look for news articles | None | False |
| start_date | str | date to start searching articles, with format YYYY-MM-DD | None | False |
| end_date | str | date to end searching articles, with format YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List | term to search on the news articles |

## Examples


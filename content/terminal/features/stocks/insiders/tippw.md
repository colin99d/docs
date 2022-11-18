---
title: tippw
description: OpenBB Terminal Function
---

# tippw

Print top insider purchases of the week. [Source: OpenInsider]

### Usage 
```python
usage: tippw [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of datarows to display | 10 | True | None |


## Examples

```python
2022 Feb 16, 08:16 (🦋) /stocks/ins/ $ tippw
                                                                                  Insider Data
┏━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━┓
┃ X  ┃ Filing Date ┃ Trade Date ┃ Ticker ┃ Company Name         ┃ Insider Name        ┃ Title      ┃ Trade Type   ┃ Price  ┃ Qty        ┃ Owned      ┃ Diff Own ┃ Value        ┃
┡━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━┩
│ M  │ 2022-02-11  │ 2022-02-09 │ ASAN   │ Asana, Inc.          │ Moskovitz Dustin A. │ Pres, CEO, │ P - Purchase │ $63.20 │ +1,250,000 │ 21,986,722 │ +6%      │ +$79,005,992 │
│    │ 18:50:54    │            │        │                      │                     │ Chair, 10% │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ D  │ 2022-02-10  │ 2022-02-08 │ ACLX   │ Arcellx, Inc.        │ Sr One Capital      │ 10%        │ P - Purchase │ $15.00 │ +1,666,667 │ 2,033,196  │ +455%    │ +$25,000,005 │
│    │ 08:41:09    │            │        │                      │ Management, LLC     │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ D  │ 2022-02-11  │ 2022-02-09 │ ARMP   │ Armata               │ Innoviva, Inc.      │ Dir, 10%   │ P - Purchase │ $5.00  │ +3,614,792 │ 19,691,561 │ +22%     │ +$18,073,960 │
│    │ 18:56:05    │            │        │ Pharmaceuticals,     │                     │            │              │        │            │            │          │              │
│    │             │            │        │ Inc.                 │                     │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ DM │ 2022-02-15  │ 2022-02-11 │ AREN   │ Arena Group          │ B. Riley Financial, │ 10%        │ P - Purchase │ $8.26  │ +1,977,982 │ 5,411,514  │ +58%     │ +$16,329,921 │
│    │ 21:30:53    │            │        │ Holdings, Inc.       │ Inc.                │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ M  │ 2022-02-11  │ 2022-02-09 │ PFSI   │ Pennymac Financial   │ Nanji Farhad        │ Dir        │ P - Purchase │ $61.11 │ +204,018   │ 4,607,478  │ +5%      │ +$12,466,937 │
│    │ 17:34:36    │            │        │ Services, Inc.       │                     │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ M  │ 2022-02-11  │ 2022-02-09 │ PFSI   │ Pennymac Financial   │ Mfn Partners, LP    │ Dir        │ P - Purchase │ $61.11 │ +204,018   │ 4,435,810  │ +5%      │ +$12,466,937 │
│    │ 17:38:48    │            │        │ Services, Inc.       │                     │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ M  │ 2022-02-15  │ 2022-02-11 │ INDT   │ Indus Realty Trust,  │ Ccp Sbs Gp, LLC     │ 10%        │ P - Purchase │ $75.91 │ +90,492    │ 8,855      │ -111%    │ +$6,869,060  │
│    │ 17:30:17    │            │        │ Inc.                 │                     │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ M  │ 2022-02-15  │ 2022-02-11 │ PFSI   │ Pennymac Financial   │ Mfn Partners, LP    │ Dir        │ P - Purchase │ $60.88 │ +95,982    │ 4,531,792  │ +2%      │ +$5,843,238  │
│    │ 16:39:45    │            │        │ Services, Inc.       │                     │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ M  │ 2022-02-15  │ 2022-02-11 │ PFSI   │ Pennymac Financial   │ Nanji Farhad        │ Dir        │ P - Purchase │ $60.88 │ +95,982    │ 4,703,460  │ +2%      │ +$5,843,238  │
│    │ 16:43:39    │            │        │ Services, Inc.       │                     │            │              │        │            │            │          │              │
├────┼─────────────┼────────────┼────────┼──────────────────────┼─────────────────────┼────────────┼──────────────┼────────┼────────────┼────────────┼──────────┼──────────────┤
│ D  │ 2022-02-15  │ 2022-02-14 │ APRN   │ Blue Apron Holdings, │ Sanberg Joseph N.   │ 10%        │ P - Purchase │ $14.00 │ +357,143   │ 6,935,469  │ +5%      │ +$5,000,002  │
│    │ 17:00:42    │            │        │ Inc.                 │                     │            │              │        │            │            │          │              │
└────┴─────────────┴────────────┴────────┴──────────────────────┴─────────────────────┴────────────┴──────────────┴────────┴────────────┴────────────┴──────────┴──────────────┘
D: Derivative transaction in filing (usually option exercise)
M: Multiple transactions in filing; earliest reported transaction date & weighted average transaction price
```

---
title: nbeats
description: OpenBB Terminal Function
---

# Forecasting

## nbeats

### Description: 

Perform NBEATS forecast (Neural Bayesian Estimation of Time Series): https://unit8co.github.io/darts/generated_api/darts.models.forecasting.nbeats.html

### Usage: 
```python
usage: nbeats [--num_stacks NUM_STACKS] [--num_blocks NUM_BLOCKS] [--num_layers NUM_LAYERS] [--layer_widths LAYER_WIDTHS]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| num_stacks | The number of stacks that make up the whole model. | 10 | False | None |
| num_blocks | The number of blocks making up every stack. | 3 | False | None |
| num_layers | The number of fully connected layers preceding the final forking layers in each block of every stack. | 4 | False | None |
| layer_widths | Determines the number of neurons that make up each fully connected layer in each block of every stack | 512 | False | None |


## Examples

```python

2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:03 (🦋) /forecast/ $ nbeats GME
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:07<00:00, 15.10it/s]
NBEATS model obtains MAPE: 23.53%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 158.52   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 172.21   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 67.46    │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 97.63    │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 154.24   │
└─────────────────────┴────────────┘

```

![nbeats](https://user-images.githubusercontent.com/72827203/180615396-d29126ae-ad75-4f84-9f67-2121dc4e695a.png)


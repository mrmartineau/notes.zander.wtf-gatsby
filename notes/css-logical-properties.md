---
title: Logical properties
tags:
  - css
link: >-
  https://www.smashingmagazine.com/2022/12/deploying-css-logical-properties-on-web-apps/
created: 2022-12-29T08:15:00.000Z
modified: 2022-12-29T08:15:00.000Z
---

- We no longer think in terms of `left`/`right` but `start`/`end` (the same goes for `top`/`bottom`):
- We no longer say `width` or `height` but instead `inline` and `block` — quite classical.

## Basics

| Classical Property | Logical Property  |
| ------------------ | ----------------- |
| `width`            | `inline-size`     |
| `height`           | `block-size`      |
| `min-width`        | `min-inline-size` |
| `min-height`       | `min-block-size`  |
| `max-width`        | `max-inline-size` |
| `max-height`       | `max-block-size`  |

## Margin

| Classical Property | Logical Property      |
| ------------------ | --------------------- |
| `margin-top`       | `margin-block-start`  |
| `margin-bottom`    | `margin-block-end`    |
| `margin-left`      | `margin-inline-start` |
| `margin-right`     | `margin-inline-end`   |

## Padding

| Classical Property | Logical Property       |
| ------------------ | ---------------------- |
| `padding-top`      | `padding-block-start`  |
| `padding-bottom`   | `padding-block-end`    |
| `padding-left`     | `padding-inline-start` |
| `padding-right`    | `padding-inline-end`   |

## Position

| Classical Property | Logical Property     |
| ------------------ | -------------------- |
| `top`              | `inset-block-start`  |
| `bottom`           | `inset-block-end`    |
| `left`             | `inset-inline-start` |
| `right`            | `inset-inline-end`   |

## `float`

| Classical Property | Logical Property      |
| ------------------ | --------------------- |
| `float: left`      | `float: inline-start` |
| `float: right`     | `float: inline-end`   |

## `text-align`

| Classical Property  | Logical Property    |
| ------------------- | ------------------- |
| `text-align: left`  | `text-align: start` |
| `text-align: right` | `text-align: end`   |

## `border`

| Classical Property | Logical Property      |
| ------------------ | --------------------- |
| `border-top`       | `border-block-start`  |
| `border-bottom`    | `border-block-end`    |
| `border-left`      | `border-inline-start` |
| `border-right`     | `border-inline-end`   |

## Border-radius

| Classical Property           | Logical Property            |
| ---------------------------- | --------------------------- |
| `border-top-left-radius`     | `border-start-start-radius` |
| `border-top-right-radius`    | `border-start-end-radius`   |
| `border-bottom-left-radius`  | `border-end-start-radius`   |
| `border-bottom-right-radius` | `border-end-end-radius`     |

| Classical Property                                                    | Logical Property           |
| --------------------------------------------------------------------- | -------------------------- |
| `margin-left: auto;`<br/>`margin-right: auto;`                        | `margin-inline: auto;`     |
| `margin-top: 0;`<br/>`margin-bottom: 0;`                              | `margin-block: 0;`         |
| `margin-top: 1rem;`<br/>`margin-bottom: 2rem;`                        | `margin-block: 1rem 2rem;` |
| `top: 2rem;`<br/>`right: 2rem;`<br/>`bottom: 2rem;`<br/>`left: 2rem;` | `inset: 2rem;`             |
| `right: 2rem;`<br/>`left: 2rem;`                                      | `inset-inline: 2rem;`      |
| `top: 2rem;`<br/>`bottom: 2rem;`                                      | `inset-block: 2rem;`       |

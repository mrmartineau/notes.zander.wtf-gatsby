---
title: CSS Filters
tags:
  - css
emoji: 🕶
created: 2020-03-22T14:53:49.000Z
modified: 2020-03-26T23:06:06.000Z
---

```css
/* URL to SVG filter */
filter: url('filters.svg#filter-id');

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: unset;
```

Docs: http://developer.mozilla.org/en-US/docs/Web/CSS/filter

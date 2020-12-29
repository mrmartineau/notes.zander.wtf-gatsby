---
title: Aspect ratio
tags:
  - css
link: >-
  https://www.bram.us/2020/11/30/native-aspect-ratio-boxes-in-css-thanks-to-aspect-ratio
created: 2020-05-19T08:25:55.000Z
modified: 2020-12-29T17:10:23.000Z
---

```css
/* Old, hacky way */
.parent {
  padding-top: 56.25%;
}

/* New, cool way */
.parent {
  aspect-ratio: 16 / 9;

  /* or for square things */
  aspect-ratio: 1 / 1;
}
```

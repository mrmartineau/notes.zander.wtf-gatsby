---
title: Aspect ratio
tags:
  - css
link: 'https://twitter.com/Una/status/1260980901934137345'
created: 2020-05-19T08:25:55.000Z
modified: 2020-05-19T08:25:55.000Z
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

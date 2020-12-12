---
title: Async load CSS
tags:
  - css
emoji: 🥱
link: 'https://www.filamentgroup.com/lab/load-css-simpler'
created: 2020-02-27T23:51:44.000Z
modified: 2020-05-20T09:40:27.000Z
---

```html
<link rel="preload" href="/path/to/my.css" as="style" />
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'"
/>
```

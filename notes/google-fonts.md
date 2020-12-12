---
title: Fastest Google Fonts
tags:
  - html
  - css
link: 'https://csswizardry.com/2020/05/the-fastest-google-fonts/'
created: 2020-05-20T09:40:27.000Z
modified: 2020-05-20T09:40:27.000Z
---

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
/>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  media="print"
  onload="this.media='all'"
/>
```

This makes use of Filament Group's [async CSS loading method](/async-load-css).

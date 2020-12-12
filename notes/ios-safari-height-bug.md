---
title: iOS Safari bug
tags:
  - css
link: 'https://github.com/postcss/postcss-100vh-fix'
created: 2020-09-13T18:44:16.000Z
modified: 2020-09-13T18:44:16.000Z
---

This solves the popular problem when 100vh doesn’t fit the mobile browser screen.

```css
body {
  height: 100vh;
  // or
  min-height: 100vh;
}

@supports (-webkit-touch-callout: none) {
  body {
    height: -webkit-fill-available;
  }
}
```

![](https://camo.githubusercontent.com/3b73212cf082c81ce5e2369aa1b7d37ae47941f1/68747470733a2f2f6d6178696d696c69616e7363686d6974742e6d652f706f7374732f6373732d31303076682d6d6f62696c652d62726f77736572732f6c6c642d6d696e696d616c2d76732d6e6f726d616c2d75694032782e706e67)

---
title: Get selected text
tags:
  - javascript
created: 2020-08-04T22:51:25.000Z
modified: 2020-08-04T22:51:25.000Z
---

```js
document.onselectionchange = () => {
  const text = document.getSelection().toString()
  console.log(text)
}
```

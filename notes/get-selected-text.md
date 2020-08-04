---
title: Get selected text
tags:
  - javascript
---

```js
document.onselectionchange = () => {
  const text = document.getSelection().toString()
  console.log(text)
}
```

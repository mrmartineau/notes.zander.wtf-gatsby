---
title: Keycode
tags:
  - javascript
emoji: 🔑
link: http://keycode.info/
---

```js
document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return
  }
  // do something
})
```

---
title: Keycode
tags:
  - javascript
---

```js
document.addEventListener('keydown', event => {
  if (event.isComposing || event.keyCode === 229) {
    return
  }
  // do something
})
```

http://keycode.info/

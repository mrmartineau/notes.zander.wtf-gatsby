---
title: Keycode
tags:
  - javascript
emoji: 🔑
link: 'https://omatsuri.app/events-keycode'
created: 2020-03-22T14:53:49.000Z
modified: 2020-09-06T07:57:42.000Z
---

```js
document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return
  }
  // do something
})
```

Alt link: http://keycode.info/

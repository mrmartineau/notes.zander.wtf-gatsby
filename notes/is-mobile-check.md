---
title: Is mobile check
tags:
  - javascript
---

```js
const parser = require('ua-parser-js')

function isUserAgentSignallingMobile(userAgentString) {
  const ua = parser(userAgentString)
  return ua.device.type === 'mobile'
}
```

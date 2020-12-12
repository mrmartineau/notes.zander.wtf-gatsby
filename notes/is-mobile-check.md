---
title: is-mobile check
tags:
  - javascript
emoji: 📱
created: 2020-03-22T14:53:49.000Z
modified: 2020-05-11T11:47:16.000Z
---

```js
const parser = require('ua-parser-js')

function isUserAgentSignallingMobile(userAgentString) {
  const ua = parser(userAgentString)
  return ua.device.type === 'mobile'
}
```

Repo: https://github.com/faisalman/ua-parser-js

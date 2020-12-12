---
title: Postman.io
tags:
  - javascript
emoji: 📨
created: 2020-02-27T23:02:00.000Z
modified: 2020-03-26T23:06:06.000Z
---

## Save an env var

```js
var jsonData = JSON.parse(responseBody)
pm.environment.set('ref', jsonData.refs[0].ref)
```

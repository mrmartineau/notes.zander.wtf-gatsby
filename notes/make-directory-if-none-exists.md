---
title: Make a directory if none exists
tags:
  - node
---

```js
var mkdirp = require('mkdirp')

mkdirp('/tmp/some/path/foo', err => {
  // path exists unless there was an error
})
```

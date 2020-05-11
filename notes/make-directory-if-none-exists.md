---
title: Make a directory if none exists
tags:
  - node
link: https://github.com/isaacs/node-mkdirp
---

```js
var mkdirp = require('mkdirp')

mkdirp('/tmp/some/path/foo', (err) => {
  // path exists unless there was an error
})
```

---
title: Make a directory if none exists
tags:
  - node
link: 'https://github.com/isaacs/node-mkdirp'
created: 2020-02-27T23:02:00.000Z
modified: 2020-05-11T11:47:16.000Z
---

```js
var mkdirp = require('mkdirp')

mkdirp('/tmp/some/path/foo', (err) => {
  // path exists unless there was an error
})
```

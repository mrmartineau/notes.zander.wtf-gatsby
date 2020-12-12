---
title: Nock
tags:
  - testing
  - javascript
emoji: 🧪
link: 'https://github.com/nock/nock'
created: 2020-02-27T23:02:00.000Z
modified: 2020-05-11T11:47:16.000Z
---

```js
const nock = require('nock')

const scope = nock('https://api.github.com')
  .get('/repos/atom/atom/license')
  .reply(200, {
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
  })
```

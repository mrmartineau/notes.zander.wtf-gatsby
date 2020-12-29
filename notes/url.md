---
title: URL & URLSearchParams
created: 2020-12-28T23:54:44.000Z
modified: 2020-12-29T00:01:28.000Z
---

## URL

```js
const addr = new URL('https://mysite.com/login?user=someguy&page=news')
```

## URLSearchParams

Docs: http://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

```js
// example.com?much=wow
const params = new URLSearchParams(window.location.search)

params.has('much') // true
params.get('much') // 'wow'

params.set('such', 'shiny code')
params.toString() // much=wow&such-shiny+code

for ([key, value] of params) {
  // ...
}

params.delete('much')
params.toString() // such-shiny+code
```

Polyfill: https://github.com/ungap/url-search-params#readme

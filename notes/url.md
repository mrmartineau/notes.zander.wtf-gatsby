---
title: URL & URLSearchParams
created: 2020-12-29T10:31:32.000Z
modified: 2022-11-25T10:52:04.000Z
tags:
  - javascript
---

## URL

Docs: http://developer.mozilla.org/en-US/docs/Web/API/URL

```js
const url = new URL('https://mysite.com/login?user=zander&page=news#hello')

url.hostname // mysite.com
url.pathname // /login
url.href // https://mysite.com/login?user=zander&page=news#hello
url.origin // https://mysite.com
url.search // ?user=zander&page=news
url.hash // #hello
```

## URLSearchParams

Docs: http://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

```js
// example.com?much=wow
const params = new URLSearchParams(
  'https://mysite.com/login?user=zander&page=news#hello',
)

params.has('user') // true
params.get('user') // 'zander'

params.set('page', 'code')
params.toString() // user=zander&page=code

for ([key, value] of params) {
  // ...
}

params.delete('page')
params.toString() // user=zander
```

### To convert a url with search params to an object:

```ts
// one liner
const params = Object.fromEntries(
  new URLSearchParams(
    new URL('https://mysite.com/login?user=zander&page=news#hello').search,
  ),
)

// multi-line
const url = new URL('https://mysite.com/login?user=zander&page=news#hello')
const urlParams = new URLSearchParams(url.search)
const params = Object.fromEntries(urlParams)
```

Polyfill: https://github.com/ungap/url-search-params#readme

## Use `proper-url-join` to construct a url

https://github.com/moxystudio/js-proper-url-join

```ts
import urlJoin from 'proper-url-join'

urlJoin('foo', 'bar') // /foo/bar
urlJoin('/foo/', '/bar/') // /foo/bar
urlJoin('foo', '', 'bar') // /foo/bar
urlJoin('foo', undefined, 'bar') // /foo/bar
urlJoin('foo', null, 'bar') // /foo/bar

// With leading & trailing slash options
urlJoin('foo', 'bar', { leadingSlash: false }) // foo/bar
urlJoin('foo', 'bar', { trailingSlash: true }) // /foo/bar/
urlJoin('foo', 'bar', { leadingSlash: false, trailingSlash: true }) // foo/bar/

// Absolute URLs
urlJoin('http://google.com', 'foo') // http://google.com/foo

// Protocol relative URLs
urlJoin('//google.com', 'foo', { protocolRelative: true }) // //google.com/foo

// With query string as an url part
urlJoin('foo', 'bar?queryString') // /foo/bar?queryString
urlJoin('foo', 'bar?queryString', { trailingSlash: true }) // /foo/bar/?queryString

// With query string as an object
urlJoin('foo', { query: { biz: 'buz', foo: 'bar' } }) // /foo?biz=buz&foo=bar

// With both query string as an url part and an object
urlJoin('foo', 'bar?queryString', { query: { biz: 'buz', foo: 'bar' } }) // /foo/bar?biz=buz&foo=bar&queryString
```

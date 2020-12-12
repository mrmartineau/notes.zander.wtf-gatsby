---
title: Webshare API
tags:
  - javascript
link: 'https://web.dev/web-share/'
emoji: 👀
created: 2020-05-07T11:04:41.000Z
modified: 2020-05-11T11:31:08.000Z
---

```js
if (navigator.share) {
  navigator
    .share({
      title: 'web.dev',
      text: 'Check out web.dev.',
      url: 'https://web.dev/',
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error))
}
```

If your page has a canonical url:

```js
let url = document.location.href
const canonicalElement = document.querySelector('link[rel=canonical]')
if (canonicalElement !== null) {
  url = canonicalElement.href
}
navigator.share({ url: url })
```

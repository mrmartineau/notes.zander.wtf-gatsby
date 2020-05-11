---
title: Webshare API
tags:
  - javascript
link: https://web.dev/web-share/
emoji: 👀
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

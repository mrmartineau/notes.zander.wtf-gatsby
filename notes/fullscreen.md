---
title: Fullscreen video
emoji: 🍿
tags:
  - javascript
  - typescript
created: 2020-02-27T23:51:44.000Z
modified: 2020-02-27T23:51:44.000Z
---

```ts
const openFullscreen = (elem: HTMLElement): Promise<any> => {
  if (elem.requestFullscreen) {
    return elem.requestFullscreen()
  } else if (elem.mozRequestFullscreen) {
    /* Firefox */
    return elem.mozRequestFullscreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    return elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    return elem.msRequestFullscreen()
  }
}

// Usage
openFullscreen(element).catch((error) => {
  Sentry.captureException(new Error(error))
  Sentry.captureMessage(
    `Error attempting to enable full-screen mode: ${error.message} (${error.name})`
  )
})
```

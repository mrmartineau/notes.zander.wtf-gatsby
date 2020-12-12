---
title: IntersectionObserver
tags:
  - javascript
emoji: 🚸
created: 2020-02-27T23:02:00.000Z
modified: 2020-11-04T17:01:50.000Z
---

```js
const handleIntersectionChange = (changes, observer) => {
  changes.forEach((change) => {
    console.log('entry', entry)
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
    if (entry.intersectionRatio > 0.8) {
      // do something
    } else {
      // do something else
    }
  })
}
var observer = new IntersectionObserver(handleIntersectionChange, {
  root: document.querySelector('body'),
  rootMargin: '0px',
  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
})

observer.observe(document.querySelector('.element'))
```

https://css-tricks.com/using-intersectionobserver-to-check-if-page-scrolled-past-certain-point/

## With React

```tsx
import React, { FC, useEffect } from 'react'

export const StickyBannerLayout: FC = ({ children }) => {
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }

      const handleIntersectionChange = (changes) => {
        changes.forEach((change) => {
          if (change.isIntersecting) {
            // do something
          } else {
            // do something else
          }
        })
      }

      const observer = new IntersectionObserver(
        handleIntersectionChange,
        config
      )
      observer.observe(document.querySelector('.element'))
    }
  }, [])

  return <div>{children}</div>
}
```

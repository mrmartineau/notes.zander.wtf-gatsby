---
title: GSAP
tags:
  - animation
  - react
  - javascript
link: 'https://greensock.com/docs/v3/GSAP'
created: 2020-12-01T10:18:03.000Z
modified: 2020-12-02T00:34:34.000Z
---

## GSAP

- Docs: https://greensock.com/docs/v3/GSAP
- Cheatsheet: https://greensock.com/cheatsheet/

## Eases

https://greensock.com/docs/v3/Eases

## ScrollTrigger

- Docs: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- Demos: https://greensock.com/st-demos/

```js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```

### With React

```tsx
const wrapperRef = useRef<HTMLDivElement>(null)
const oneRef = useRef<HTMLDivElement>(null)
const twoRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  if (!oneRef.current && !twoRef.current) {
    const scrollConfig = {
      trigger: wrapperRef.current,
      start: 'top center',
      end: 'bottom center',
    }

    oneRef.current = ScrollTrigger.create({
      ...scrollConfig,
      onEnter: (self) => {
        // self.isActive
      },
      onLeaveBack: (self) => {
        // self.isActive
      },
      invalidateOnRefresh: false,
    })

    // Line
    twoRef.current = gsap.to(lineRef.current, {
      height: wrapperRef.current.scrollHeight,
      ease: 'sine.inOut',
      scrollTrigger: {
        ...scrollConfig,
        scrub: true,
      },
    })
  }
  return () => {
    // Cleanup scroll listeners
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill()
    })
    gsap.killTweensOf(window)
  }
}, [])
```

#### Cleanup scroll listeners

Make sure you cleanup your scroll trigger listeners when your component unmounts.

```jsx
// Very simple example
useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach((instance) => {
      instance.kill()
    })
    gsap.killTweensOf(window)
  }
}, [])
```

## ScrollTo

- Docs: https://greensock.com/docs/v3/Plugins/ScrollToPlugin
- Demos: https://greensock.com/st-demos/

```js
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
```

## Useful links:

- https://css-tricks.com/writing-smarter-animation-code/
- https://css-tricks.com/tips-for-writing-animation-code-efficiently/

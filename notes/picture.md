---
title: Picture
tags:
  - html
emoji: 🖼
created: 2020-02-27T23:02:00.000Z
modified: 2020-03-26T23:06:06.000Z
---

## Webp + png usage

```jsx
<picture>
  <source
    type="image/webp"
    srcset="/images/free-cash.webp, /images/free-cash@2x.webp 2x"
  />
  <source
    type="image/png"
    srcset="/images/free-cash.png, /images/free-cash@2x.png 2x"
  />
  <img src="/images/free-cash.png" alt="Free Cash!" />
</picture>
```

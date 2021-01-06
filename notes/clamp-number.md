---
title: Clamp number
tags:
  - javascript
  - css
created: 2021-01-06T11:20:30.000Z
modified: 2021-01-06T11:20:30.000Z
emoji: 🗜
---

## JavaScript

```ts
const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

// clamp(21, 20, 50) > 21
// clamp(10, 20, 50) > 20
// clamp(80, 20, 50) > 50
```

## CSS

Use this if you only need to support Safari (11.1+) and Chrome (79+)

```css
html {
  font-size: min(max(16px, 4vw), 22px);
}
```

Or even this if you only support Chrome (79+)

```css
body {
  font-size: clamp(16px, 4vw, 22px);
}
```

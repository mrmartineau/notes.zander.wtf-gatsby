---
title: CSS environment variables
tags:
  - css
created: 2020-03-22T14:53:49.000Z
modified: 2020-03-22T14:53:49.000Z
---

[Browser support](https://caniuse.com/#feat=css-env-function)

```css
env('VARIABLE_NME', FALLBACK_VALUE);

env(safe-area-inset-top, 12px)
env(safe-area-inset-right, 12px)
env(safe-area-inset-bottom, 12px)
env(safe-area-inset-left, 12px)
```

A specific viewport metatag property is needed:

```html
<meta
  name="viewport"
  content="initial-scale=1.0, width=device-width, viewport-fit=cover"
/>
```

or

```css
@viewport {
  viewport-fit: cover;
}
```

## Example

```css
body {
  padding-top: env(safe-area-inset-top, 12px);
  padding-right: env(safe-area-inset-right, 12px);
  padding-bottom: env(safe-area-inset-bottom, 12px);
  padding-left: env(safe-area-inset-left, 12px);
}
```

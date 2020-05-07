---
title: JS body class
tags:
  - javascript
emoji: 🤷‍♂️
---

### Best

```js
window.document.documentElement.className =
  window.document.documentElement.className.replace(/\bno-js\b/g, '') + ' js '
;(function (H) {
  H.className = H.className.replace(/\bno-js\b/, 'js')
})(document.documentElement)
```

### Add to `<html>`

```html
<script>
  document.body.parentElement.className = document.body.parentElement.className.replace(
    'no-js',
    'js'
  )
</script>
```

### Add to `<body>`

```html
<script type="text/javascript">
  document.body.className = document.body.className
    ? document.body.className + ' js'
    : 'no-js'
</script>
```

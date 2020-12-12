---
title: Destructuring
tags:
  - javascript
created: 2020-02-27T23:51:44.000Z
modified: 2020-03-22T23:14:36.000Z
---

```js
const exampleObject = { a: { b: 'hi' } }

// Want to get both `a` and `b` as variables?
// You totally can do this in one line of destructuring.
const {
  a,
  a: { b }
} = exampleObject
```

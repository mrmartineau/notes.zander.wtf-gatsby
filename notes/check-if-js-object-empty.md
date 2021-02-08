---
title: Check if JavaScript object is empty
tags:
  - javascript
created: 2021-01-06T11:18:30.000Z
modified: 2021-01-28T16:55:30.000Z
---

```js
if (obj && Object.entries(obj).length === 0 && obj.constructor === Object) {
  // do something
}
```

or use a function:

```ts
export const isObjectEmpty = (obj: unknown): boolean => {
  if (obj === null || obj === undefined || obj === false) {
    return true
  }
  return Object.entries(obj).length === 0
}

// isObjectEmpty({}) true
// isObjectEmpty({a: 1}) false
```

You can also invert that function to check if an object has values.

```ts
export const isObjectFull = (obj) => !isObjectEmpty(obj)
```

Not sure about the naming of this one, but you get the idea

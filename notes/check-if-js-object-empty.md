---
title: Check if JavaScript object is empty
tags:
  - javascript
created: 2021-01-06T11:18:30.000Z
modified: 2021-01-06T11:18:30.000Z
---

```js
if (
  Object.keys(changedFields).length !== 0 &&
  changedFields.constructor === Object
) {
  // do something
}
```

or use a function:

```js
const isObjectEmpty = (obj) => {
  return Object.keys(obj).length !== 0 && obj.constructor === Object
}
```

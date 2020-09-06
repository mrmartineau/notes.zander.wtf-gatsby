---
title: Useful JavaScript functions
tags:
  - javascript
---

## Arrays

### Remove single item from array

```js
const removeItemFromArray = (arr, value) => {
  var index = arr.indexOf(value)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

// Usage
console.log(removeItemFromArray([2, 5, 9, 1, 5, 8, 5], 5))
```

### Remove multiple items from array

```js
const removeAllItemsFromArray = (arr, value) => {
  var i = 0
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1)
    } else {
      ++i
    }
  }
  return arr
}

// Usage
console.log(removeAllItemsFromArray([2, 5, 9, 1, 5, 8, 5], 5))
```

## Objects

### Check if object is empty

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

## Clamp number

```ts
const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

// clamp(21, 20, 50) > 21
// clamp(10, 20, 50) > 20
// clamp(80, 20, 50) > 50
```

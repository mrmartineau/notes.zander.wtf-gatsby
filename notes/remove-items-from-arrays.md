---
title: Removing items from arrays
tags:
  - javascript
created: 2021-01-06T11:22:00.000Z
modified: 2021-01-06T11:22:00.000Z
emoji: ❌
---

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

---
title: Useful JavaScript functions & snippets
tags:
  - javascript
created: 2020-09-06T07:57:42.000Z
modified: 2020-12-29T10:31:32.000Z
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

### Check if array is empty

You want to do the check for `undefined` first. If you do it the other way round, it will generate an error if the array is undefined.

```js
if (array === undefined || array.length == 0) {
  // array empty or does not exist
}
```

#### The foolproof approach

This takes into account that the variable might not refer to an array, but to some other type of object with a length property.

```js
if (!Array.isArray(array) || !array.length) {
  // array does not exist, is not an array, or is empty
  // ⇒ do not attempt to process array
}
```

#### The pragmatic approach

In a lot of cases, the above might seem like overkill. Maybe you're using a higher order language like TypeScript that does most of the type-checking for you at compile-time, or you really don't care whether the object is actually an array, or just array-like.

In those cases, I tend to go for the following, more idiomatic JavaScript:

```js
if (!array || !array.length) {
  // array or array.length are falsy
  // ⇒ do not attempt to process array
}
```

Or, more frequently, its inverse:

```js
if (array && array.length) {
  // array and array.length are truthy
  // ⇒ probably OK to process array
}
```

With the introduction of the optional chaining operator (Elvis operator) in ECMAScript 2020, this can be shortened even further:

```js
if (!array?.length) {
  // array or array.length are falsy
  // ⇒ do not attempt to process array
}
```

Or the opposite:

```js
if (array?.length) {
  // array and array.length are truthy
  // ⇒ probably OK to process array
}
```

From [this](https://stackoverflow.com/a/24403771/91359) brilliant Stack Overflow answer.

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

## Switch(true)

You can use `switch (true)` instead of multiple `if/else` statements

```js
const x = 1

switch (true) {
  case: x === 1 {
    // ...
    break
  }
  case: 5 < x {
    // ...
    break
  }
}
```

## Automatically remove an event listener after it has executed

```js
el.addEventListener('click', console.log, {
  once: true,
})
```

## The magical `handleEvent` function

```js
// Get a reference to the <button>
const btn = document.querySelector('button')

// Define object with `handleEvent` function
const myObject = {
  handleEvent: (event) => {
    alert(event.type)
  },
}

// Listen for 'click' events on the <button> and handle them with `myObject`... WHAT?!?!
btn.addEventListener('click', myObject)
```

[More info](https://dev.to/rikschennink/the-fantastically-magical-handleevent-function-1bp4)

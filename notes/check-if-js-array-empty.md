---
title: Check if JavaScript array is empty
tags:
  - javascript
created: 2021-01-06T11:17:30.000Z
modified: 2021-01-06T11:17:30.000Z
---

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

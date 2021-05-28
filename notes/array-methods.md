---
title: Array methods summarised
tags:
  - javascript
emoji: null
created: 2020-02-27T23:51:44.000Z
modified: 2021-05-21T10:16:29.042Z
---

## Intro

JavaScript Arrays have lots of built in methods on their prototype. Some of them _mutate_ - ie, they change the underlying array in-place. Luckily, most of them do not - they instead return an entirely distinct array. Since arrays are conceptually a contiguous list of items, it helps code clarity and maintainability a lot to be able to operate on them in a "functional" way. (I'll also insist on referring to an array as a "list" - although in some languages, `List` is a native data type, in JS and this post, I'm referring to the concept. Everywhere I use the word "list" you can assume I'm talking about a JS Array) This means, to perform a single operation on the list as a whole ("atomically"), and to return a _new_ list - thus making it much simpler to think about both the old list and the new one, what they contain, and what happened during the operation.

Below are some of the methods that _iterate_ - in other words, that operate on the entire list, one item at a time. When you call them, you provide a _callback function_ - a single function that expects to operate on one item at a time. Based on the Array method you've chosen, the callback gets specific arguments, and may be expected to return a certain kind of value - and (except for `forEach`) the return value determines the final return value of the overarching array operation. Although most of the methods are guaranteed to execute for _each_ item in the array - for all of them - some of the methods can stop iterating partway through; when applicable, this is indicated below.

All array methods iterate in what is traditionally called "left to right" - more accurately (and less ethnocentrically) from index `0`, to index `length - 1` - also called "start" to "end". `reduceRight` is an exception in that it iterates in reverse - from `end` to `start`.

---

### `forEach`

- _callback answers_: here’s an item. do something nutty with it, i don't care what.
- _callback gets these arguments_: `item`, `index`, `list`
- _final return value_: nothing - in other words, `undefined`
- _example use case_:

```js
;[1, 2, 3].forEach((item, index) => {
  console.log(item, index)
})
```

### `map`

- _callback answers_: here’s an item. what should i put in the new list in its place?
- _callback gets these arguments_: `item`, `index`, `list`
- _final return value_: list of new items
- _example use case_:

```js
const three = [1, 2, 3]
const doubled = three.map((item) => {
  return item * 2
})
console.log(three === doubled, doubled) // false, [2, 4, 6]
```

### `filter`

- _callback is a predicate_ - it should return a truthy or falsy value
- _callback answers_: should i keep this item?
- _callback gets these arguments_: `item`, `index`, `list`
- _final return value_: list of kept items
- _example use case_:

```js
const ints = [1, 2, 3]
const evens = ints.filter((item) => {
  return item % 2 === 0
})
console.log(ints === evens, evens) // false, [2]
```

### `reduce`

- _callback answers_: here’s the result from the previous iteration. what should i pass to the next iteration?
- _callback gets these arguments_: `result`, `item`, `index`, `list`
- _final return value_: result of last iteration
- _example use case_:

```js
// NOTE: `reduce` and `reduceRight` take an optional "initialValue" argument, after the reducer callback.
// if omitted, it will default to the first item.
const sum = [1, 2, 3].reduce((result, item) => {
  return result + item
}, 0) // if the `0` is omitted, `1` will be the first `result`, and `2` will be the first `item`
```

`reduceRight`: (same as `reduce`, but in reversed order: last-to-first)

### `some`

- _callback is a predicate_ - it should return a truthy or falsy value
- _callback answers_: does this item meet your criteria?
- _callback gets these arguments_: `item`, `index`, `list`
- _final return value_: `true` after the first item that meets your criteria, else `false`
- **note**: stops iterating once it receives a truthy value from your callback.
- _example use case_:

```js
const hasNegativeNumbers = [1, 2, 3, -1, 4].some((item) => {
  return item < 0
})
console.log(hasNegativeNumbers) // true
```

### `every`

- _callback is a predicate_ - it should return a truthy or falsy value
- _callback answers_: does this item meet your criteria?
- _callback gets these arguments_: `item`, `index`, `list`
- _final return value_: `false` after the first item that failed to meet your criteria, else `true`
- **note**: stops iterating once it receives a falsy value from your callback.
- _example use case_:

```js
const allPositiveNumbers = [1, 2, 3].every((item) => {
  return item > 0
})
console.log(allPositiveNumbers) // true
```

### `find`

- _callback is a predicate_ - it should return a truthy or falsy value
- _callback answers_: is this item what you’re looking for?
- _callback gets these arguments_: `item`, `index`, `list`
- _final return value_: the item you’re looking for, or undefined
- **note**: stops iterating once it receives a truthy value from your callback.
- _example use case_:

```js
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const found = objects.find((item) => {
  return item.id === 'b'
})
console.log(found === objects[1]) // true
```

### `findIndex`

- _callback is a predicate_ - it should return a truthy or falsy value
- _callback answers_: is this item what you’re looking for?
- _callback gets these arguments_: `item`, `index`, `list`
- _final return value_: the index of the item you’re looking for, or `-1`
- **note**: stops iterating once it receives a truthy value from your callback.
- _example use case_:

```js
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const foundIndex = objects.findIndex((item) => {
  return item.id === 'b'
})
console.log(foundIndex === 1) // true
```

### `sort`

- _callback is a comparator_ - it should return either a number either < 0, 0, or > 0
- _callback answers_: how do the two items compare with each other
- _callback gets these arguments_: `oneElement`, `theOtherElement`
- _final return value_: `number < 0`, if `oneElement` should preceed `theOtherElement`, `0` to keep the relative order, `> 0` to place `oneElement` at a later index than `theOtherElement`
- _example use case_:

```js
const objects = ['John', 'Doe', 'Foo', 'Bar']
const sortedObjects = objects.sort((one, two) => -one.localeCompare(two)) // reverses the string in reverse order
console.log(sortedObjects) // ['John', 'Foo', 'Doe', 'Bar']
```

#### Compare function examples

```ts
export const compare = (a, b):number  => {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

export const compareNumbers = (a:number, b:number) => {
  return a - b;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const sortByDisplayOrder = (a: any, b: any): number => {
  return a.displayOrder - b.displayOrder
}

// Sort by property priority
export const sortByPropertyPriority = <T>(
  key: string,
  sortingOrder: Record<string, number>,
  order: 'asc' | 'desc' = 'asc',
) => {
  return (a: T, b: T): number => {
    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line no-prototype-builtins
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0

    const first =
      a[key].toLowerCase() in sortingOrder
        ? sortingOrder[a[key]]
        : Number.MAX_SAFE_INTEGER
    const second =
      b[key].toLowerCase() in sortingOrder
        ? sortingOrder[b[key]]
        : Number.MAX_SAFE_INTEGER

    let result = 0
    if (first < second) {
      result = -1
    } else if (first > second) {
      result = 1
    }
    return order === 'desc' ? ~result : result
  }
}
```

---
title: useRef
tags:
  - react
emoji: 🎣
created: 2020-04-17T15:55:11.000Z
modified: 2020-04-17T15:55:11.000Z
---

- Docs: http://reactjs.org/docs/hooks-reference.html#useref
- TS/React docs: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/README.md#hooks

## TypeScript

When using useRef, you have two options when creating a ref container that does not have an initial value:

```ts
const ref1 = useRef<HTMLElement>(null!)
const ref2 = useRef<HTMLElement | null>(null)
```

The first option will make `ref1.current` read-only, and is intended to be passed in to built-in ref attributes that React will manage (because React handles setting the current value for you).

The second option will make `ref2.current` mutable, and is intended for "instance variables" that you manage yourself.

## Example

```tsx
import React, { useRef } from 'react'

export const TextInputWithFocusButton = () => {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = React.useRef<HTMLInputElement | null>(null)
  const onButtonClick = () => {
    // strict null checks need us to check if inputEl and current exist.
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus! ✅
    if (inputEl && inputEl.current) {
      inputEl.current.focus()
    }
  }
  return (
    <>
      {/* in addition, inputEl only can be used with input elements. Yay! */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
```

---
title: useReducer
tags:
  - react
emoji: 🎣
created: 2020-04-17T15:55:11.000Z
modified: 2020-04-17T15:55:11.000Z
---

- Docs: http://reactjs.org/docs/hooks-reference.html#usereducer
- TS/React docs: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/README.md#hooks

## Example

```tsx
import React, { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
```

## useImmer

For complex stuff, [useImmer](https://github.com/immerjs/use-immer) is a great option

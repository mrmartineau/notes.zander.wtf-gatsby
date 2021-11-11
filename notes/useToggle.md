---
title: useToggle React Hook
tags:
  - react
emoji: ⚛
created: 2021-07-12T06:06:50.377Z
modified: 2021-07-12T06:07:21.645Z
---

```tsx
import { Dispatch, DispatchWithoutAction } from 'react'
import { useCallback, useState } from 'react'

/**
 * @name useToggle
 * @description Toggle something
 */
export const useToggle = (
  initialState = false,
): [boolean, DispatchWithoutAction, Dispatch<boolean>] => {
  // Initialize the state
  const [state, setToggleState] = useState(initialState)

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setToggleState((state) => !state), [])

  return [state, toggle, setToggleState]
}
```

## Usage

```ts
const [isToggled, toggle, setToggleState] = useToggle()

setToggleState(true)
setToggleState(false)
toggle()

if (isToggled) {
  // do something
}
```

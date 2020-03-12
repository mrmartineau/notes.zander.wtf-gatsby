---
title: Theme UI
tags:
  - react
---

## Theme spec

https://theme-ui.com/theme-spec

## JSX pragma and the `sx` prop

https://theme-ui.com/sx-prop

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
```

## useThemeUI

https://theme-ui.com/use-theme-ui

```js
import { useThemeUI } from 'theme-ui'

export const MyComponent = () => {
  const { theme, colorMode, setColorMode } = useThemeUI()
  return <pre>{JSON.stringify(theme, null, 2)}</pre>
}
```

## Object styles

https://emotion.sh/docs/object-styles

### [Pseudo elements](https://github.com/system-ui/theme-ui/blob/master/packages/docs/src/pages/guides/object-styles.mdx#pseudo-elements)

```js
{
  "::before": {
    content: '""',
    display: 'block',
    width: 32,
    height: 32,
    backgroundColor: 'tomato',
  }
}
```

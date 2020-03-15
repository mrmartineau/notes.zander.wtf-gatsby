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

## Tips

### Object styles

- https://theme-ui.com/guides/object-styles
- https://emotion.sh/docs/object-styles

#### Reference the theme within

```js
{
  mx: theme => `-${theme.space[2]}`,
},
```

#### [Pseudo elements](https://theme-ui.com/guides/object-styles#pseudo-elements)

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

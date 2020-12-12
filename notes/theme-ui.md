---
title: Theme UI
tags:
  - react
emoji: 🎨
link: 'https://theme-ui.com'
created: 2020-02-27T23:02:00.000Z
modified: 2020-06-11T14:47:15.000Z
---

## Theme spec

https://theme-ui.com/theme-spec

## JSX pragma and the `sx` prop

https://theme-ui.com/sx-prop

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
```

## Packages and methods

### useThemeUI

https://theme-ui.com/use-theme-ui

```js
import { useThemeUI } from 'theme-ui'

export const MyComponent = () => {
  const { theme, colorMode, setColorMode } = useThemeUI()
  return <pre>{JSON.stringify(theme, null, 2)}</pre>
}
```

## Using custom theme object values in `sx` prop

Use the `variant` key as documented [here](https://theme-ui.com/theme-spec#variants).

```jsx
// your theme object
const theme = {
  motion: {
    defaultTransition: {
      transition: 'all 300ms ease-in-out',
    },
  },
}

// use the `variant` key
const Link = () => <a sx={{ variant: 'motion.defaultTransition' }}>Click me</a>

// could also do this
const Link = () => (
  <a sx={{ transition: (theme) => theme.motion.defaultTransition.transition }}>
    Click me
  </a>
)
```

### @theme-ui/color

https://theme-ui.com/packages/color

```js
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { darken, lighten } from '@theme-ui/color'
export default (props) => (
  <div
    {...props}
    sx={{
      color: darken('primary', 0.25),
      bg: lighten('primary', 0.875),
    }}
  />
)
```

## Using TypeScript

### Adding an sx prop to a custom component

This example allows a user to pass an `sx` prop to a child component. In order to do that, you'll need an interface from `theme-ui`: [`SxStyleProp`]()

```tsx
import React, { FunctionComponent } from 'react'
import { SxStyleProp } from 'theme-ui'
import { Heading } from 'theme-ui'

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface MassiveTitleProps {
  sx?: SxStyleProp
  as?: HeadingTags
}

export const MassiveTitle: FunctionComponent<MassiveTitleProps> = ({
  sx,
  as = 'h1',
  children,
}) => {
  return (
    <Heading
      as={as}
      sx={{
        color: 'primary',
        ...sx,
      }}
    >
      {children}
    </Heading>
  )
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

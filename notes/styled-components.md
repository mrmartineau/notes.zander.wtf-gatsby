---
title: Styled Components
tags:
  - react
  - typescript
emoji: 💅
created: 2020-02-27T23:02:00.000Z
modified: 2020-05-19T08:25:55.000Z
---

## Basic component

```ts
import styled from 'styled-components'

interface ComponentProps {}

export const Component = styled.div<ComponentProps>``
```

### Tip

You can get the props at the top of the component so you don't have to do it in every property that needs them, avoiding all the copy pasting.

```js
import styled, { css } from 'styled-components'

// 👎 instead ofgetting the props in every line:
const Post = styled.article`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.bodyText};
`

// 👍 get them once at the root to make your code cleaner
const Post = styled.article`
  ${({ theme }) =>
    css`
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.bodyText};
    `}
`
```

h/t https://twitter.com/NikkitaFTW/status/1262423045874089990

#### Even better version:

```js
import styled, { css } from 'styled-components'

const Post = styled.article({ theme }) => css`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.bodyText};
`)
```

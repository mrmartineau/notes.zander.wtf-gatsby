---
title: Storybook
tags:
  - testing
---

## Stories

```jsx
import React, { FunctionComponent } from 'react'
import { ArticlePage } from './ArticlePage'

export default {
  title: 'Components|ArticlePage',
  component: ArticlePage
}

export const image: FunctionComponent = () => <ArticlePage />
```

### MDX

    import { Meta, Story, Preview, Anchor } from '@storybook/addon-docs/blocks'

    <Meta title="Theme UI|Components" />

    ---

    <Anchor storyId="the-title--example" />

    # Title

    ## Example code

    ```jsx
    some code
    ```

#### Story inside MDX

```js
<Preview>
  <Story name="Example"></Story>
</Preview>
```

## Config

[Declarative Storybook configuration](https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78)

```js
// main.js
module.exports = {
  stories: ['../src/**/*.stor(ies|y).(tsx|ts|js|jsx|mdx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-docs/preset',
    '@storybook/addon-links/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    'storybook-addon-color-mode/register',
    'storybook-addon-paddings'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.stories\.tsx/,
      use: [{ loader: 'story-description-loader', options: { isTSX: true } }]
    })
    return config
  }
}
```

```js
// preview.js
import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { Global } from '@emotion/core'
import { theme } from '@curve-technology/web-ds'
import React, { Fragment } from 'react'
import { withThemeProvider } from 'storybook-addon-color-mode'
import { withPaddings } from 'storybook-addon-paddings'

addParameters({
  colorMode: {
    modes: {
      dark: {
        name: 'Dark'
      }
    },
    defaultMode: 'default'
  }
})
addParameters({
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '64px' }
  ]
})
addDecorator(withPaddings)
addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withThemeProvider(theme))
```

### Useful addons

- [storybook-addon-paddings](https://github.com/rbardini/storybook-addon-paddings)
- [story-description-loader](https://github.com/izhan/storybook-description-loader)
- [storybook-addon-color-mode](https://gitlab.com/joshrasmussen/storybook-addons/-/tree/next/packages%2Fcolor-mode)

```sh
yarn add --dev @storybook/preset-typescript @storybook/addon-docs/preset @storybook/addon-links/register @storybook/addon-actions/register @storybook/addon-backgrounds/register @storybook/addon-a11y/register @storybook/addon-knobs/register @storybook/addon-viewport/register storybook-addon-color-mode/register storybook-addon-paddings story-description-loader
```

With Gatsby: https://www.gatsbyjs.org/docs/visual-testing-with-storybook/

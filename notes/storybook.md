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

```js
// 
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

### Useful addons

- [storybook-addon-paddings](https://github.com/rbardini/storybook-addon-paddings)
- [story-description-loader](https://github.com/izhan/storybook-description-loader)
- [storybook-addon-color-mode](https://gitlab.com/joshrasmussen/storybook-addons/-/tree/next/packages%2Fcolor-mode)

```sh
yarn add --dev @storybook/preset-typescript @storybook/addon-docs/preset @storybook/addon-links/register @storybook/addon-actions/register @storybook/addon-backgrounds/register @storybook/addon-a11y/register @storybook/addon-knobs/register @storybook/addon-viewport/register storybook-addon-color-mode/register storybook-addon-paddings story-description-loader
```

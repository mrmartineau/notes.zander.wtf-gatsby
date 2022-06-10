---
title: Storybook
tags:
  - testing
  - storybook
emoji: 📖
link: 'https://storybook.js.org'
created: 2020-02-27T23:02:00.000Z
modified: 2021-01-16T10:31:32.000Z
---

## Stories

This is a good starter that includes most things you'll need when creating stories.

```tsx
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MyComponent, MyComponentProps } from './myComponent'
// import docs from './myComponent.docs.mdx'

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
  /* argTypes: {
    // Select element
    variant: {
      name: 'Variant',
      defaultValue: 'large',
      control: {
        type: 'select',
        options: ['large', 'small']
      },
    },
    // Radio
    variant: {
      name: 'Variant',
      defaultValue: 'large',
      control: {
        type: 'radio',
        options: ['large', 'small']
      },
    },
  }, */
} as Meta

const Template: Story<MyComponentProps> = (args) => <Zander {...args} />

export const Standard = Template.bind({})
Standard.args = {}

/* Standard.decorators = [
  (Story) => (
    <Box sx={{ color: 'bright' }}>
      <Story />
    </Box>
  ),
]*/
/* Standard.parameters = {
  backgrounds: {
    default: 'blue',
  },
}*/
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

```jsx
<Preview>
  <Story name="Example"></Story>
</Preview>
```

## Config

[Declarative Storybook configuration](https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78)

```js
// main.js
const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')

module.exports = {
  stories: [
    '../docs/**/*.stories.mdx',
    '../src/**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-paddings',
    'storybook-addon-color-mode/register',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries')
    )
    config.resolve.modules.push(SRC_PATH)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ]
    return config
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'none',
  },
}
```

```js
// preview.js
import React from 'react'
import { withPaddings } from 'storybook-addon-paddings'
import { ThemeProvider } from 'theme-ui'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import theme from '../src/theme/index.js'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  // Set some different background colours
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'peach', value: 'hsla(36, 100%, 92%, 1)' },
      { name: 'pink', value: 'hsla(0, 69%, 91%, 1)' },
      { name: 'green', value: 'hsla(114, 70%, 93%, 1)' },
      { name: 'light blue', value: 'hsla(199, 100%, 93%, 1)' },
      { name: 'blue', value: 'hsl(240, 100%, 22%)' },
      { name: 'dark', value: 'hsl(109, 0%, 16%)' },
    ],
  },
  viewport: {
    viewports: {
      // A few custom viewports
      iphoneSe: {
        name: 'iPhone SE',
        styles: {
          height: '667px',
          width: '375px',
        },
        type: 'mobile',
      },
      iphone12Mini: {
        name: 'iPhone 12 Mini',
        styles: {
          height: '812px',
          width: '375px',
        },
        type: 'mobile',
      },
      // the default viewports from Storybook
      ...INITIAL_VIEWPORTS,
    },

    // storybook-addon-paddings
    paddings: [
      { name: 'Small', value: '16px' },
      { name: 'Medium', value: '32px', default: true },
      { name: 'Large', value: '64px' },
    ],

    // storybook-addon-color-mode
    colorMode: {
      defaultMode: 'default',
      modes: {
        light: {
          name: 'Light',
        },
      },
    },
  },
  options: {
    // custom sidebar sorting
    storySort: {
      order: [
        'Introduction',
        ['Welcome', 'Getting Started'],
        'Docs',
        'Advanced',
        'Typography',
        'Layout',
        'Design System',
        'Page sections',
        'Atoms',
        'Components',
      ],
    },
  },
}

export const decorators = [
  withPaddings,
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/'
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}
```

### Useful addons

- [storybook-addon-paddings](https://github.com/rbardini/storybook-addon-paddings)
- [story-description-loader](https://github.com/izhan/storybook-description-loader)
- [storybook-addon-color-mode](https://gitlab.com/joshrasmussen/storybook-addons/-/tree/next/packages%2Fcolor-mode)

```sh
yarn add --dev @storybook/preset-typescript @storybook/addon-docs/preset @storybook/addon-links/register @storybook/addon-actions/register @storybook/addon-backgrounds/register @storybook/addon-a11y/register @storybook/addon-knobs/register @storybook/addon-viewport/register storybook-addon-color-mode/register storybook-addon-paddings story-description-loader
```

With Gatsby: https://www.gatsbyjs.org/docs/visual-testing-with-storybook/

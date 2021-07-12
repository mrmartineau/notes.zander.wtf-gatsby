---
title: Plop
link: https://github.com/plopjs/plop
created: 2020-10-19T14:01:20.000Z
modified: 2021-07-12T05:58:17.639Z
tags:
  - devops
---

## `plopfile.js`

```js
const generateComponent = require('./generate/component')
const generatePage = require('./generate/page')
const generateIcon = require('./generate/icon')
const generateUtil = require('./generate/util')
const generateHook = require('./generate/hook')

module.exports = function (plop) {
  plop.setHelper('obj', (text) => `{{ ${text} }}`)
  plop.setHelper('propsHelper', (text) => `{${text}}`)

  plop.setGenerator('component', generateComponent)
  plop.setGenerator('page', generatePage)
  plop.setGenerator('icon', generateIcon)
  plop.setGenerator('util', generateUtil)
  plop.setGenerator('hook', generateHook)
}
```

## Component generator

### `./generate/component/index.js`

```js
module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the Component?",
      validate: function (value) {
        let message = true
        if (!/.+/.test(value)) {
          message = console.error('Missing', 'you must define a component name')
        } else if (value.length < 3) {
          message = console.error(
            'Too Short',
            `"${value}" is not descriptive enough`,
          )
        }
        return message
      },
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: './generate/component/templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './generate/component/templates/component.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './generate/component/templates/story.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './generate/component/templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.docs.mdx',
        templateFile: './generate/component/templates/docs.hbs',
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        pattern: /(\/\* -- component: insert above here -- \*\/)/gi,
        template: `export { {{pascalCase name}} } from './{{pascalCase name}}'\n$1`,
      },
    ]
  },
}
```

### `./generate/component/templates/index.hbs`

```hbs
export { {{pascalCase name}} } from './{{pascalCase name}}'
```

### `./generate/component/templates/component.hbs`

```hbs
import React from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'

export interface {{pascalCase name}}Props {
  sx?: ThemeUIStyleObject
  // children: ReactNode
}

export const {{pascalCase name}} = ({ sx }: {{pascalCase name}}Props): JSX.Element => {
  return (
    <Box sx={{ obj "...sx" }}>
      <Box>{{name}}</Box>
    </Box>
  )
}
```

### `./generate/component/templates/docs.hbs`

    # {{pascalCase name}}

    ```js
    import { {{pascalCase name}} } from './components'
    ```

    ```tsx
    <{{pascalCase name}}>Some content</{{pascalCase name}}>
    ```

### `./generate/component/templates/story.hbs`

```js
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { {{pascalCase name}}, {{pascalCase name}}Props } from './{{pascalCase name}}'
import docs from './{{pascalCase name}}.docs.mdx'

export default {
  title: 'Components/{{pascalCase name}}',
  component: {{pascalCase name}},
  parameters: {
    docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story<{{pascalCase name}}Props> = (args) => <{{pascalCase name}} {...args} />

export const Standard = Template.bind({})
Standard.args = {

}

/* Standard.decorators = [
  (Story) => (
    <Box sx={{{ obj "color: 'bright'" }}}>
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

### `./generate/component/templates/test.hbs`

```hbs
import React from 'react'
import { render } from '@testing-library/react'
import { {{pascalCase name}} } from './{{pascalCase name}}'

describe('Given a {{pascalCase name}} component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<{{pascalCase name}} />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
```

## Other resources

- https://github.com/react-boilerplate/react-boilerplate/tree/master/internals/generators
- https://github.com/fabien0102/gatsby-starter/tree/master/generators

## Alternatives to Plop

https://github.com/busterc/microgen

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './Button'
import docs from './Button.docs.mdx'
import { Box } from 'theme-ui'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: { page: docs },
  },
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <Box sx={{ p: 50 }}>
        <Story />
      </Box>
    ),
  ],
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const primary = Template.bind({})
primary.args = {
  children: 'Click me',
  variant: 'primary',
  isLoading: false,
  disabled: false,
  isDisabled: false,
  disabledText: 'Not ready yet',
}
export const disabled = Template.bind({})
disabled.args = {
  ...primary.args,
  disabled: true,
}
export const loading = Template.bind({})
loading.args = {
  ...primary.args,
  isLoading: true,
}
export const loadingPrimarySmall = Template.bind({})
loadingPrimarySmall.args = {
  ...loading.args,
  variant: 'primarySmall',
}

export const notReady = Template.bind({})
notReady.args = {
  ...primary.args,
  isDisabled: true,
}

export const primarySmall = Template.bind({})
primarySmall.args = {
  ...primary.args,
  variant: 'primarySmall',
}

export const secondary = Template.bind({})
secondary.args = {
  ...primary.args,
  variant: 'secondary',
}
export const secondarySmall = Template.bind({})
secondarySmall.args = {
  ...primary.args,
  variant: 'secondarySmall',
}

export const tertiary = Template.bind({})
tertiary.args = {
  ...primary.args,
  variant: 'tertiary',
}
export const tertiarySmall = Template.bind({})
tertiarySmall.args = {
  ...primary.args,
  variant: 'tertiarySmall',
}

export const quartinary = Template.bind({})
quartinary.args = {
  ...primary.args,
  variant: 'quartinary',
}
export const quartinarySmall = Template.bind({})
quartinarySmall.args = {
  ...primary.args,
  variant: 'quartinarySmall',
}

export const ghost = Template.bind({})
ghost.args = {
  ...primary.args,
  variant: 'ghost',
}
export const ghostSmall = Template.bind({})
ghostSmall.args = {
  ...primary.args,
  variant: 'ghostSmall',
}

export const copy = Template.bind({})
copy.args = {
  ...primary.args,
  variant: 'copy',
}

export const link = Template.bind({})
link.args = {
  ...primary.args,
  variant: 'link',
}
export const unstyled = Template.bind({})
unstyled.args = {
  ...primary.args,
  variant: 'unstyled',
}

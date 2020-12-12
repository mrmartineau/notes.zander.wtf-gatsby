---
title: Coding standards
emoji: ✅
created: 2020-03-18T17:40:43.000Z
modified: 2020-04-17T15:55:11.000Z
---

#### toc

## Naming Conventions

The objective of this document is to help when naming things and make the codebase consistent and easier to read.

### Name Rules

🥳 Names should be always be **Descriptive** & **Succinct**. 🎉

😑 Names should **not** be _Obscure_ or _Abbreviated_ ❌

### File Names

| Name               | Convention                                      | Example              |
| :----------------- | :---------------------------------------------- | :------------------- |
| Index file         | `index.(ts|js)`                                 | `index.ts`           |
| React component    | `ComponentName.(tsx|ts|js|jsx)`                 | `Button.tsx`         |
| Test file          | `ComponentName.test.(tsx|ts|js|jsx)`            | `Button.test.tsx`    |
| TypeScript types   | `File.models.ts`                                | `Button.models.ts`   |
| Styles (CSS-in-JS) | `ComponentName.styles.(ts|js)`                  | `Button.styles.ts`   |
| Storybook          | `ComponentName.stor(ies|y).(tsx|ts|js|jsx|mdx)` | `Button.stories.tsx` |

### HTML

| Name            | Convention   | Example                          |
| :-------------- | :----------- | :------------------------------- |
| Data Attributes | `kebab-case` | `data-testid="button-element"`   |
| path            | `kebab-case` | `www.fairfx.com/this/is-a-path/` |

### TypeScript

| Name      | Convention      | Example                                                           |
| :-------- | :-------------- | :---------------------------------------------------------------- |
| interface | `PascalCase`    | `interface DescriptiveInterfaceName`                              |
| variables | `camelCase`     | `const descriptiveVariableName`                                   |
| function  | `camelCase`     | `descriptiveFunctionName(){ ... }`                                |
| class     | `PascalCase`    | `class DescriptiveClassName { ... }`                              |
| type      | `PascalCase`    | `type DescriptiveTypeName`                                        |
| enums     | `PascalCase`    | `enum DescriptiveEnumName { CONSTANT_A, CONSTANT_B, CONSTANT_C }` |
| constant  | `CONSTANT_CASE` | `DESCRIPTIVE_CONSTANT_NAME`                                       |

### React

| Name                      | Convention        | Example              |
| :------------------------ | :---------------- | :------------------- |
| Component Props Interface | `PascalCaseProps` | `ComponentNameProps` |
| Component State Interface | `PascalCaseState` | `ComponentNameState` |
| Component Copy Interface  | `PascalCaseCopy`  | `ComponentNameCopy`  |

#### Function Component

```jsx
import React, { FunctionComponent } from 'react'

const DescriptiveComponentName: FunctionComponent<IDescriptiveComponentNameProps> = (
  props
) => {
  return ()
}
```

#### Class Component

```jsx
import React, { Component } from 'react'

class DescriptiveComponentName<
  IDescriptiveComponentNameProps,
  IDescriptiveComponentNameState
> extends Component {
  render () {
    return ()
  }
}
```

## Code Structure

The objective of this document is to help when structuring your code, to make the codebase more consistent, reusable and easy to read.

This is a guide on how to structure your code.

## Linting and code styling 💅

- ❗️Code to be formatted using [prettier](https://prettier.io)
- ‼️ All code should follow the `TypeScript` standard and always make use of `types`

### React

#### Composability

[![react_composition_vs_inheritance](https://img.shields.io/badge/react_composition_vs_inheritance-Docs-61DAFB.svg?style=for-the-badge&logo=react)](https://reactjs.org/docs/composition-vs-inheritance.html)

Components should ideally be composable, this makes them more flexible and reusable.

### General rules about writing new components 🚦

A standard practice is to avoid having too much functionality in one page with gigantic renders.
Each file should have 1 set of functionality.
Everything else should be broken into a new component and be included as a child.

## Generic

### Imports

Avoid `* imports`, it's best to explicitly define what you want to export.

### Types

Avoid a type of `any` it is normally _not_ allowed.

### Spread Syntax

[![Spread_Syntax](https://img.shields.io/badge/Spread_Syntax-Docs-F7DF1E.svg?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Use nested spread syntax when appropriate. Code should be readable, don't use nested spread syntax if it becomes hard to read.

#### Preferable Example ✅

```tsx
class MyComponent extends Component {
  public render() {
    const {
      myProp,
      nestedProps: { myNestedProp },
    } = this.props
  }
}
```

#### Also Good ✅

```tsx
class MyComponent extends Component {
  public render() {
    const { myProp, nestedProps } = this.props
    const { myNestedProp } = nestedProps
  }
}
```

#### Ok, if it's only referenced once ✅

```tsx
class MyComponent extends Component {
  public render() {
    return this.props.nestedProps.myNestedProp.myMoreNestedProp
  }
}
```

## File Structure rules 🚨👮

### Description ℹ️

These rules **must** be followed by all team members in order to have a **consistent** and **well structured** codebase.

#### Pages

```
/src/client/pages
    /PageName
        index.ts
        PageName.tsx
        PageName.test.tsx
        PageName.schema.json
    /OtherPageName
        OtherPageName.tsx
```

Components should by default be placed in `/components` directory.

Components should be grouped into folders logically. If they are only used once and they are used within another component, they should be colocated with their parent component.

#### Example:

```
/src/client/components
    /ParentComponent
        index.ts
        ParentComponent.story.ts
        ParentComponent.styles.ts
        README.md
        /ChildComponent
            ChildComponent.tsx
            ChildComponent.models.ts
            ChildComponent.styles.ts
            ChildComponent.test.tsx
            ChildComponent.validate.ts
        /OtherChildComponent
          index.ts
          OtherChildComponent.tsx
          OtherChildComponent.test.tsx
        README.md
    /ReusableComponent
        index.ts
        README.md
        ReusableComponent.tsx
        ReusableComponent.story.ts
        ReusableComponent.test.tsx
    /SomeOtherComponentOnlyUsedOnce
        index.ts
        README.md
        SomeOtherComponentOnlyUsedOnce.tsx
        SomeOtherComponentOnlyUsedOnce.story.ts
        SomeOtherComponentOnlyUsedOnce.test.tsx
```

#### 👩🏻‍🏫 **Storybook**

Components should be built and tested with a `ComponentName.story.tsx` and have a `README.md` file included.

#### 👩🏻‍🔬 **Test**

Where possible `ComponentName.test.tsx` other files like utils will need a `UtilName.test.ts`.

#### 💁🏻‍♀️ **Styled Component**

Separate styles from the main code, styles should live in `ComponentName.styles.ts`.

#### 👷🏻‍♀️ **Models**

Separate interfaces and types from the main code, models should live in `ComponentName.models.ts`

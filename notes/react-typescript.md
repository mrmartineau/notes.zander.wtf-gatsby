---
title: React TypeScript
tags:
  - react
  - typescript
emoji: ⚛
created: 2021-03-09T12:42:11.000Z
modified: 2021-11-11T11:54:45.763Z
---

[React TypeScript cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) is my bible for all React/TypeScipt things

## Functional components

1. Your own types
1. `VoidFunctionComponent` or `VFC`
1. `FunctionComponent` or `FC`

### 1. Your own type

This is the preferred method, as described [here](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/), for typing your React components.

```tsx
interface AppProps {
  message: string
}

const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>
```

If you need to type `children`, you can add the types like so:

```tsx
interface AppProps {
  message: string
  children: ReactNode // or whatever type you want
}

const App = ({ message, children }: AppProps): JSX.Element => (
  <div>
    {message} {children}
  </div>
)
```

### 2. `FunctionComponent` or `FC`

**Using `FunctionComponent` or `FC` is discouraged because it defines `children` as an optional prop.** In most cases you would want to be explicit about how `children` are used. It also defines `children` as `ReactNode` which is a very broad type. So you may want to define `children` as `ReactText` instead which is `number | string`.

```tsx
interface AppProps {
  message: string
}

const App: FC<AppProps> = ({ message }) => <div>{message}</div>
```

### 3. `VoidFunctionComponent` or `VFC`

Using `VoidFunctionComponent` or `VFC` is slightly better than `FunctionComponent` because you have to explicitly define `children` type, but if you're doing that, you might as well use option 1 above instead.

```tsx
interface AppProps {
  message: string
}

const App: FC<AppProps> = ({ message }) => <div>{message}</div>
```

## Basic prop type examples

```ts
type AppProps = {
  message: string
  count: number
  disabled: boolean
  /** array of a type! */
  names: string[]
  /** string literals to specify exact string values, with a union type to join them together */
  status: 'waiting' | 'success'
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
  obj: object
  obj2: {} // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string
    title: string
  }
  /** array of objects! (common) */
  objArr: {
    id: string
    title: string
  }[]
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere
  }
  dict2: Record<string, MyTypeHere> // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType
}
```

## Useful prop type examples

```ts
export declare interface AppProps {
  children1: JSX.Element // bad, doesnt account for arrays
  children2: JSX.Element | JSX.Element[] // meh, doesn't accept strings
  children3: React.ReactChildren // despite the name, not at all an appropriate type; it is a utility
  children4: React.ReactChild[] // better, accepts array children
  children: React.ReactNode // best, accepts everything (see edge case below)
  functionChildren: (name: string) => React.ReactNode // recommended function as a child render prop type
  style?: React.CSSProperties // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement> // form events! the generic parameter is the type of event.target
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  props: Props & React.ComponentPropsWithoutRef<'button'> // to impersonate all the props of a button element and explicitly not forwarding its ref
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef> // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}
```

Read more [here](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#useful-react-prop-type-examples)

## Event handling

Some `class` based examples of TS event handling can be found at
https://fettblog.eu/typescript-react/events/

---
title: TypeScript
tags:
  - typescript
created: 2020-02-27T23:02:00.000Z
modified: 2021-04-22T18:06:11.062Z
---

- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- The tsconfig Schema: http://json.schemastore.org/tsconfig

## Built-in utility types

https://www.typescriptlang.org/docs/handbook/utility-types.html

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P]
}
// e.g.
Partial<Todo>

/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P]
}
// e.g.
Required<Props>

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
// e.g.
Readonly<Todo>

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
// e.g.
Pick<Todo, "title" | "completed">;

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T
}
// e.g.
Record<string, number>
Record<string, string[]>
Record<string, {
  age: string
}>

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T
// e.g.
Exclude<"a" | "b" | "c", "a">

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never
// e.g.
Extract<"a" | "b" | "c", "a" | "f">

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
// e.g.
Omit<Todo, "completed" | "createdAt">

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T
// e.g.
NonNullable<string | number | undefined>

/**
 * Constructs a tuple type from the types used in the parameters of a function type Type.
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
// e.g.
Parameters<(s: string) => void>

/**
 * Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).
 */
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never
// e.g.
ConstructorParameters<ErrorConstructor>

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
// e.g.
ReturnType<(s: string) => void>

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any

/**
 * Convert string literal type to uppercase
 */
type Uppercase<S extends string> = intrinsic

/**
 * Convert string literal type to lowercase
 */
type Lowercase<S extends string> = intrinsic

/**
 * Convert first character of string literal type to uppercase
 */
type Capitalize<S extends string> = intrinsic

/**
 * Convert first character of string literal type to lowercase
 */
type Uncapitalize<S extends string> = intrinsic

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> { }
```

## Custom types

```ts
// Convert specified properties of T to be optional
type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type NewType = WithOptional<OldInterface, 'date' | 'title'>
```

## Creating type definitions for npm packages

If an npm package does not provide types, it is advisable to add your own in a declaration file (`.d.ts`). Here is an example for the `sum-float` package.

```ts
// sum-float.d.ts
declare module 'sum-float' {
  export const SumFloat: (a: number, b: number) => number
  export const DecimalPart: (a: number) => number
}
```

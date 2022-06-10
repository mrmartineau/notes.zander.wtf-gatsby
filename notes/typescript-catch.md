---
title: TypeScript catch block errors
tags:
  - typescript
created: 2021-11-21T20:06:11.062Z
modified: 2021-12-06T15:20:48.665Z
link: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
---

## Basic example

This example does not extract logic from the catch block

```ts
try {
  // something that might throw
} catch (error: unknown) {
  // do something with the error message
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}
```

## Extract the error handling logic

```ts
const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}

const reportError = ({ message }: { message: string }) => {
  // send the error to our logging service...
}

try {
  throw new Error('Oh no!')
} catch (error) {
  const errorMessage = getErrorMessage(error)
  console.error(`🚀 ~ errorMessage`, errorMessage)

  // we'll proceed, but let's report it
  reportError({ message: errorMessage })
}
```

## More robust example

The above solution might not fit all cases, since many frameworks throw errors that comply to the `Error` api, but aren't instance of `Error`. [🔗](https://github.com/kentcdodds/kentcdodds.com/issues/206)

```ts
type ErrorWithMessage = {
  message: string
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) return maybeError

  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError))
  }
}

const getErrorMessage = (error: unknown) => {
  return toErrorWithMessage(error).message
}
```

### Usage

```ts
try {
  throw new Error('Oh no!')
} catch (error) {
  const errorMessage = getErrorMessage(error)
  console.error(`🚀 ~ errorMessage`, errorMessage)
  // we'll proceed, but let's report it
  reportError({ message: errorMessage })
}
```

Some very detailed info can be found at https://joefallon.net/2018/09/typescript-try-catch-finally-and-custom-errors/

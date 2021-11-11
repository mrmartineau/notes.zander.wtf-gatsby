---
title: React Error Boundary
link: https://reactjs.org/docs/error-boundaries.html
tags:
  - react
emoji: ⚛
created: 2021-11-11T12:22:44.100Z
modified: 2021-11-11T12:24:43.372Z
---

From the React docs on [Error boundaries](https://reactjs.org/docs/error-boundaries.html):

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

Use this component to wrap other components that might crash so errors can be caught.

## Basic example

```tsx
<ErrorBoundary>
  <Suspense fallback={<Loader />}>
    {/* A component that fetches data */}
  </Suspense>
</ErrorBoundary>
```

## Custom fallback component

A custom `fallback` component can be passed to the `ErrorBoundary` component, like so:

```tsx
<ErrorBoundary fallback={<div>Error loading the cohort list</div>}>
  <Suspense fallback={<Loader />}>
    {/* A component that fetches data */}
  </Suspense>
</ErrorBoundary>
```

### Source

```tsx
import React, { ReactNode } from 'react'
import { Alert } from 'theme-ui'

export interface ErrorBoundaryProps {
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      console.error(this.state.error)
      const fallback = this.props.fallback
      if (typeof fallback === 'string') {
        return <Alert variant="warning">{fallback}</Alert>
      } else if (fallback) {
        return fallback
      }

      return (
        <Alert variant="warning">
          Something went wrong. Please refresh the page and try again.
        </Alert>
      )
    }
    return this.props.children
  }
}
```

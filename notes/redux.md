---
title: Redux
tags:
  - react
created: 2020-02-27T23:02:00.000Z
modified: 2020-03-24T22:53:27.000Z
---

## Basic example

```jsx
// index.ts
import { connect } from 'react-redux'

import { Component, mapStateToProps, mapDispatchToProps } from './Component'

export const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedComponent)
```

```jsx
// Component.tsx
import React from 'react'
import { doClearQuery } from './some/file/of/action/creators'

const Component = ({ query, results, clearQuery }) => (
  <div>
    query: {query}
    <button onClick={clearQuery}>Clear</button>
    <ul>
      {results.map(result => (
        <li>
          <img src={result.url} alt={result.title} />
          {result.title}
        </li>
      ))}
    </ul>
  </div>
)

// mapStateToProps
// For our select function we're returning an object using
// the implicit return and wrapping it in `()`
const mapStateToProps = appState => ({
  results: appState.results,
  query: appState.query
})

// mapDispatchToProps
// We could also use object shorthand here to avoid
// building an object, as long as we're OK with the
// props being named the same thing
const mapDispatchToProps = { clearQuery: doClearQuery }
```

## Selectors

```js
export const getSignedInStatus = user => user.isSignedIn
export const getFullName = user => `${user.firstName} ${user.lastName}`
export const getUsername = user => user.username
```

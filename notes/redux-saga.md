---
title: Redux Saga
tags:
  - react
---

> An alternative side effect model for Redux apps

https://redux-saga.js.org
https://github.com/redux-saga/redux-saga/

## Routines

> Routines for redux-saga

https://github.com/afitiskin/redux-saga-routines

```js
import { createRoutine } from 'redux-saga-routines'

// creating routine
const routine = createRoutine('ACTION_TYPE_PREFIX')
```

### Access the action types

```js
routine.TRIGGER === 'ACTION_TYPE_PREFIX/TRIGGER'
routine.REQUEST === 'ACTION_TYPE_PREFIX/REQUEST'
routine.SUCCESS === 'ACTION_TYPE_PREFIX/SUCCESS'
routine.FAILURE === 'ACTION_TYPE_PREFIX/FAILURE'
routine.FULFILL === 'ACTION_TYPE_PREFIX/FULFILL'
```

You also have 5 action creators: trigger, request, success, failure, fulfill:

```js
routine.trigger(payload) === { type: 'ACTION_TYPE_PREFIX/TRIGGER', payload }
routine.request(payload) === { type: 'ACTION_TYPE_PREFIX/REQUEST', payload }
routine.success(payload) === { type: 'ACTION_TYPE_PREFIX/SUCCESS', payload }
routine.failure(payload) === { type: 'ACTION_TYPE_PREFIX/FAILURE', payload }
routine.fulfill(payload) === { type: 'ACTION_TYPE_PREFIX/FULFILL', payload }
```

### Reducer

```js
import { fetchData } from './routines'

const initialState = {
  data: null,
  loading: false,
  error: null
}

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case fetchData.TRIGGER:
      return {
        ...state,
        loading: true
      }
    case fetchData.SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case fetchData.FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case fetchData.FULFILL:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
```

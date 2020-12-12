---
title: Redux concepts
tags:
  - react
created: 2020-03-22T23:14:36.000Z
modified: 2020-03-24T22:53:27.000Z
---

> Notes made from reading the excellent: [Human Redux](https://reduxbook.com/) by [Henrik Joretag](https://joreteg.com/)

## Actions

“Actions are like news reports. Only report what matters; only report the facts.”

“it's a subtle but important thing to realise that actions should be used to report a thing that happened, not cause something to happen”

“One little "hack" to keep yourself writing actions this way is to make all your action types past-tense. So instead of calling an action `LOGIN_SUCCESS`, you'd call it `LOGIN_SUCCEEDED`.”

One call can be split into multiple actions, e.g. `FETCH_USERS`

### Initiate

```js
{
  type: 'FETCH_USERS_STARTED'
}
```

### Success

```js
{
  type: 'FETCH_USERS_SUCCEEDED',
  payload: [{ id: '1', name: 'Mary' }, { id: '2', name: 'Jane' }]
}
```

### Error

```js
{
  type: 'FETCH_USERS_FAILED', payload: 'connectionFailed'
}
```

“By convention, I always put these types of values in a property of the action called payload.”

## Reducers

“in Redux a reducer takes the starting state and an item to process, and return the new state”

### Reducers in Redux have a few simple rules:

1. Always return the state, even if you didn't change it, and even if it's just null. You may not return undefined.
2. If you change state at all, replace it (more on this later).
3. Every reducer processes every action even if it doesn't do anything with it.

“As it turns out, the Redux store only takes one reducer. …we can only pass Redux a single reducer when calling `createStore()` to set up our store. The reducer we pass to the store is often called the "root reducer."”

```js
import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'LOGGED_IN') {
    return {
      loggedIn: true
    }
  }

  return state
}

const store = createStore(reducer)
```

Combining Reducers
“The combineReducers function is a helper included with the Redux library. It takes an object where each key is a name, each value is a reducer function, and it returns a single reducer that combines them all into a single reducer.”

```js
// now we combine them into a single root reducer!
const rootReducer = combineReducers({
  floodCount: floodCountReducer,
  furniture: furnitureReducer
})

// we end up with a single reducer we can pass to `createStore()`
const store = createStore(rootReducer)
```

“Every reducer will get called for every action and whatever it returns will be the new state tracked by that reducer”

Redux reducer rule #1: You may never return `undefined`, so you always have to return something, even if it's `null`. Returning `null` means your function at least intentionally returned something. This check is a bit of a safeguard to protect you from scenarios where you accidentally forget to return, and inadvertently return `undefined`.

Redux reducer rule #2: If you change it, replace it. It is immutable.

These two examples accomplish the same thing:

```js
const newObject = Object.assign({}, obj, { something: 'some other value' })

const anotherNewObject = { ...obj, something: 'some other value' }
```

## Action Creators

1. An action creator is merely a function that returns an action object.
2. Redux includes a utility function called `bindActionCreators` for binding one or more action creators to the store's `dispatch()` function.
3. Calling an action creator does nothing but return an object, so you have to either bind it to the store beforehand, or dispatch the result of calling your action creator.

## Middleware and Store Enhancers

1. A store enhancer, ahem... "enhances" or adds some additional capabilities to the store. It could change how reducers process data, or how dispatch works.
2. Middleware is a function that lets us "tap into" what's happening inside Redux when we dispatch an action.
3. As it turns out, the ability to run middleware is added to our Redux store using a store enhancer that enhances the .dispatch() function so we don't have to hack it ourselves!

There's only one enhancer that's included in the Redux library itself. It's called `applyMiddleware()`, and we can pass it middleware functions to inject functionality into `.dispatch()`.

“Ideally, the code doing that dispatch shouldn't have to care what it has to do to clear the ToDos. In programming, ideally, we want to abstract to the point where we're fully expressing the intent, no more, no less. Anything else is what we'd call a "leaky abstraction.”

## connect()

“Selecting just what you need, nothing more.”

## Selectors
“A selector is simply this: A function that takes the current application state and returns the relevant portion needed by the view.”

“Selectors let us ask questions of our state.”

“A common mistake is to try to calculate and store this derived data as part of the application state. Believe me when I tell you: that is a mistake!”

“It's essential to understand that what createSelector returns is still just a selector function that takes the entire application state as an argument and returns the result of the last function. It's just a more efficient function.”

“Anytime you find yourself updating a "calculated" or "derived" value as part of handling a particular action type in a reducer, you should probably be deriving that answer using a selector instead.”

## Data fetching

How would the ideal data fetching approach work?

1. Fetch data we know we need up front and cache it.
2. Retain the ability to use the presence of a particular component as a factor that helps determine if we should fetch, but still only fetch if data is stale.
3. Be able to automatically re-fetch data just because it's old, without requiring any action by the user.
4. Be able to automatically re-try failed data fetches behind the scenes and still show current data, as long as it's not too stale.

#### The reducers stored state that was structured like this:

```js
const state = {
  // the actual data, the payload of the successful requests
  data: null,

  // a flag to check whether currently loading
  loading: false,

  // timestamp of last successful fetch
  lastFetch: null,

  // timestamp of last error
  lastError: null,

  // The type of error that occurred
  error: null
}
```

#### The reducers would then do this type of thing:

```js
const reducer = (state, action) => {
  if (action.type === 'SUCCESS') {
    return Object.assign({}, data, {
      data: action.payload,
      // CAVEAT: Using Date.now() here
      // makes the reducer impure. Personally,
      // I don't mind, but it could certainly be
      // argued that this value should be passed
      // in as part of the action instead.
      lastFetch: Date.now(),
      loading: false,

      // clear any previous error data
      lastError: null,
      error: null
    })
  }

  // other conditions

  return state
}
```

## Routing

Use Redux to manage url state as well

```js
// Update Redux if we navigated via browser's back/forward
// most browsers restore scroll position automatically
// as long as we make content scrolling happen on document.body
window.addEventListener('popstate', () => {
  // here `doUpdateUrl` is an action creator that
  // takes the new url and stores it in Redux.
  store.dispatch(doUpdateUrl(window.location.pathname))
})

// The other part of the two-way binding is updating the displayed
// URL in the browser if we change it inside our app state in Redux.
// We can simply subscribe to Redux and update it if it's different.
store.subscribe(() => {
  const { pathname } = store.getState().routing
  if (location.pathname !== pathname) {
    window.history.pushState(null, '', pathname)
    // Force scroll to top this is what browsers normally do when
    // navigating by clicking a link.
    // Without this, scroll stays wherever it was which can be quite odd.
    document.body.scrollTop = 0
  }
})
```

Reducer

```js
// starting state for our URL pathname reducer
const initialState = {
  pathname: typeof location !== 'undefined' ? location.pathname : '/'
}

// the reducer itself
const urlReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_URL') {
    return { pathname: action.payload }
  }
  return state
}

// an action creator for updating it
const doUpdateUrl = pathname => ({ type: 'UPDATE_URL', payload: pathname })
```

## Persisting state

use money-clip for persisting to localStorage
use idb-keyval for IndexDB

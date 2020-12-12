---
title: Redux Saga
tags:
  - react
created: 2020-03-22T23:14:36.000Z
modified: 2020-03-24T22:53:27.000Z
---

> An alternative side effect model for Redux apps

https://redux-saga.js.org
https://github.com/redux-saga/redux-saga/

## Routines

> Routines for redux-saga

https://github.com/afitiskin/redux-saga-routines

```js
import { createRoutine } from 'redux-saga-routines'

const fetchData = createRoutine('FETCH_DATA')
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
import produce from 'immer'
import { fetchData } from './routines'

const initialState = {
  data: null,
  loading: false,
  error: null
}

export const exampleReducer = (
  state = initialState,
  action: ExampleActionInterface
) =>
  produce(state, draft => {
    switch (action.type) {
      case fetchData.REQUEST:
        draft.loading = true
        break
      case fetchData.SUCCESS:
        draft.loading = false
        draft.data = action.payload
        break
      case fetchData.FAILURE:
        draft.loading = false
        draft.error = true
        break
    }
  })
```

### Sagas

```js
export function* fetchDataRequest(
  { payload },
) {
  const { fromDate, toDate } = payload;
  try {
    const walletId = yield select(getWalletId);
    const { data } = yield call([walletAdapter, 'requestPendingTransactions'], {
      walletId,
      fromDate,
      toDate,
    });

    yield put(getPendingTransactions.success(transformTransactionValues(data)));

  } catch (error) {
    yield put(getPendingTransactions.failure(error));
  }
}

export function* walletSagas() {
  yield takeEvery(
    getPendingTransactions.REQUEST,
    getPendingTransactionsRequest as any
  );
}
```

---
title: Firebase
created: 2021-04-22T17:45:56.352Z
modified: 2021-07-12T05:59:03.092Z
tags:
  - services
  - APIs
---

## Client side

Initialise the app like so:

https://firebase.google.com/docs/web/setup#default-hosting-site

```ts
// firebase.ts
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const FIREBASE_CONFIG = {
  apiKey: '{api key}',
  authDomain: '{authDomain}',
  databaseURL: '{databaseURL}',
  projectId: '{app name}',
  storageBucket: '{storageBucket}',
  messagingSenderId: '{messagingSenderId}',
  appId: '{appId}',
  measurementId: '{measurementId}',
}

firebase.initializeApp(FIREBASE_CONFIG)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const functions = firebase.app().functions('europe-west2') // set the region globally

export { firebase }
```

### Hosting

https://firebase.google.com/docs/hosting/full-config

## Functions

https://firebase.google.com/docs/hosting/functions#direct_hosting_requests_to_your_function
https://github.com/firebase/functions-samples/issues/395#issuecomment-635445763
https://firebase.google.com/docs/functions/callable
Testing functions: https://firebase.google.com/docs/functions/local-shell#invoke_https_callable_functions

## Firestore

Various Firestore helpers and utils to make our lives easier

## Firestore helpers

### `firestoreDataPoint`

This helper function exposes a 'typed' version of `firestore().collection(collectionPath)`. Pass it a collectionPath string as the path to the collection in firestore. Pass it a type argument representing the 'type' (schema) of the docs in the collection

```ts
import { firestoreDataPoint } from './utils'

firestoreDataPoint<FirestoreUser>('users')
```

## Document helpers

### `firestoreUser`

Returns reference to that user's Firestore document. Can then be used to `.get()` or `.set()` data for that document.

> This uses `firestoreDataPoint` internally

```ts
import { firestoreUser } from './utils'

firestoreUser('xyz123').get()
```

```ts
import { firebase, firestore } from '../../config'
import { FirestoreUser } from '../../types/firestore.models'

/**
 * @name firestoreConverter
 * @description This helper function pipes your types through a firestore converter
 */
export const firestoreConverter = <
  T
>(): firebase.firestore.FirestoreDataConverter<T> => ({
  toFirestore: (data: Partial<T>) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as T,
})

/**
 * @name firestoreDataPoint
 * @param collectionPath e.g. 'users'
 * @description This helper function exposes a 'typed' version of firestore().collection(collectionPath)
 * Pass it a collectionPath string as the path to the collection in firestore
 * Pass it a type argument representing the 'type' (schema) of the docs in the collection
 */
export const firestoreDataPoint = <T>(
  collectionPath: string,
): firebase.firestore.CollectionReference => {
  return firestore
    .collection(collectionPath)
    .withConverter(firestoreConverter<T>())
}

/**
 * @name firestoreUser
 * @param uid {string} e.g. a user's UID
 * @returns reference to that user's Firestore document
 */
export const firestoreUser = (uid: string) =>
  firestoreDataPoint<FirestoreUser>('users').doc(uid)
```

```tsx
import { useEffect, useState } from 'react'
import { useUserContext } from '../providers'
import { FirestoreUser } from '../types/firestore.models'
import { firestoreUser } from '../utils'

/**
 * @name useFirestoreUserData
 * @description Returns all user data from Firestore
 */
export const useFirestoreUserData = (): FirestoreUser | undefined => {
  const { uid } = useUserContext()
  const [userInfo, setUserInfo] = useState<FirestoreUser | undefined>()

  useEffect(() => {
    if (uid) {
      firestoreUser(uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log('User Document data:', doc.data())
            setUserInfo(doc.data() as FirestoreUser)
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
    }
  }, [uid])

  return userInfo
}
```

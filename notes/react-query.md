---
title: React Query
link: https://react-query.tanstack.com
tags:
  - react
created: 2021-03-26T12:50:12.000Z
modified: 2021-07-12T06:04:21.567Z
---

## useQuery

Given a fetch function like this (that uses [axios](axios.html)):

```ts
import axios from 'axios'
import urlJoin from 'proper-url-join'

export interface APIResponse<T> {
  status?: number
  success: boolean
  data?: T
  error?: ErrorResponse
}
export interface ErrorResponse {
  message: string
  data?: {
    errors?: unknown
    error?: unknown
  }
}

interface RequestModel {
  path: string
}

export const getSomeData = async <Response>({
  path,
}: RequestModel): Promise<APIResponse<Response>> => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: urlJoin('https://mysite.com', path),
    })
    return data
  } catch (error) {
    throw new Error(error.message || 'error.unknown')
  }
}
```

This is how you might use react-query

```ts
import { useQuery, UseQueryResult } from 'react-query'

interface ResponseModel {
  data: {
    key: string
  }
}
type ResponseUseQueryModel = UseQueryResult<ResponseModel, Error>

const someData = useQuery<ResponseUseQueryModel, Error>(
  ['traineeFeedback', traineeId],
  () =>
    getSomeData<TraineeFeedbackDataModel>({
      path: TRAINEE_FEEDBACK,
    }),
)
```

### Add options to the query

```ts
const someData = useQuery<ResponseUseQueryModel, Error>(
  ['traineeFeedback', traineeId],
  () =>
    getSomeData<TraineeFeedbackDataModel>({
      path: TRAINEE_FEEDBACK,
    }),
  // options are the 3rd param
  {
    // will wait for `idToken` to be truthy before running this query
    enabled: !!idToken,
  },
)
```

### As a custom hook

```ts
import { useQuery, UseQueryResult } from 'react-query'

export const useTraineeFeedback = (
  traineeId: string,
  idToken: string,
): UseQueryResult<TraineeFeedbackResponseModel, Error> => {
  return useQuery<TraineeFeedbackResponseModel, Error>(
    ['traineeFeedback', traineeId],
    () =>
      getSomeData<TraineeFeedbackDataModel>({
        path: TRAINEE_FEEDBACK,
      }),
    {
      enabled: !!idToken,
    },
  )
}
```

### Usage in a component

From [here](https://github.com/tannerlinsley/react-query/discussions/2063)

```ts
interface ViewUserPagePathParameters {
  userId: string
}

interface IUser {
  id: string
  displayName: string
}

export function assertNever(value: never): never {
  throw new Error(`Unhandled discriminated union member: ${value}`)
}

export const ViewUser: React.FC = (props) => {
  const { userId } = useParams<ViewUserPagePathParameters>()
  const { status, data, error } = useQuery<IUser, Error>(
    `getUser for ${userId}`,
    () => getUser({ id: userId }),
  )

  if (status === 'success') {
    const user = data
    return <div>Name: {user.displayName}</div>
  } else if (status === 'loading') {
    return <div>loading...</div>
  } else if (status === 'idle') {
    return <div>mutating...</div>
  } else if (status === 'error') {
    return 'An error has occurred: ' + error.message
  } else {
    return assertNever(queryResult)
  }
}
```

## useQueries

```ts
import { useQueries } from 'react-query'

const scorecardQueries = useQueries([
  {
    queryKey: ['traineeInfo', traineeId],
    queryFn: () =>
      getSomeData<GetTraineeInfoDataModel>({
        path: TRAINEE_FEEDBACK,
      }),
    // options in useQueries are not in a separate object
    enabled: !!idToken,
  },
  {
    queryKey: ['traineeAchievements', traineeId],
    queryFn: () =>
      getSomeData<TraineeAchievementsDataModel>({
        path: TRAINEE_FEEDBACK,
      }),
    enabled: !!idToken,
  },
])
```

## react-query with GraphQL

### `useGqlQuery`

#### Source

```tsx
import { useUserContext } from '../../providers'
import { QueryKey, useQuery, UseQueryResult } from 'react-query'
import { graphQlClient } from '../../graphql/client'
import { auth } from '../../config'

/**
 * @name useGqlQuery
 * @description a helper hook that should be used when calling the GraphQL API
 */

export const useGqlQuery = <Response = unknown, Variables = unknown>(
  queryKey: QueryKey,
  query: string,
  variables?: Variables,
): UseQueryResult<Response, Error> => {
  return useQuery(queryKey, async () => {
    if (auth?.currentUser) {
      token = await auth.currentUser.getIdToken()
    }
    return await graphQlClient.request(query, variables)
  })
}
```

#### Usage

```tsx
export const GET_SHORTLIST = gql`
  query($from_id: uuid!) {
    contact_connection(
      where: {
        from_id: { _eq: $from_id }
        _and: { row_status: { _eq: "active" } }
      }
    ) {
      to_id
    }
  }
`
interface ShortlistItem {
  to_id: string
}

interface QueryData {
  contact_connection: ShortlistItem[]
}

interface QueryVariables {
  from_id: string
}

const getShortlistQuery = useGqlQuery<QueryData, QueryVariables>(
  'queryKey',
  GET_SHORTLIST,
  {
    from_id: '1234557565675',
  },
)
const shortlist = useMemo(() => getShortlistQuery?.data[getShortlistQuery])
```

### `useGqlMutation`

#### Source

```tsx
import { useUserContext } from '../../providers'
import { useMutation, UseMutationResult, UseMutationOptions } from 'react-query'
import { graphQlClient } from '../../graphql/client'
import { auth } from '../../config'

/**
 * @name useGqlMutation
 * @description a helper hook that should be used when mutating data with the GraphQL API
 */

export const useGqlMutation = <Response = unknown, Variables = unknown>(
  query: string,
  sideEffects?: UseMutationOptions<Response, Error, Variables, unknown>,
): UseMutationResult<Response, Error, Variables, unknown> => {
  const { idToken } = useUserContext()
  return useMutation(async (variables) => {
    let token = idToken
    if (auth?.currentUser) {
      token = await auth.currentUser.getIdToken()
    }
    return graphQlClient.request(query, variables, {
      Authorization: `Bearer ${token}`,
    })
  }, sideEffects)
}
```

#### Usage

```tsx
export const REMOVE_SHORTLIST = gql`
  mutation($from_id: uuid!, $to_id: uuid!) {
    update_contact_connection(
      where: { from_id: { _eq: $from_id }, to_id: { _eq: $to_id } }
      _set: { row_status: "inactive" }
    ) {
      affected_rows
      returning {
        to_id
      }
    }
  }
`
interface ShortlistItem {
  to_id: string
}

interface MutationResponse {
  update_contact_connection: {
    affected_rows: number
    returning: ShortlistItem[]
  }
}

interface MutationVariables {
  from_id: string
  to_id: string
}

const removeShortlist = useGqlMutation<MutationResponse, MutationVariables>(
  REMOVE_SHORTLIST,
  {
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries('myShortlist')
      console.log(`🚀 ~ mutation variables`, variables)
      console.log(`🚀 ~ mutation data`, data)
    },
  },
)
```

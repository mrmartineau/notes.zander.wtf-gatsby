---
title: React Query with GraphQL
link: https://react-query.tanstack.com
tags:
  - react
  - graphql
emoji: ⚛
created: 2021-03-26T12:50:12.000Z
modified: 2021-11-11T12:24:38.167Z
---

Two hooks are provided to make it easier to work with GraphQL and React Query. They use [`graphql-request`](https://github.com/prisma-labs/graphql-request) to make the requests to the GraphQL server.

GraphQL client used in the following examples

```tsx
import { GraphQLClient } from 'graphql-request'

const endpoint = `${import.meta.env.VITE_HASURA_ENDPOINT}`
export const graphQlClient = new GraphQLClient(endpoint)
```

## `useGqlQuery`

A wrapper around "useQuery"

#### Source

```tsx
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import { auth } from '../../config'
import { graphQlClient } from '../../graphql/client'

/**
 * @name useGqlQuery
 * @description a helper hook that should be used when calling the GraphQL API
 */

export const useGqlQuery = <ResponseData = unknown, Variables = unknown>(
  queryKey: QueryKey,
  query: string,
  variables?: Variables,
  options?: UseQueryOptions<ResponseData, Error, ResponseData, QueryKey>,
): UseQueryResult<ResponseData, Error> => {
  return useQuery(
    queryKey,
    async () => {
      try {
        // always get the latest token
        // this uses Firebase Authentication to get a token
        const token = await auth?.currentUser?.getIdToken()

        // if the token is `undefined`, no auth headers will be set
        // this allows us to use the GraphQL API for public queries
        const authorisationHeaders = token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : undefined

        const response = await graphQlClient.request(
          query,
          variables,
          authorisationHeaders,
        )
        return response
      } catch (error) {
        console.log(`🚀 ~ useGqlQuery ~ error`, error)
      }
    },
    options,
  )
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

## `useGqlMutation`

A wrapper around useMutation

#### Source

```tsx
import { useMutation, UseMutationResult, UseMutationOptions } from 'react-query'
import { auth } from '../../config'
import { graphQlClient } from '../../graphql/client'

/**
 * @name useGqlMutation
 * @description a helper hook that should be used when mutating data with the GraphQL API
 */

export const useGqlMutation = <Response = unknown, Variables = unknown>(
  query: string,
  sideEffects?: UseMutationOptions<Response, Error, Variables, unknown>,
): UseMutationResult<Response, Error, Variables, unknown> => {
  return useMutation(async (variables) => {
    // always get the latest token
    // this uses Firebase Authentication to get a token
    const token = await auth?.currentUser?.getIdToken()
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

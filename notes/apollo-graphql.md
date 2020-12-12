---
title: Apollo GraphQL
tags:
  - graphql
link: 'https://www.apollographql.com/docs/react/'
created: 2020-06-25T14:17:22.000Z
modified: 2020-06-25T14:17:22.000Z
---

## Queries

[Queries docs](https://www.apollographql.com/docs/react/data/queries/)

```jsx
import gql from 'graphql-tag'

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`
```

### useQuery hook

[useQuery Docs](https://www.apollographql.com/docs/react/api/react-hooks/#usequery)

```js
import { useQuery } from '@apollo/react-hooks'

const { data, loading, error } = useQuery(GET_DOGS)

// useQuery with a `variable`
const { data, loading, error } = useQuery(GET_DOG_PHOTO, {
  variables: { breed },
})
```

### Example component

```jsx
const Dogs = ({ onDogSelected }) => {
  const { data, loading, error } = useQuery(GET_DOGS)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p>Error {JSON.stringify(error, null, 2)}</p>
  }

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  )
}
```

## Mutations

[Mutations docs](https://www.apollographql.com/docs/react/data/mutations/)

Queries enable clients to fetch data, but not to modify data. To enable clients to modify data, our schema needs to define some mutations.

### useMutation hook

[useMutation Docs](https://www.apollographql.com/docs/react/api/react-hooks/#usemutation)

```js
import { useMutation } from '@apollo/react-hooks'

const [addTodo, { data, loading, error }] = useMutation(ADD_TODO)

// usage
addTodo({ variables: { type: 'some value' } })
```

### Example component

```jsx
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`

const AddTodo = () => {
  let input
  const [addTodo, { data }] = useMutation(ADD_TODO)

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo({ variables: { type: input.value } })
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
```

### Updating the cache

If a mutation modifies multiple entities, or if it creates or deletes entities, the Apollo Client cache is not automatically updated to reflect the result of the mutation. To resolve this, your call to `useMutation` can include an **update function**.

The purpose of an update function is to modify your _cached_ data to match the modifications that a mutation makes to your _back-end_ data. In the example in Executing a mutation, the update function for the `ADD_TODO` mutation should add the same item to our cached version of the to-do list.

```js
const GET_TODOS = gql`
  query GetTodos {
    todos
  }
`

const AddTodo = () => {
  let input
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS })
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addTodo]) },
      })
    },
  })

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo({ variables: { type: input.value } })
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
```

## Fragments

[Fragments docs](https://www.apollographql.com/docs/react/data/fragments/)

```gql
fragment NameParts on Person {
  firstName
  lastName
}

query GetPerson {
  people(id: "7") {
    ...NameParts
    avatar(size: LARGE)
  }
}
```

## Resolvers

Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data. They either return the same type of data we specify in our schema or a promise for that data.

Before we can start writing resolvers, we need to learn more about what a resolver function looks like. Resolver functions accept four arguments:

```js
fieldName: (parent, args, context, info) => data
```

- `parent`: An object that contains the result returned from the resolver on the parent type
- `args`: An object that contains the arguments passed to the field
- `context`: An object shared by all resolvers in a GraphQL operation. We use the context to contain per-request state such as authentication information and access our data sources.
- `info`: Information about the execution state of the operation which should only be used in advanced cases

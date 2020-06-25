---
title: GraphQL
tags:
  - graphql
---

# Essential quotes

- "GraphQL is about asking for specific fields on objects"
- "The query has exactly the same shape as the result"
- "Clients can fetch lots of related data in one request, instead of making several roundtrips in a classic REST architecture"
- "GraphQL queries look the same for both single items or lists of items"
- "In REST, you can only pass a single set of arguments but in GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches"
- "While query fields are executed in parallel, mutation fields run in series, one after the other"

## Resources

- https://www.graphqlbin.com/
- https://www.justgraphql.com/resources
- https://graphql.org/
- https://www.graphql.com/
- https://www.howtographql.com/

# Glossary

- Type
- Field
- Function for each field on each type

```
type Query {
  me: User
}

type User {
  id: ID
  name: String
}

function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}
```

# Steps involved

1. Receive GraphQL query
2. Validate query against the types and field that are defined
3. Run provided functions to produce the result

Example Query

```gql
{
  me {
    name
  }
}
```

JSON result

```json
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```

Example Query

```gql
{
  hero {
    name
  }
}
```

JSON result

```
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

## Nested data with arrays

Query

```gql
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
    }
  }
}
```

JSON result

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

## Pass arguments to fields

Query

```gql
{
  human(id: "1000") {
    name
    height
  }
}
```

JSON result

```json
{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 1.72
    }
  }
}
```

## Pass arguments into scalar fields to let the server transform it

Query

```gql
{
  human(id: "1000") {
    name
    height(unit: FOOT) # Enumeration type
  }
}
```

JSON result

```json
{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 5.6430448
    }
  }
}
```

### Data types for arguments

- Enumeration type
- GraphQL's default set of types
- The GraphQL server can declare its own custom types (must be serializable)

### Aliases to query the same field with different arguments

Aliases let you rename the result of a field to anything you want

```gql
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

JSON result

```json
{
  "data": {
    "empireHero": {
      "name": "Luke Skywalker"
    },
    "jediHero": {
      "name": "R2-D2"
    }
  }
}
```

## Fragments to split queries into reusable units

```gql
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

JSON result

```json
{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "appearsIn": ["NEWHOPE", "EMPIRE", "JEDI"],
      "friends": [
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        },
        {
          "name": "C-3PO"
        },
        {
          "name": "R2-D2"
        }
      ]
    },
    "rightComparison": {
      "name": "R2-D2",
      "appearsIn": ["NEWHOPE", "EMPIRE", "JEDI"],
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

### Use variables in fragments

```gql
query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}
```

Variable

```json
{ "first": 2 }
```

JSON result

```json
{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "friendsConnection": {
        "totalCount": 4,
        "edges": [
          {
            "node": {
              "name": "Han Solo"
            }
          },
          {
            "node": {
              "name": "Leia Organa"
            }
          }
        ]
      }
    },
    "rightComparison": {
      "name": "R2-D2",
      "friendsConnection": {
        "totalCount": 3,
        "edges": [
          {
            "node": {
              "name": "Luke Skywalker"
            }
          },
          {
            "node": {
              "name": "Han Solo"
            }
          }
        ]
      }
    }
  }
}
```

## Operation types

- query (can be omitted with "query shorthand syntax" -> no name + no variable definitions)
- mutation
- subscription

### Operation name

- Is only required in multi-operation documents
- "Name your queries to make the code less ambigous"

```gql
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}
```

## Using variables

- It's not needed to manipulate the query string at runtime
- Never do string interpolation to construct queries from user-supplied values

Steps for using variables

1. Replace the static value with `$variableName`
2. Declare `$variableName` as an accepted variable
3. Pass `variableName: value` (usually) as JSON

Query with variable definition

```gql
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
```

Variable

```json
{
  "episode": "JEDI"
}
```

JSON result

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

### Variable definitions

- Like arguments to a query
- Must be prefixed with a `$` sign followed by their type `($episode: Episode)`

### Required variable definitions

- are suffixed with a ! sign `($episode: Episode!)`

### Default variable values

- are suffixed with " sign `($episode: Episode = JEDI)`

```gql
query HeroNameAndFriends($episode: Episode = JEDI) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
```

### Directives to dynamically change the structure using variables

- Example: UI component that has a summarized and a detailed view
- Directives can be attached to a filed or fragment incusion
- Two directives built into the spec:
  - `include(if: Boolean)` - Includes this field only if the argument is `true`
  - `skip(if: Boolean)` - Skips this field if the argument is `true`

```gql
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}
```

#### Summarized view

Variables

```json
{
  "episode": "JEDI",
  "withFriends": false
}
```

JSON result

```json
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

#### Detailed view

Variables

```json
{
  "episode": "JEDI",
  "withFriends": true
}
```

JSON result

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

## Mutations

- We can mutate and query the new value of a field with one request
- `createReview` field returns the `stars` and `commentary` fields of the newly created review
- The `review` variable is not a scalar - It's an _input object type_

```gql
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

Variables

```json
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
```

JSON result

```json
{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```

### Multiple fields in mutations

- **While query fields are executed in parallel, mutation fields run in series, one after the other**
- 2 `incrementCredits` mutations in one request mean: the first is guaranteed to finish before the second begins

## Inline Fragments for fields that return an interface or a union type

- The `hero` field returns the type `Character`, which might be either a `Human` or a `Droid` depending on the `episode` argument
- `name` exists on both so you can directly ask for that in the query
- To ask for a field on the concrete type, you need to use an _inline fragment_ with a type condition

```gql
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
    ... on Human {
      height
    }
  }
}
```

Variables

```json
{
  "ep": "JEDI"
}
```

JSON result

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "primaryFunction": "Astromech"
    }
  }
}
```

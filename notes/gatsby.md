---
title: Gatsby
tags:
  - react
  - graphql
created: 2020-02-27T23:02:00.000Z
modified: 2021-01-19T13:43:19.000Z
---

## `gatsby-ssr.js`

> The APIs wrapPageElement and wrapRootElement exist in both the SSR and browser APIs. If you use one of them, consider if you should implement it in both `gatsby-ssr.js` and `gatsby-browser.js` so that pages generated through SSR with Node.js are the same after being hydrated with browser JavaScript.

### `wrapRootElement`

This is where Providers would be setup, think Redux etc

```jsx
// gatsby-browser.js
const React = require('react')
const { Provider } = require('react-redux')

const createStore = require('./src/state/createStore')
const store = createStore()

exports.wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
```

More info [here](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement)

https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr

### `onRenderBody`

```js
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    /**
     * Preload font assets and via SSR to prevent FLOUT (Flash of Unstyled Text)
     */
    <link
      key="Font-Preload--Venti-Bold"
      rel="preload"
      href="/fonts/stage-1/VentiCF-Bold--stage1.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}
```

## GraphQL

- [Gatsby GraphQL reference](https://www.gatsbyjs.org/docs/graphql-reference)

### Group deeply nested fields together

```js
import { graphql, useStaticQuery } from 'gatsby'

export const useAllTags = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        tags: group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  return data
}
```

#### Output

```json
{
  "data": {
    "allMdx": {
      "tags": [
        {
          "tag": "css",
          "totalCount": 4
        },
        {
          "tag": "devops",
          "totalCount": 1
        },
        {
          "tag": "git",
          "totalCount": 1
        },
        {
          "tag": "graphql",
          "totalCount": 1
        }
      ]
    }
  }
}
```

### Graphql untagged

Given `frontmatter` like this:

```yml
---
title: Gatsby
tags:
  - react
  - graphql
---

```

or this

```yml
---
title: Gatsby
---

```

Then query for items that **don't** have tags set

```graphql
query MyQuery {
  allMdx(filter: { frontmatter: { tags: { eq: null } } }) {
    edges {
      node {
        id
        frontmatter {
          title
          tags
        }
      }
    }
  }
}
```

## Misc

[SEO component](https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/58e67d9e5c1691654185ebdffdc6f01ac7cbb791/src/components/SEO/SEO.js)

[Schema.org component](https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/58e67d9e5c1691654185ebdffdc6f01ac7cbb791/src/components/SEO/SchemaOrg.js)

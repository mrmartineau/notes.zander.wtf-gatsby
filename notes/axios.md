---
title: Axios
emoji: 🐕
tags:
  - javascript
link: https://github.com/axios/axios
created: 2020-02-27T23:02:00.000Z
modified: 2021-12-06T15:30:48.665Z
---

## Example requests

```js
// GET
const { data } = await axios({
  method: 'POST',
  url: `https://path.to/endpoint`,
})

// POST
const { data } = await axios({
  method: 'POST',
  url: `https://path.to/endpoint`,
  data: {
    name: 'Zander Martineau',
  },
  headers: {},
})
```

```ts
interface ApiResponse {
  test: number
}

const fetchSomeData = (): Promise<ApiResponse> => {
  return axios<ApiResponse>({
    method: 'POST',
    url: `https://path.to/endpoint`,
  }).then((response) => {
    return {
      ...response.data,
    }
  })
}
```

### With authorisation

```js
// POST
const { data } = await axios({
  method: 'POST',
  url: `https://path.to/endpoint`,
  data: {
    name: 'Zander Martineau',
  },
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
```

### Try/Catch

```ts
interface ApiResponse {
  test: number
}

const fetchSomeData = async (): Promise<ApiResponse> => {
  try {
    const { data } = await axios<ApiResponse>({
      method: 'POST',
      url: `https://path.to/endpoint`,
    })

    return data
  } catch (error) {
    throw new Error(error.message || 'error.unknown')
  }
}
```

### Alternate method using [await-to-js](https://github.com/scopsy/await-to-js)

```ts
import to from 'await-to-js'

interface ApiResponse {
  test: number
}

const fetchSomeData = async () => {
  const [error, data] = await to<AxiosResponse<ApiResponse>>(
    axios({
      method: 'POST',
      url: `https://path.to/endpoint`,
    })
  )

  // ℹ️ Axios' default response has a `data` property,
  // so you may prefer to return `data.data`
  return data.data
}
```

## Handling errors

```js
axios({
  method: 'GET',
  url: '/user/12345',
}).catch((error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  console.log(error.config)
})
```

[Read more here](https://github.com/axios/axios#handling-errors)

### With Typescript

```ts
try {
  await axios.post(
    '/user/12345',
    {
      email: formData.email,
    }
  )
} catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    // you now have type-safe access to the API response that returned the error
    console.error(error.response)
  } else {
    const errorMessage = getErrorMessage(error)
    setFormError(errorMessage)
  }
}
```

## Redaxios

The Axios API, as an 800 byte Fetch wrapper.

https://github.com/developit/redaxios

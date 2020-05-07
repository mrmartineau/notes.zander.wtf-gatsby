---
title: Axios
emoji: 🐕
tags:
  - javascript
link: https://github.com/axios/axios
---

## POST request

```js
const createCurveAccountResponse = await axios({
  method: 'POST',
  url: `https://path.to/endpoint`,
  data: {},
  headers: {},
})
```

## Handling errors

```js
axios.get('/user/12345').catch((error) => {
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

## Redaxios

The Axios API, as an 800 byte Fetch wrapper.

https://github.com/developit/redaxios

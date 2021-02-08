---
title: Useful JavaScript functions & snippets
tags:
  - javascript
created: 2020-09-06T07:57:42.000Z
modified: 2021-01-06T11:15:23.000Z
---

## Automatically remove an event listener after it has executed

```js
el.addEventListener('click', console.log, {
  once: true,
})
```

## The magical `handleEvent` function

```js
// Get a reference to the <button>
const btn = document.querySelector('button')

// Define object with `handleEvent` function
const myObject = {
  handleEvent: (event) => {
    alert(event.type)
  },
}

// Listen for 'click' events on the <button> and handle them with `myObject`... WHAT?!?!
btn.addEventListener('click', myObject)
```

[More info](https://dev.to/rikschennink/the-fantastically-magical-handleevent-function-1bp4)

## Remove query param

```ts
// https://stackoverflow.com/a/58128921/91359

export const removeSearchParam = (paramName: string): void => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.delete(paramName)
  if (history.replaceState) {
    const searchString =
      searchParams.toString().length > 0 ? '?' + searchParams.toString() : ''
    const newUrl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      searchString +
      window.location.hash
    history.replaceState(null, document.title, newUrl)
  }
}
```

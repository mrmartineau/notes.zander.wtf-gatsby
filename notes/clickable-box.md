---
title: Clickable box
tags:
  - javascript
  - react
link: 'https://github.com/danoc/clickable-box'
emoji: 📦
created: 2020-02-27T23:02:00.000Z
modified: 2020-05-11T11:47:16.000Z
---

Note: this implementation has some major drawbacks compared to using a native `<button>` element. For example a proper `disabled` state cannot be achieved without a lot more effor. Always use the correct HTML element for the job!

```jsx
<span
  // Make the element clickable
  onClick={handleClick}
  // Make the element navigable by keyboard
  tabIndex={0}
  // Call `handleClick` if the user presses
  // space key while the element is in focus
  onKeyDown={(event) => {
    // SPACE keycode: 32
    // ENTER keycode: 13
    // Find more at http://keycode.info/
    if (event.keyCode === 32) {
      event.preventDefault()
      handleClick()
    }
  }}
  // Tell screen readers that the element is a button
  role="button"
  // All other props are passed through to the element
  aria-label="Close modal"
>
  <CloseIcon />
</span>
```

Same without the comments:

```jsx
<span
  onClick={handleClick}
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.keyCode === 32) {
      event.preventDefault()
      handleClick()
    }
  }}
  role="button"
  aria-label="Close modal"
>
  <CloseIcon />
</span>
```

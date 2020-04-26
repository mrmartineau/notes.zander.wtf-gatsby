---
title: Clickable box
tags:
  - javascript
  - react
source: https://github.com/danoc/clickable-box
emoji: 📦
---

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

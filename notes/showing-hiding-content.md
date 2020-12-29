---
title: Showing/hiding content
emoji: ♿
created: 2020-12-29T10:31:32.000Z
modified: 2020-12-29T17:17:21.000Z
tags:
  - html
  - css
---

## Hide from all users

```css
a {
  display: none;
  /* or */
  visibility: hidden;
}
```

or by using the `hidden` attribute

```html
<div hidden />
```

## Visually hidden

..but still accessible to assistive technologies.

> The `:not` portions of the selector are allowing a means for any focusable element to become visible when focused/active by a user. So elements that normally can’t receive focus, like paragraphs, will not become visible if a user navigates through content via screen reader controls or the Tab key, but natively focusable elements, or elements with a non-negative tabindex will have these elements appear in the DOM on focus.

```css
/* ie9+ */
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

If you need to visually hide everything, including focusable elements, remove `:not(:focus)` from the selector.

## Hide from assistive technology

The `aria-hidden="true"` attribute produces the opposite effect of the `.visually-hidden` class. It hides content from assistive technology, but not visually. This can be helpful in cases where there are visual cues that screen readers do not need to announce, such as decorative icons that accompany text labels.

## Useful links:

- https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html
- https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content
- https://webaim.org/techniques/css/invisiblecontent

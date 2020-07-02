---
title: Hover media-query
tags:
  - css
---

```css
@media (hover: none) {
  /* do something when hover *IS NOT* available */
}

.cta {
}

@media (hover: hover) {
  /* do something when hover *IS* available */
  .cta:hover {
  }
}
```

If you'd like the query to be slightly broader to test if any available input can hover you can use the any-hover query instead.

This will apply to devices that allow for both touch and the connection of a pointer device like a mouse.

```css
.cta {
}

@media (any-hover: hover) {
  /* do something when hover *IS* available */
  .cta:hover {
  }
}
```

---
title: Styling siblings on hover
tags:
  - css
emoji: 💄
link: 'https://codyhouse.co/nuggets/styling-siblings-on-hover'
created: 2020-05-19T08:25:55.000Z
modified: 2020-05-19T08:25:55.000Z
---

Use the :not CSS selector to stylize siblings on hover.

Normally, you would need JavaScript to stylize all the siblings of an element you're interacting with. But wait! There's a cool method based 100% on CSS.

The idea, in short, is to target the :hover of the parent, then target all the children except the one you're hovering over.

```css
.parent:hover .child:not(:hover) {
  /* this style affects all the children except the one you're hovering over */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="codyhouse" data-slug-hash="KKdrmXj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Nugget: Styling siblings on hover">
  <span>See the Pen <a href="https://codepen.io/codyhouse/pen/KKdrmXj">
  CSS Nugget: Styling siblings on hover</a> by CodyHouse (<a href="https://codepen.io/codyhouse">@codyhouse</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

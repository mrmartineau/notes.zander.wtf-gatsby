---
title: CSS Media Queries
tags:
  - css
link: https://blog.logrocket.com/new-media-queries-you-need-to-know/
emoji: ↔️
---

## light-level

This feature isn’t available in any browsers at the time of writing, but it definitely sounds like a future favorite. With the [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) media query, you can tune your styles based on whether your user is viewing your web app outside in daylight, or perhaps checking in before going to bed. This is great news for anyone who has ever tried to read their phone in the park, or check out a website at night!

There are three available values – `dim`, `normal` (the default), and `washed`.

Here’s an example where we change some CSS custom properties:

```css
@media (light-level: dim) {
  :root {
    --text-color: white;
    --background-color: black;
  }
}
```

Read more at [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/light-level).

## inverted-colors

Currently supported in Safari (and Safari on iOS).

The value is boolean, so `none` and `inverted`.

```css
@media (inverted-colors) {
  img {
    filter: invert(1);
  }
  * {
    box-shadow: none !important;
    text-shadow: none !important;
  }
}
```

[Read more at MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors)

## Preferences, preferences, preferences

The fifth level of CSS media queries also has a huge focus on personalization. It introduces no fewer than five distinct media queries that lets you tweak your website to whatever the user prefers!

### prefers-color-scheme

This feature is already widely supported in browsers, and has three possible values – `light`, `dark`, and `no-preference`. Here’s an example where we change the background color of the site based on preference:

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #1e1e1e;
    color: white;
  }
}
```

[Read more at MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

<a href="http://caniuse.com/#feat=prefers-color-scheme">
  <picture>
    <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/prefers-color-scheme.webp"/>
    <img src="https://caniuse.bitsofco.de/image/prefers-color-scheme.png" alt="Data on support for the prefers-color-scheme feature across the major browsers from caniuse.com"/>
  </picture>
</a>

#### `color-scheme`

The `color-scheme` CSS property and the corresponding meta tag allow developers to opt their pages in to the theme-specific defaults of the user agent stylesheet.

```html
<meta name="color-scheme" content="dark light" />
```

```css
/*
  The page supports both dark and light color schemes,
  and the page author prefers dark.
*/
:root {
  color-scheme: dark light;
}
```

[Read more at web.dev](https://web.dev/color-scheme/)

### prefers-contrast

The `prefers-contrast` media query lets you cater to users who prefer high contrast content compared to your original design.

There’s two values here - `no-preference` and `high`.

```css
@media (prefers-contrast) {
  :root {
    --text-color: black;
  }
}
```

[Read more at MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)

### prefers-reduced-motion

With the `prefers-reduced-motion` media query, you can respect that wish as well. Use it to reduce those “bouncy” animations, fading images and “fun” transitions a bit. Note that you don’t necessarily have to remove all movement, but reduce it.

Browser support is pretty good. The value is boolean, so `no-preference` or `reduce`.

```css
@media (prefers-reduced-motion) {
  * {
    transition-duration: 0.05s;
  }
}
```

<a href="http://caniuse.com/#feat=prefers-reduced-motion">
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/prefers-reduced-motion.webp"/>
<img src="https://caniuse.bitsofco.de/image/prefers-reduced-motion.png" alt="Data on support for the prefers-reduced-motion feature across the major browsers from caniuse.com"/>
</picture>
</a>

### prefers-reduced-transparency

Some operating systems offer an option to reduce the amount of translucent layering effects used by the system. Although not supported by any browsers yet, the `prefers-reduced-transparency` media query is aiming to help you cater to those users.

The value is boolean, so `no-preference` and `reduce`.

```css
@media (prefers-reduced-transparency) {
  .floating-box {
    opacity: 1;
  }
}
```

[Read more at MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)

### prefers-reduced-data

The value is boolean, so `no-preference` and `reduce` are the values.

```css
@media (prefers-reduced-data) {
  .hero-image {
    background-image: none;
    background-color: salmon;
  }
}
```

[Read more at MDN.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

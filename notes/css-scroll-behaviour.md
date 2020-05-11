---
title: CSS scroll-behavior
tags:
  - css
link: https://gomakethings.com/how-to-animate-scrolling-to-anchor-links-with-one-line-of-css/
---

## The scroll-behavior property

The `scroll-behavior` property tells the browser how to handle scrolling to anchor links within an element.

The default value, `auto`, does a hard jump like you’re used to. A value of `scroll` tells the browser to animate scrolling. There’s no way to specify easing, but it ties into the browser’s refresh rate to give you silky smooth animations.

```css
/**
 * Enable smooth scrolling on the whole document
 */
html {
  scroll-behavior: smooth;
}
```

[Here’s a demo](https://codepen.io/cferdinandi/pen/MWwvPJZ)

You can restrict it to specific elements if you want.

```css
/**
 * Enable smooth scrolling on the #be-cool element
 */
#be-cool {
  scroll-behavior: smooth;
}
```

## Accessibility concerns

Animations can cause issues for users who suffer from motion sickness and other conditions.

Fortunately, Windows, macOs, iOS, and Android all provide a way for users to specify that they prefer reduced motion. And all modern browsers (but not IE) provide a way to check for that setting in both CSS and JavaScript.

When using `scroll-behavior`, you should add a `@media` check for preders-reduced-motion: reduce, and revert to the default auto.

```css
/**
 * Disable smooth scrolling when users have prefers-reduced-motion enabled
 */
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

This prevents animated scrolling when users have specified that they’d prefer reduced motion.

[Read more on MDN](http://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

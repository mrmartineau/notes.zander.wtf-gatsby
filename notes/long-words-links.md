---
title: 'Handling Long Words and URLs (Forcing Breaks, Hyphenation, Ellipsis, etc)'
tags:
  - css
link: >-
  https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container
created: 2020-04-11T06:27:27.000Z
modified: 2020-05-11T11:47:16.000Z
---

```css
.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
```

### Preventing Overflow with Ellipsis

Another approach to consider is truncating the text altogether and adding ellipses where the string of text hits the container:

```css
.ellipses {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

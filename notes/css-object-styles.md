---
title: CSS Object styles
tags:
  - react
  - css
  - javascript
emoji: 💄
created: 2020-05-19T08:25:55.000Z
modified: 2020-05-19T08:25:55.000Z
---

Instead of writing css properties in `kebab-case` like regular css, you write them in `camelCase`, for example `background-color` would be `backgroundColor`. Object styles are especially useful with the css prop because you don’t need a css call like with string styles but object styles can also be used with styled.

- https://theme-ui.com/guides/object-styles
- https://emotion.sh/docs/object-styles

#### [Pseudo elements](https://theme-ui.com/guides/object-styles#pseudo-elements)

```js
{
  "&::before": {
    content: '""',
    display: 'block',
    width: 32,
    height: 32,
    backgroundColor: 'tomato',
  }
}
```

### Media queries

```js
{
  color: 'darkorchid',
  '@media(min-width: 420px)': {
    color: 'orange'
  }
}
```

### Numbers

```js
{
  padding: 8,
  zIndex: 200
}
```

### Vendor prefixes

From [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix#API_prefixes):

Prefixes for interface names are upper-cased:

- `WebKit` (Chrome, Safari, newer versions of Opera, almost all iOS browsers (including Firefox for iOS); basically, any WebKit based browser)
- `Moz` (Firefox)
- `O` (Older, pre-WebKit, versions of Opera)
- `MS` (Internet Explorer and Microsoft Edge)

```js
{
  MozTextStrokeColor: 'red,
  WebkitTextStrokeColor: 'red',
  textStrokeColor: 'red,
  MozTextStrokeWidth: '1px',
  WebkitTextStrokeWidth: '1px',
  textStrokeWidth: '1px',
}
```

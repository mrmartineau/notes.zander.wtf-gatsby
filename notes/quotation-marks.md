---
title: Quotation marks in different countries
emoji: 🗣
created: 2020-10-08T16:37:57.000Z
modified: 2021-11-11T12:06:43.046Z
tags:
  - css
---

- Albanian: `«…»` `‹…›`
- English: `“…”` `‘…’`
- Arab: `«…»` `‹…›`
- African: `„…”` `‚…’`
- Belorussian: `«…»` `„…“`
- Bulgarian: `„…“` `‚…‘`
- Hungarian: `„…”`
- Greek: `«…»` `‹…›`
- Danish: `»…«` `›…‹`
- Hebrew: `«…»` / `'…'` `'…'` / `<<…>>`
- Irish: `“…”` `‘…’`
- Icelandic: `„…“` `‚…‘`
- Spanish: `«…»` `“…”`
- Italian: `«…»`
- Chinese: `“…”` `‘…’`
- Latvian: `„…“` `„…“`
- Lithuanian: `„…“` `‚…‘`
- Dutch: `„…”` `‚…’`
- German: `„…“` `‚…‘`
- Norwegian: `«…»`
- Polish: `„…”` `«…»`
- Portuguese: `“…”` `‘…’`
- Romanian: `„…”` `«…»`
- Russian: `«…»` `„…“`
- Serbian: `„…“` `‚…‘`
- Slovak: `„…“` `‚…‘`
- Slovenian: `„…“` `‚…‘`
- Turkish: `“…”` `‘…’`
- Ukrainian: `«…»` `„…“`
- Finnish: `”…”` `’…’`
- French: `« …` `» ‹ … ›`
- Croatian: `»…«` `›…‹`
- Czech: `„…“` `‚…‘`
- Swedish: `”…”` `’…’`
- Estonian: `„…”` `„…”`
- Japanese: `「…」` `『…』`

## Different kinds

- `“ ”`: English double
- `‘ ’`: English Single
- `« »`: French «Christmas trees»
- `„ “`: German „paws“
- `„ ”`: Polish
- `» «`: Swedish reverse
- `" "`: Double universal

## Example CSS

```css
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: '“' '”' '‘' '’';
}
blockquote::before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
```

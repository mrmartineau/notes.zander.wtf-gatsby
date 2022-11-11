---
title: Pluralisation with inflect()
tags:
  - javascript
created: 2022-11-11T13:25:54.000Z
modified: 2022-11-11T13:25:54.000Z
link: https://kyleshevlin.com/snippets/inflect
---

Often nouns need slight changes depending on the quantity of that noun. Example: One person, several people. I call these differences "inflections". The `inflect` function below is a little helper function I use to help me apply inflections in my application.

```ts
const inflect = (singular: string, plural = `${singular}s`) => {
  return (quantity): string => {
    Math.abs(quantity) === 1 ? singular : plural
  }
}
```

inflect is a higher order function, meaning it's a function that returns a function. If you need some info on higher order functions, check out my post on them and the post on currying.

This solution makes use of default parameters for the `plural` argument. If adding an "s" is all you need to make a plural, then you don't need to provide it. Like this

```ts
// If you use this a lot, you can export this particular inflection
const inflectPost = inflect('post')

console.log(inflectPost(1)) // 'post'
console.log(inflectPost(2)) // 'posts'
```

But often plurals have oddities (like "person" and "people"), so you can supply a plural argument when you need it.

```ts
const inflectMouse = inflect('mouse', 'mice')
const inflectKnife = inflect('knife', 'knives')
```

Now, as helpful as this is, it is not a proper solution should you need internationalization. Treat this is a helper function for those instances this can support.

---
title: Remove array duplicates
tags:
  - javascript
emoji: ❌
created: 2020-03-22T14:53:49.000Z
modified: 2020-04-29T15:13:20.000Z
---

## Using `Set`

```js
const array = ['🐑', 1, 2, '🐑', '🐑', 3]

// Step 1
const uniqueSet = new Set(array)
// Set { '🐑', 1, 2, 3 }

// Step 2
const backToArray = [...uniqueSet]
// ['🐑', 1, 2, 3]

// or Step 1
const uniqueSet = [...new Set(array)]
// ['🐑', 1, 2, 3]
```

Source: https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates

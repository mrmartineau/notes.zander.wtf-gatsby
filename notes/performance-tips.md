---
title: Performance tips
emoji: 🏎
created: 2021-01-15
modified: 2021-01-15
---

## Reduce Cumulative Layout Shift

Reduce Cumulative Layout Shift by always showing the scrollbar

```css
html {
  overflow-y: scroll;
}
```

https://twitter.com/TimVereecke/status/1239454788116533248

## Performance API

```js
performance.mark('start')
// some code we want to measure
performance.mark('end')
```

## Benchmarking code using node

```sh
# assume there's an `add` function that is executed in benchmark.js

node --trace-opt benchmark.js | grep add
node --trace-opt --trace-deopt benchmark.js | grep add

# add %NeverOptimizeFuntion(add)
node --allow-natives-syntax benchmark.js
```

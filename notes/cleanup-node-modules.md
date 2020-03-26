---
title: Cleanup / optimise computer
emoji: 🧼
---

- https://medium.freecodecamp.org/how-to-free-up-space-on-your-developer-mac-f542f66ddfb
- https://gist.github.com/Aidurber/7549d3f83b00052cee745a6c4dcf7b9d

```sh
find . -name "node_modules" -type d -mtime +120 | xargs rm -rf
```

The `mtime` arg is in days, e.g. `120` is about 4 months & `240` is about 8 months`

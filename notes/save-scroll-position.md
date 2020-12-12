---
title: Save sidebar scroll position
tags:
  - javascript
link: 'https://twitter.com/hakimel/status/1262337514741706752'
created: 2020-05-19T08:25:55.000Z
modified: 2020-05-19T08:25:55.000Z
---

```ts
let sidebar = document.querySelector('.sidebar')

let top = sessionStorage.getItem('sidebar-scroll')

if (top !== null) {
  sidebar.scrollTop = parseInt(top, 10)
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('sidebar-scroll', sidebar.scrollTop)
})
```

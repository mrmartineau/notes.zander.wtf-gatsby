---
title: VIM cheatsheet
tags:
  - cheatsheet
created: 2020-02-27T23:02:00.000Z
modified: 2020-09-06T07:57:42.000Z
---

**Cheatsheets**

- [https://github.com/hackjutsu/vim-cheatsheet](https://github.com/hackjutsu/vim-cheatsheet)
- [https://gist.github.com/azadkuh/5d223d46a8c269dadfe4](https://gist.github.com/azadkuh/5d223d46a8c269dadfe4)
- [https://vimsheet.com/](https://vimsheet.com/)

**Substitute or Find/Replace**

To find each occurrence of ‘pick’ in the current line only, and replace it with ‘s’, enter (first press Esc key and type):

```
:%s/pick/s/g
```

To find and replace all occurrences of ‘pick’ with ‘s’, enter:

```
:%s/pick/s/g
```

To find and replace all occurrences of ‘pick’ with ‘s’, but ask for confirmation first, enter:

```
:%s/pick/s/gc
```

To find and replace all occurrences of case insensitive ‘eth1’ with ‘br1’, enter:

```
:%s/eth1/br1/gi
```

The above example will find eth1, ETH1, eTh1, ETh1 and so on and replace with br1. To find and replace all occurrences of ‘eth1’ with ‘br1’ for lines from 3 to 7, enter:

```
:3,7s/eth1/br1/g
```

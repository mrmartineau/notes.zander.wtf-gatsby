---
title: Git branching strategies
tags:
  - git
created: 2020-12-29T17:17:21.000Z
modified: 2020-12-29T17:17:21.000Z
---

## Different branching strategies

- [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Please stop recommending Git Flow!](https://georgestocker.com/2020/03/04/please-stop-recommending-git-flow/)
- [ThreeFlow](https://www.nomachetejuggling.com/2017/04/09/a-different-branching-strategy/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/)
- [GitHub flow](http://scottchacon.com/2011/08/31/github-flow.html)
- [Git DMZ](https://gist.github.com/djspiewak/9f2f91085607a4859a66)

### GitHub flow

- Anything in the "main" branch is deployable
- To work on something new, create a descriptively named branch off of `master`/`main` (ie: `new-oauth2-scopes`)
- Commit to that branch locally and regularly push your work to the same named branch on the server
- When you need feedback or help, or you think the branch is ready for merging, open a pull request
- After someone else has reviewed and signed off on the feature, you can merge it into master
- Once it is merged and pushed to ‘master’, you can and should deploy immediately

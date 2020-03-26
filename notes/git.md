---
title: Git
tags:
  - cheatsheet
---

## Branches

List all local branches

```sh
git branch
```

List all merged branches

```sh
git branch --merged
```

Same as above but exclude master and develop branches

```sh
git branch --merged | egrep -v "(^\*|master|develop)"
```

### Deleting branches

```sh
git branch -d branch_name
```

### Delete remote branches

```sh
git push origin --delete branch1 branch2
```

## Generate release notes

These release notes were generated using this script:

```sh
git log f5b38145...8c17d7a9 --pretty=format:'- **%s** ([%h](github.com/mrmartineau/notes.zander.wtf/commit/%H)) by %an' --reverse
```

To retrieve the git commit hashes use this:

```sh
git log --oneline
```

## Tags

```sh
# list all git tags
git tag -l
git tag --list

# create a git tag
git tag v1.9.2

# remove a git tag
git tag -d v1.9.2
git tag --delete v1.9.2

# push all tags to remote
git push --follow-tags origin master
```

---

[gitsheet.wtf](https://gitsheet.wtf/)

[gitexplorer.com](https://gitexplorer.com/)

[Setting Up Git Identities](https://www.micah.soy/posts/setting-up-git-identities/)

### Branching strategies

- [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Please stop recommending Git Flow!](https://georgestocker.com/2020/03/04/please-stop-recommending-git-flow/)
- [ThreeFlow](https://www.nomachetejuggling.com/2017/04/09/a-different-branching-strategy/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/)
- [GitHub flow](http://scottchacon.com/2011/08/31/github-flow.html)
- [Git DMZ](https://gist.github.com/djspiewak/9f2f91085607a4859a66)

### GitHub flow

- Anything in the master branch is deployable
- To work on something new, create a descriptively named branch off of master (ie: new-oauth2-scopes)
- Commit to that branch locally and regularly push your work to the same named branch on the server
- When you need feedback or help, or you think the branch is ready for merging, open a pull request
- After someone else has reviewed and signed off on the feature, you can merge it into master
- Once it is merged and pushed to ‘master’, you can and should deploy immediately

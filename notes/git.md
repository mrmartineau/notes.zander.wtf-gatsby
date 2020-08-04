---
title: Git
tags:
  - cheatsheet
---

## Staging/Adding files

Add all files from current directory

```sh
git add .
```

Add all files from specific directory

```sh
git add <directory>
```

## Branches

Create a local branch and switch to it

```sh
git checkout -b <new-branch-name>
```

Switch to an existing branch

```sh
git checkout <branch-name>
```

List all local branches

```sh
git branch
```

List remote and local branches

```sh
git branch -a
```

List all merged branches

```sh
git branch --merged
```

Same as above but exclude master and develop branches

```sh
git branch --merged | egrep -v "(^\*|master|main|develop)"
```

### Deleting branches

```sh
git branch -d <branch-name>
```

### Delete remote branches

```sh
git push origin --delete <branch-name-1> <branch-name-2>
```

## Merging

Merge another branch into current branch

```sh
git merge <branch-name>
```

### Rebasing

Rebase from a branch

```sh
git rebase <branch-name>
```

Interactive rebase + squash commits

```sh
git rebase -i

# optional branch name
git rebase -i <branch-name>
```

## Logs

Show commit history in single lines

```sh
git log --oneline
```

Fancy Logs

```sh
git log --graph --pretty --abbrev-commit --date=relative --branches
```

Show all local file changes in the working tree

```sh
git diff
```

## Cleanup

Undo local modifications to all files

```sh
git checkout -- .
```

Unstage a file

```sh
git reset HEAD myfile
```

## Cherry picking

```sh
git cherry-pick <commit-hash> <commit-hash>
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
git push --follow-tags origin main
```

## Undoing

```sh
# undo push
git push -f origin HEAD^:<branch-name>

# undo commit
git reset HEAD~1

# undocommitforce
git reset --hard HEAD~1
```

## Config

In Git 2.28, a new configuration option, `init.defaultBranch` is being introduced to replace `master`, the previous default.

```sh
git config --global init.defaultBranch main
```

---

## Generate release notes

These release notes were generated using this script:

```sh
git log <commit-hash>...<commit-hash> --pretty=format:'- **%s** ([%h](github.com/mrmartineau/notes.zander.wtf/commit/%H)) by %an' --reverse
```

To retrieve the git commit hashes use this:

```sh
git log --oneline
```

---

## Branching strategies

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

---

[gitsheet.wtf](https://gitsheet.wtf/)

[gitexplorer.com](https://gitexplorer.com/)

[Setting Up Git Identities](https://www.micah.soy/posts/setting-up-git-identities/)

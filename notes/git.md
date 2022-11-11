---
title: Git
tags:
  - cheatsheet
  - git
created: 2020-02-27T23:02:00.000Z
modified: 2022-11-11T13:15:54.000Z
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

# when you want to squash 17 commits where some include merge commits
git rebase -i HEAD~17 --rebase-merges
```

Useful:

- https://codeinthehole.com/guides/resolving-conflicts-during-a-git-rebase/
- https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history

### Idiot-proof rebasing

From this [blog post](https://softwaredoug.com/blog/2022/11/09/idiot-proof-git-aliases.html)

By adding these aliases to your git config, you will be able to simplify rebasing.

```sh
[alias]
  # *********************
  # Rebase workflow
    mainbranch = "!git remote show origin | sed -n '/HEAD branch/s/.*: //p'"
    synced = "!git pull origin $(git mainbranch) --rebase"
    update = "!git pull origin $(git rev-parse --abbrev-ref HEAD) --rebase"
    squash = "!git rebase -v -i $(git mainbranch)"
    publish = push origin HEAD --force-with-lease
    pub = publish
```

#### Sync your branch with `main`

The `synced` command will get your local branch up to date with your main branch (main or master) at origin (ie Github).

```sh
git synced
```

#### Publish your branch’s changes to the world

The publish (abbrev `pub`) command publishes your changes to your remote branch. If other changes have been posted by another user to the remote, then changes will be rejected. You should update first to incorporate their changes and resolve any conflicts.

```sh
git publish
git pub
```

#### Update your branch with Github’s copy of your branch

If your local branch gets out of date with origin’s version of your branch, then do an update. This would happen if you’re collaborating on the branch with a colleague and need to get up to date.

```sh
git update
```

#### Squash commits

Prior to merging, you likely want to shrink your branch’s many noisy commits to one or two meaningful ones. That’s what squash command does, giving you a chance to rewrite the branch’s history.

```sh
git squash
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

Run the command `git config --global -e` to edit the global config

### Default branch

In Git 2.28, a new configuration option, `init.defaultBranch` is being introduced to replace `master`, the previous default.

```sh
git config --global init.defaultBranch main
```

Or add the following to your global config:

```
[init]
  defaultBranch = main
```

### Make VS Code your default Git Editor, Diff Tool, or Merge Tool

Add the following to your global config:

```
[core]
  editor = code --wait
[diff]
  tool = vscode
[difftool "vscode"]
  cmd = code --wait --diff $LOCAL $REMOTE
[merge]
  tool = vscode
[mergetool "vscode"]
  cmd = code --wait $MERGED
```

[More info](https://www.roboleary.net/vscode/2020/09/15/vscode-git.html)

### `zdiff3` diff format

Use the **diff3** format to see common ancestor code in conflict blocks. Added in Git 2.35.

```sh
git config --global merge.conflictstyle zdiff3
```

Or add the following to your global config:

```
[merge]
  conflictstyle = zdiff3
```

and then conflict blocks will be formatted like:

```diff
<<<<<<<< HEAD:path/to/file
content from target branch
|||||||| merged common ancestors:path/to/file
common ancestor content
========
content from your working branch
>>>>>>> Commit message:path/to/file
```

where the default conflict block has been extended with a new section, delimited by `||||||||` and `========`, which reveals the common ancester code.

Comparing the `HEAD` block to the common ancestor block will often reveal the nature of the target-branch changes, allowing a straight-forward resolution.

For instance, breathe easy if the common ancester block is empty:

```diff
<<<<<<<< HEAD:path/to/file
content from target branch
|||||||| merged common ancestors:path/to/file
========
content from your working branch
>>>>>>> Commit message:path/to/file
```

as this means both branches have added lines; they haven’t tried to update the same lines. You can simply delete the merge conflict markers to resolve.

[More info](https://git-scm.com/docs/git-config#Documentation/git-config.txt-mergeconflictStyle)

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

## Useful links

- [gitsheet.wtf](https://gitsheet.wtf/)
- [gitexplorer.com](https://gitexplorer.com/)
- [Setting Up Git Identities](https://www.micah.soy/posts/setting-up-git-identities/)

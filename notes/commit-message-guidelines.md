---
title: Commit message guidelines
emoji: 📝
created: 2020-02-27T23:02:00.000Z
modified: 2020-12-01T10:18:03.000Z
tags:
  - git
---

https://chris.beams.io/posts/git-commit/

## Writing commits

Not to the important part, when writing commits, it's important to think about:

- Your future self
- Your colleagues

You may think this is trivial, but it's not. It's important for the reader to understand what happened.

## Recommendations

- **Keep the message short**: Makes the list of commits more readable (~50 chars).
- **Talk imperative**: Follow this rule: `If applied, this commit will <commit message>`
- **Think about the CHANGELOG**: Your commits will probably end up in the changelog so try writing for it, but also keep in mind that you can skip sending commits to the CHANGELOG by using different keywords (like `build`).
- **Use a commit per new feature**: if you introduce multiple things related to the same commit, squash them. This is useful for auto-generating CHANGELOG.

| Do's                                              | Don'ts                            |
| ------------------------------------------------- | --------------------------------- |
| `fix(commands): bump error when no user provided` | `fix: stuff`                      |
| `feat: add new commit command`                    | `feat: commit command introduced` |

---

Having precise rules over how git commit messages are formatted leads to <Highlight>more readable messages</Highlight> that are easy to follow when looking through the <Highlight>project history</Highlight>.

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/angular/angular/commits/master))

| Commit message                                                                                                                                                                                      | Release type               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                                | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                          | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br/><br/>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br/>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |

### Revert

If the commit reverts a previous commit, it should begin with revert:, followed by the header of the reverted commit. In the body it should say: This reverts commit `hash`., where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

For each project your team should define your supported scopes.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.

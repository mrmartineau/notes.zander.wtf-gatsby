---
title: Fish shell
emoji: 🐠
tags:
  - cli
link: 'https://fishshell.com'
created: 2020-02-27T23:02:00.000Z
modified: 2020-05-11T11:47:16.000Z
---

My Fish config: https://github.com/mrmartineau/fish

Change fish settings:

```shell
fish_config
```

Reload fish shell

```shell
fish
```

http://fishshell.com/docs/current/tutorial.html
https://github.com/jorgebucaran/fish-cookbook
https://github.com/ghaiklor/iterm-fish-fisher-osx

## Functions

Create new functions in `~/.config/fish/functions` e.g. `xyz.fish`

## Aliases

```sh
alias gco 'git checkout'
```

### abbr

If you add an abbr instead of an alias you'll get better auto-complete. In fish abbr more closely matches the behavior of a bash alias.

```sh
abbr -a gco git checkout
```

Will add a new abbreviation `gco` that expands to `git checkout`.

## Fisher

https://github.com/jorgebucaran/fisher

```
fisher self-update
```

## ssh-agent

When needing to add ssh keys to Github, [the docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) suggest running `eval "$(ssh-agent -s)"` but that does not work in fish. Run this instead:

```sh
command ssh-agent -s
```
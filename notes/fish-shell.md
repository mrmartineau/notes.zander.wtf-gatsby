---
title: Fish shell
emoji: 🐠
tags:
  - cli
link: https://fishshell.com
created: 2020-02-27T23:02:00.000Z
modified: 2021-11-26T11:10:59.134Z
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

## Switching to fish?

If you wish to use fish (or any other shell) as your default shell, you need to enter your new shell's executable in two places.

Add the shell to `/etc/shells` with:

```sh
echo /usr/local/bin/fish | sudo tee -a /etc/shells
```

> ℹ️ homebrew may install fish to `/opt/homebrew/bin/fish`

Change your default shell with:

```sh
chsh -s /usr/local/bin/fish
```

> This assumes you installed fish to `/usr/local/bin`, which is the default location when you've compiled it yourself. If you installed it with a package manager, the usual location is `/usr/bin/fish`, but package managers typically already add it to `/etc/shells`. Just substitute the correct location.

(To change it back to another shell, substitute `/usr/local/bin/fish` with `/bin/bash`, `/bin/tcsh` or `/bin/zsh` as appropriate in the steps above.)

http://fishshell.com/docs/current/tutorial.html
https://github.com/jorgebucaran/fish-cookbook
https://github.com/ghaiklor/iterm-fish-fisher-osx

## Fish features

### Functions

Create new functions in `~/.config/fish/functions` e.g. `xyz.fish`

### Aliases

`alias` is a simple wrapper for the `function` builtin, which creates a function wrapping a command.

https://fishshell.com/docs/current/cmds/alias.html

```sh
alias gco 'git checkout'
alias undocommit 'git reset HEAD~1'
alias ya 'yarn add'
alias yad 'yarn add -D'
```

### abbr

If you add an [abbreviation](https://fishshell.com/docs/current/cmds/abbr.html) instead of an alias you'll get better auto-complete. In fish abbr more closely matches the behavior of a bash alias.

```sh
abbr -a gco git checkout
```

Will add a new abbreviation `gco` that expands to `git checkout`.

## Fish plugins

### Fisher

https://github.com/jorgebucaran/fisher

Plugins are listed in the `$__fish_config_dir/fish_plugins` file.

Install fisher:

```sh
curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher
```

Install a plugin:

```sh
fisher install jorgebucaran/nvm.fish@2.1.0
```

Listing plugins

```sh
fisher list
```

## Other info

### Set shell variables

```sh
set -xg PATH /usr/local/sbin $PATH
```

https://fishshell.com/docs/current/cmds/set.html

#### Adding to `$PATH`

Use [`fish_add_path`](https://fishshell.com/docs/current/cmds/fish_add_path.html)

```sh
fish_add_path /usr/local/sbin
```

https://fishshell.com/docs/current/cmds/fish_add_path.html

### Using `ssh-agent`

When needing to add ssh keys to Github, [the docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) suggest running `eval "$(ssh-agent -s)"` but that does not work in fish. Run this instead:

```sh
command ssh-agent -s
```

### Executing Bash

If fish is your default shell and you want to copy commands from the internet that are written in bash (the default shell on most systems), you can proceed in one of the following two ways:

Use the bash command with the -c switch to read from a string:

```sh
$ bash -c 'some bash command'
```

Use bash without a switch to open a bash shell you can use and exit afterward:

```sh
> bash
$ some bash command
$ exit

> _
```

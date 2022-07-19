---
title: Run npm script from another directory
created: 2022-07-19T16:26:06.000Z
modified: 2022-07-19T16:26:06.000Z
---

## npm

To run an npm script from another directory, use --prefix:

```sh
npm --prefix <path> run <command>
```

## yarn

To run a yarn script from another directory, use --cwd:

```sh
yarn --cwd <path> <command>
```

## Example

If you have a `package.json` in the `example` directory:

```json
{
  "scripts": {
    "start": "echo hello world"
  }
}
```

In the following directory:

```
.
├─ example
│  ├─ package.json
├─ package.json
```

1 directory, 1 file

Then to run script `start` from your working directory:

```sh
npm --prefix ./example run start

yarn --cwd ./example start
```

```json
{
  "scripts": {
    "start": "npm --prefix ./example run start"
  }
}
```

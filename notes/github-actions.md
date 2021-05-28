---
title: GitHub Actions
link: https://github.com/marketplace?type=actions
tags:
  - devops
created: 2021-03-03T12:25:27.000Z
modified: 2021-05-07T09:47:35.049Z
---

Docs:

- https://docs.github.com/en/actions
- [Actions reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

## Example workflows

### On push

```yml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
      - run: npm install -g bats
      - run: bats -v
```

### PRs only

```yml
name: Run on PR
'on': pull_request
jobs:
  build_and_preview:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Get yarn cache directory path
        id: yarn-cache-dir-path
        run: echo "::set-output name=dir::$(yarn cache dir)"
      - uses: actions/cache@v2
        id: yarn-cache
        with:
          path: ${{ steps.yarn-cache-dir-path.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
      - name: Install dependencies
        run: yarn --prefer-offline
      - name: bundlephobia-checker
        # https://github.com/carlesnunez/check-my-bundlephobia
        uses: carlesnunez/check-my-bundlephobia@v1.8.0
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          strict: true
          threshold: 800
          ignore-dev-dependencies: true
      - name: Lint
        run: yarn lint
      - name: Test
        run: yarn test
      - name: Build app
        run: yarn build
```

### On merge into `main` branch

```yml
name: Run on merge
'on':
  push:
    branches:
      - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Get yarn cache directory path
        id: yarn-cache-dir-path
        run: echo "::set-output name=dir::$(yarn cache dir)"
      - uses: actions/cache@v2
        id: yarn-cache
        with:
          path: ${{ steps.yarn-cache-dir-path.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
      - name: Install dependencies
        run: yarn --prefer-offline
      - name: Lint
        run: yarn lint
      - name: Test
        run: yarn test
      - name: Build app
        run: yarn build
      - name: Build Storybook
        run: yarn storybook:build
```

## [Enable debug logging](https://docs.github.com/en/actions/managing-workflow-runs/enabling-debug-logging)

Set either/both in your repo's secrets:

- `ACTIONS_STEP_DEBUG=true`
- `ACTIONS_RUNNER_DEBUG=true`

---
title: CircleCI
tags:
  - devops
---

## Basic example

```yaml
version: 2

references:
  npm_auth: &npm_auth
    run:
      name: Authenticate with registry
      command: echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

jobs:
  build:
    docker:
      - image: circleci/node:13.1.0-stretch
    steps:
      - checkout
      - *npm_auth
      - restore_cache: # special step to restore the dependency cache
          # Read about caching dependencies: https://circleci.com/docs/2.0/caching/
          key: dependency-cache-{{ checksum "yarn.lock" }}
      - run:
          name: install
          command: yarn install
      - save_cache: # special step to save the dependency cache
          key: dependency-cache-{{ checksum "yarn.lock" }}
          paths:
            - ./node_modules
      - run:
          name: build
          command: yarn build
      - run:
          name: test
          command: yarn test

workflows:
  version: 2
  build-test:
    jobs:
      - build
```

## Using the CircleCI tool locally

```sh
# run a particular job locally
circleci local execute --job build -e NPM_TOKEN=9e012519-aba7-4372-8381-abcdefghijkl

# validate a config locally
circleci config validate
```

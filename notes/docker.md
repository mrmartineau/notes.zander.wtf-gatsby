---
title: Docker
emoji: 🐳
tags:
  - devops
created: 2020-02-27T23:02:00.000Z
modified: 2022-09-22T13:31:32.000Z
---

## Best practices

- [Node Dockerfile best practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)
- [Dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

## Dockerfile examples

```docker
FROM node:12.4.0-alpine
ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /usr/src/app
EXPOSE 8080
ENTRYPOINT ["yarn", "start"]

RUN mkdir -p /usr/src/app
COPY . .
RUN yarn install && \
    yarn build && \
    yarn test && \
    yarn install --production && \
    rm -rf .git
```

### Build a Dockerfile locally

```docker
docker build .

# or

docker build -t yourTagName .
```

### Run a Dockerfile locally

```docker
docker run -p 1717:1717 yourTagName
```

### Docker commands

```docker
# list all running containers
docker ps

# stop/remove particular running container
docker rm -f $containerId

# stop all containers
docker rm -f (docker ps -aq)

# browse running container files
docker exec -it $containerId sh
```

## Using private npm packages

[Securely using .npmrc files in Docker images](https://www.alexandraulsh.com/2018/06/25/docker-npmrc-security/)

Here's an example of the above

```docker
# Multi-stage build info & npm security
# from https://www.alexandraulsh.com/2018/06/25/docker-npmrc-security/

# First build
FROM node:13.2.0 AS build
ENV NPM_CONFIG_LOGLEVEL info
WORKDIR /usr/src/app
ARG NPM_TOKEN

RUN mkdir -p /usr/src/app
COPY . .
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
    yarn install && \
    yarn build && \
    yarn test && \
    yarn storybook:build && \
    yarn install --production && \
    rm -f .npmrc \
    rm -rf .git


# Second build
FROM node:13.2.0-alpine
WORKDIR /usr/src/app

EXPOSE 8080
COPY --from=build /usr/src/app .

ENTRYPOINT ["yarn", "start"]
```

Then you would run the build like so:

```diff
docker build -t mrmartineau/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1} \
+               --build-arg NPM_TOKEN=${NPM_TOKEN} \
```

The above extract is from one project's CircleCI config.

This is how you would run it locally

```sh
docker build . -f dockerfile -t kiss --build-arg NPM_TOKEN=9e012519-aba7-4372-8381-abcdefghi
```

## Security

https://cloudberry.engineering/article/dockerfile-security-best-practices/

Hacker News comments for the above article: https://news.ycombinator.com/item?id=24776771

## Using Docker on a Mac
- Rancher Desktop (https://rancherdesktop.io/)
  - [Using Rancher Desktop as Docker Desktop replacement on macOS](https://www.danielstechblog.io/using-rancher-desktop-as-docker-desktop-replacement-on-macos/) - Daniel's Tech Blog 
- [Podman Desktop](https://podman-desktop.io/)
- [Colima](https://github.com/abiosoft/colima) (CLI tool) - Container runtimes on macOS (and Linux) with minimal setup
- [Portainer](http://www.portainer.io/) (Web-based) Docker and Kubernetes Management

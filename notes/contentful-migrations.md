---
title: Contentful migrations
tags:
  - javascript
created: 2021-01-06T11:24:00.000Z
modified: 2021-01-06T11:24:00.000Z
emoji: 🦒
---

# Content & schema migrations

For migrations you will need Contentful's [command line interface tool](https://github.com/contentful/contentful-cli).

### Pre-requisites

- Node LTS

### Installation

Using [homebrew](https://brew.sh):

```sh
brew install contentful-cli
```

Using [npm](https://npmjs.org):

```sh
npm install -g contentful-cli
```

Using [yarn](https://yarnpkg.com):

```sh
yarn global add contentful-cli
```

### Login

You will need to login to contentful on your computer. Run `contentful login` and follow the prompts, see below for an example:

```sh
❯ contentful login

A browser window will open where you will log in (or sign up if you don’t have an account), authorize this CLI tool and paste your CMA token here:

? Open a browser window now? Yes
? Paste your token here: [hidden]

Great! Your CMA token is now stored on your system. (Located at /Users/zander/.contentfulrc.json)
You can always run contentful logout to remove it.
```

Create a new CMA token (personal access token) from [this page](https://app.contentful.com/spaces/t51bs9y4c70l/api/cma_tokens).

## Content modeling

Every time you need to modify a content model, a new migration script should be created. It needs to be carefully modeled so that you don't overwrite existing types and content.

For more information on how to model your content programmatically, see [these docs](https://www.contentful.com/developers/docs/concepts/data-model/)

When editing existing fields, it can be useful to view the JSON representation of the content model to see what is there. e.g. https://app.contentful.com/spaces/t51bs9y4c70l/environments/staging/content_types/article/preview

Useful links:

- [Migration docs](https://github.com/contentful/contentful-migration)
- [Editor interfaces](https://www.contentful.com/developers/docs/extensibility/app-framework/editor-interfaces/)
- [Validations](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/content-types/content-type)
- [Contentful migrations tutorial](https://www.contentful.com/developers/docs/tutorials/cli/scripting-migrations/)
- [Video overview of using the contentful CLI](https://contentful.wistia.com/medias/kkw7k4j7lp)
- [CMS as code](https://www.contentful.com/help/cms-as-code/) - article about migrations etc on the Contentful help centre
- [Managing multiple environments](https://www.contentful.com/developers/docs/concepts/multiple-environments/)
- [Example migrations](https://github.com/contentful/contentful-migration/tree/master/examples)

### Running the migration

It is a good idea to create a `test` environment that is a clone of `master` so that everything can be checked before running the migration script "for real".

```sh
contentful space migration --space-id a65gr7u3g09k --environment-id 'test' 01-add-article-cta-type.js
```

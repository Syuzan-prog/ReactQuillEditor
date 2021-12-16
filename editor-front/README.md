
---

## Table of contents

 - [Getting started](#getting-started)
 - [Linting](#linting)
 - [Building](#building)

<a name="getting-started"></a>
## Getting started

In order to start project development on the package follow these steps:

 - Install Node.js(v15+), preferably through [nvm](https://github.com/nvm-sh/nvm)
 - Install [yarn](https://www.npmjs.com/package/yarn) globally
 - Clone the project and install the dependencies through `yarn install`
 - Create a `.env` file with the following content: 
    - `APP_API_URL=<api_url>`(without a trailing slash), where `<api_url>` is the backend url.
    - `INTERCOM_APP_ID=<app_id>`, where <app_id> is the ID provided by Intercom
 - Run the project through `yarn start`

Note: Avoid using `npm` when working with packages, this will create an unnecessary lockfile(`yarn` already creates one).

<a name="linting"></a>
## Linting

The project includes `eslint` and `stylelint` configurations, each editor has it's own way of reading and configuring linters so the editor setups are not included in this README. It's recommended to at least turn on `autofix` features for both `eslint` and `stylelint`.

You can also run `yarn lint:fix` and `yarn stylelint:fix` for a full scan of the repository. These commands will solve autofixable issues and report about the rest(if any).

<a name="building"></a>
## Building

Use `yarn build:dev` /`yarn build:prod` to build the static files in `development` /`production` mode.

You can also run `yarn analyze` to create a `production` build and analyze your static files with the help of [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer).

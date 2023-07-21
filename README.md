# Logicer's Prettier Base Configuration

[![npm (scoped)](https://img.shields.io/npm/v/%40logicer/prettier-config)](https://www.npmjs.com/package/@logicer/prettier-config)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/prettier-config/style.yml)](https://github.com/Logicer16/prettier-config/actions)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/prettier-config)](https://github.com/Logicer16/prettier-config/graphs/contributors)

Logicer's Prettier configuration for use in other projects. Able to be built upon for the project's specific needs.

## Install

```sh
npm install --save-dev --save-exact prettier
npm install --save-dev @logicer/prettier-config
```

## Usage

In any valid [Prettier config file](https://prettier.io/docs/en/configuration.html#sharing-configurations), make its sole export the string:

```JSON
"@logicer/prettier-config"
```

You can also extend upon the configuration by adding importing it into a `.prettierrc.js` file. For example:

<!-- prettier-ignore-start -->
```js
import logicerPrettierConfig from "@logicer/prettier-config";

export default {
  ...logicerPrettierConfig,
  // ... Your modifications
};
```
<!-- prettier-ignore-end -->

Additionally, an accompanying recommended `.editorconfig` file is available [here](https://github.com/logicer/prettier-config/blob/main/.editorconfig)

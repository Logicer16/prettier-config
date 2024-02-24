# Logicer's Prettier Base Configuration

[![npm (scoped)](https://img.shields.io/npm/v/%40logicer/prettier-config)](https://www.npmjs.com/package/@logicer/prettier-config)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/prettier-config/style.yml)](https://github.com/Logicer16/prettier-config/actions)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/prettier-config)](https://github.com/Logicer16/prettier-config/graphs/contributors)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type%20coverage&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2FLogicer16%2Fprettier-config%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)

Logicer's Prettier configuration for use in other projects. Able to be built upon for the project's specific needs.

An accompanying recommended `.editorconfig` file is available [here](https://github.com/logicer/prettier-config/blob/main/.editorconfig)

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

### Advanced

This modules also exports `prettierConfigGenerator(options)`. This produces a prettier config with appropriate plugins enabled and configured based the the options provided. The options should match those passed to [`@logicer/eslint-plugin`'s `configGenerator()`](https://github.com/Logicer16/eslint-plugin?tab=readme-ov-file#usage)

For example, in your `.prettierrc.js`:

```js
import {options} from "./eslint.config.js";
import {prettierConfigGenerator} from "@logicer/prettier-config";

export default prettierConfigGenerator(options);
```

If you create multiple generator instances in your `eslint.config.js`, it is recommended you either make use of [overrides](https://prettier.io/docs/en/configuration.html#configuration-overrides) or pass a combination of the option sets, choosing the most featureful settings where appropriate

For example, in your `.prettierrc.js`:

```js
import {prettierConfigGenerator} from "@logicer/prettier-config";

const optionsA = {
  ecmaVersion: 2017,
  javascript: true,
  jest: true
};

const optionsB = {
  ecmaVersion: 2017,
  javascript: true,
  jsdoc: true,
  prettier: true,
  typescript: true
};

const resultingOptions = {
  // Use the highest ecmaVersion used in the configs.
  ecmaVersion: 2020,
  // Keep identical options as is.
  javascript: true,
  // Enable options that are enabled in at least one option set.
  jest: true,
  jsdoc: true,
  prettier: true,
  typescript: true

  // Omitted options remain disabled by default.
  // svelte: false
};

export default prettierConfigGenerator(resultingOptions);
```

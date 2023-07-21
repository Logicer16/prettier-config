/**
 * @file The base prettier configuration.
 */

import {Options} from "prettier";

const prettierConfig: Options = {
  bracketSameLine: true,
  bracketSpacing: false,
  printWidth: 80,
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  trailingComma: "none",

  // Duplicates from .editorconfig
  // eslint-disable-next-line sort-keys
  tabWidth: 2,
  useTabs: false
};

export default prettierConfig;

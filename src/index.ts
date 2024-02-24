/**
 * @file The base prettier configuration.
 */

// Espree is yet to support import-attributes
// eslint-disable-next-line import/namespace, import/no-deprecated
import type {ConfigOptions} from "@logicer/eslint-plugin";
import {mergeObjects} from "./mergeObjects.js";
import {Options} from "prettier";

const defaultConfig: Options = {
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

const svelteConfig: Options = {
  overrides: [{files: "*.svelte", options: {parser: "svelte"}}],
  plugins: ["prettier-plugin-svelte"],
  svelteStrictMode: true
};

// const tailwindConfig: Options = {
//   plugins: ["prettier-plugin-tailwindcss"]
// };

/**
 * Generates a prettier config based on the provided options.
 * @param options The options used to configured the generated config. The options should match those passed to `@logicer/eslint-plugin`. If you create multiple generator instances in your `eslint.config.js`, use of prettier's overrides or pass a combination of the option sets, choosing the most featureful settings where appropriate.
 * @returns A prettier config.
 */
export function prettierConfigGenerator(options?: ConfigOptions): Options {
  return mergeObjects(
    defaultConfig,
    options?.svelte === true ? svelteConfig : {}
    // options?.tailwind === true ? tailwindConfig : {}
  );
}

const defaultPrettierConfig: Options = prettierConfigGenerator();

export default defaultPrettierConfig;

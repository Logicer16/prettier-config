/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @file The eslint config.
 */
// Espree is yet to support import-attributes
// eslint-disable-next-line import/namespace, import/no-deprecated
import {ConfigGenerator} from "@logicer/eslint-plugin";

const generator = new ConfigGenerator({
  javascript: true,
  jsdoc: true,
  prettier: true,
  typescript: true
});

/**
 * @type {import("eslint").Linter.FlatConfigFileSpec[]}
 */
const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  "coverage/**/*",
  ".type-coverage/**/*",

  "**/.eslint_report.json",
  "**/.eslintcache"
];

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const config = [
  {ignores},
  ...(await generator.config),
  {
    languageOptions: {
      ecmaVersion: 2024,
      parserOptions: {
        ecmaVersion: 2024,
        project: ["./tsconfig.json", "./tsconfig.*.json"],
        sourceType: "module"
      }
    },
    settings: {
      "import/parsers": {
        // Temporary until https://github.com/import-js/eslint-plugin-import/pull/2829
        espree: [".js", ".jsx", ".cjs", ".mjs"]
      },
      "import/resolver": {
        typescript: {
          project: ["tsconfig.json", "tsconfig.eslint.json"]
        }
      }
    }
  },
  ...(await generator.endConfig)
];

export default config;

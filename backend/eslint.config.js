import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import parserTypeScript from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTs,
    },
    rules: {
      semi: ["error", "always"],
      "space-before-function-paren": [
        0,
        { anonymous: "always", named: "always" },
      ],
      camelcase: 0,
      "no-return-assign": 0,
      quotes: ["error", "single"],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];

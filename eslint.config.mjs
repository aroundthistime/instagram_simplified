import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@next/next/recommended",
    "plugin:@next/next/core-web-vitals",
    "eslint:recommended",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:styled-components-a11y/recommended",
    "prettier",
  ),
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    root: true,
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    plugins: [
      "@next/next",
      "@typescript-eslint",
      "import",
      "prettier",
      "react",
      "styled-components-a11y",
      "no-relative-import-paths",
    ],
    rules: {
      "react/prop-types": "off",
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "no-console": ["error", { allow: ["error"] }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          modifiers: ["unused"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
      ],
      "styled-components-a11y/click-events-have-key-events": "off",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
      ],
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        { allowSameFolder: true, rootDir: "src", prefix: "src" },
      ],
      "no-implicit-coercion": [
        "error",
        {
          allow: ["!!"],
        },
      ],
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      project: [path.resolve(__dirname, "./tsconfig.json")],
      tsconfigRootDir: __dirname,
    },
    ignorePatterns: ["**/*.js"],
  },
];

export default eslintConfig;
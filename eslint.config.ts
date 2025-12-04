import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

import { defineConfig, globalIgnores } from "eslint/config";

import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(["node_modules", "dist", ".astro"]),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], //"**/*.astro"

    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        //"plugin:astro/jsx-a11y-recommended",
        //"plugin:astro/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/warnings",
        "plugin:import/errors",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "prettier"
      )
    ),

    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint as any), // eslint-disable-line @typescript-eslint/no-explicit-any
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      "import/resolver": {
        typescript: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["./src/", "node_modules/"],
        },
      },

      react: {
        version: "detect",
      },
    },

    rules: {
      "no-case-declarations": "off",
      "no-undef": "error",
      "no-debugger": "warn",
      "prefer-const": "warn",

      "react/no-find-dom-node": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": ["warn"],

      "@typescript-eslint/explicit-module-boundary-types": ["off"],
      "@typescript-eslint/no-empty-interface": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_.+",
        },
      ],

      "import/order": [
        "warn",
        {
          "newlines-between": "always-and-inside-groups",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },

          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            ["sibling", "index"],
          ],

          pathGroups: [
            {
              pattern: "(scripts|src)/**/*.(js|jsx|ts|tsx)",
              group: "internal",
              position: "before",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["scripts/**"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);

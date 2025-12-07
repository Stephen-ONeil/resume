import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import { configs as astroConfigs } from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import { configs as tsConfigs } from "typescript-eslint";

export default defineConfig([
  globalIgnores(["node_modules", "dist", ".astro"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    extends: [
      js.configs.recommended,
      tsConfigs.recommended,
      reactPlugin.configs.flat.recommended,
      jsxA11yPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],

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
    files: ["scripts/**.js"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  astroConfigs["flat/recommended"],
  //astroConfigs["jsx-a11y-recommended"], // see https://github.com/ota-meshi/eslint-plugin-astro/pull/496
  prettierPluginRecommended,
]);

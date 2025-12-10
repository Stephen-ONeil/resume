import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import { configs as astroConfigs } from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import { configs as tsConfigs } from "typescript-eslint";

export default defineConfig([
  globalIgnores(["node_modules", "dist", ".astro"]),
  {
    files: ["**/*.{js,ts}"],

    extends: [
      js.configs.recommended,
      tsConfigs.recommended,
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
    },

    rules: {
      "no-case-declarations": "off",
      "no-undef": "error",
      "no-debugger": "warn",
      "prefer-const": "warn",

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
  astroConfigs["jsx-a11y-recommended"],
  prettierPluginRecommended,
]);

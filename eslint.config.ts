import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import { configs as astroConfigs } from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import { configs as tsConfigs } from "typescript-eslint";

export default defineConfig([
  globalIgnores(["node_modules", "dist", ".astro"]),
  js.configs.recommended,
  ...tsConfigs.recommended,
  ...astroConfigs.all,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
        "astro-eslint-parser": [".astro"],
      },
      "import/resolver": {
        typescript: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".astro"],
          // TODO: when rebooting VSCode, import/resolver stops working for src/... modules,
          // until I swap the declaration below between "./src/" and "src/" (or other equivalent paths).
          // ESlint CLI is fine, something with VSCode caching?
          moduleDirectory: ["src/", "node_modules/"],
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
              pattern: "src/**/*",
              group: "internal",
              position: "before",
            },
          ],
        },
      ],
      "import/no-unresolved": [
        "error",
        {
          ignore: [
            // ignore unresolved module on astro modules with nonstandard declarations
            "astro:actions",
            "astro:assets",
            "astro:config",
            "astro:content",
            "astro:env",
            "astro:i18n",
            "astro:middleware",
            "astro:transitions",
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.astro"],

    rules: {
      "import/default": "off",
    },
  },
  {
    files: ["src/{middleware,scripts}/**.{js,ts}"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["src/**.{js,jsx,ts,tsx,astro}"],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  prettierPluginRecommended,
]);

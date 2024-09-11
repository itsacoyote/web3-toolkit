import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginVue from "eslint-plugin-vue";

export default [
  { ignores: ["**/node_modules/", "**/dist/", "**/temp/", "**/tmp/"] },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    jsx: true,
    arrowParens: "always",
  }),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["*.vue", "**/*.vue"],
    rules: {
      "vue/html-self-closing": ["error", {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      }],
    },
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
];

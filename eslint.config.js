import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

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
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

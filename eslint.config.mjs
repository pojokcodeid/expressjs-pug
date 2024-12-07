import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Tambahkan ini untuk mendukung Node.js
      },
    },
  },
  pluginJs.configs.recommended,
];

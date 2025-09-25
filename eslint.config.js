import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactDom from "eslint-plugin-react-dom";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      // Use this for strict rules
      tseslint.configs.strictTypeChecked,
      // Add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);

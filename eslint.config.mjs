import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginReact from "eslint-plugin-react";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        jsx: true, // Enable JSX for React
      },
    },
    plugins: {
      react: eslintPluginReact,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];

import react from "eslint-plugin-react"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import jsxA11y from "eslint-plugin-jsx-a11y"
import importPlugin from "eslint-plugin-import"
import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "@typescript-eslint": typescriptEslint,
      "jsx-a11y": jsxA11y,
      "import": importPlugin,
    },
    rules: {
      "react/jsx-indent": [2, 2],
      "react/jsx-indent-props": [2, 2],
      indent: [2, 2],
      "max-len": ["error", { code: 120, tabWidth: 2 }],

      "@typescript-eslint/no-unused-vars": "warn",
      "import/prefer-default-export": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",
      
      "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }],
      "react/jsx-props-no-spreading": "warn", 
      "react/function-component-definition": "off", 
      
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-param-reassign": "off", 
      "jsx-a11y/click-events-have-key-events": "off", 
      "jsx-a11y/no-static-element-interactions": "off",
    }
  },
])

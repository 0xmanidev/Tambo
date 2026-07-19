import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        ignores: ["dist/**", "node_modules/**", "coverage/**"],
    },

    js.configs.recommended,

    {
        files: ["**/*.{js,mjs,cjs}"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                ...globals.browser,
            },
        },

        rules: {
            /* Possible bugs */
            "no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],

            "no-undef": "error",
            "no-unreachable": "error",
            "no-constant-condition": "warn",

            /* Best practices */
            eqeqeq: ["error", "always"],
            curly: ["error", "all"],
            "prefer-const": "warn",
            "no-var": "error",
            "object-shorthand": "warn",
            "prefer-template": "warn",

            /* Style */
            "no-trailing-spaces": "warn",
            "eol-last": ["warn", "always"],
        },
    },

    prettier,
]);

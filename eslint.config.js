/* eslint-disable no-restricted-exports, @typescript-eslint/naming-convention */
import pluginJs from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: ["**/dist/**/*.{js,mjs,cjs}"]
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"]
    },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    eslintPluginImport.flatConfigs.recommended,
    pluginJs.configs.recommended,
    ...tseslint.configs.strict,
    {
        rules: {
            "no-console": "error",
            "func-style": ["error", "declaration"],
            semi: ["error", "always"],
            quotes: [
                "error",
                "double",
                {
                    allowTemplateLiterals: true
                }
            ],
            "object-curly-spacing": [
                "error",
                "always",
                {
                    arraysInObjects: true,
                    objectsInObjects: true
                }
            ],
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: [".*", "!@/*"],
                            message: "Only @/* imports are allowed"
                        }
                    ]
                }
            ],
            "no-restricted-exports": [
                "error",
                {
                    restrictDefaultExports: {
                        direct: true,
                        named: true,
                        defaultFrom: true,
                        namedFrom: true,
                        namespaceFrom: true
                    }
                }
            ],
            "import/exports-last": "error",
            "import/no-duplicates": "error",
            "import/order": [
                "error",
                {
                    "newlines-between": "always",
                    groups: [
                        "index",
                        "sibling",
                        "parent",
                        "builtin",
                        "object",
                        "external",
                        "internal",
                        "type"
                    ],
                    named: true,
                    alphabetize: { order: "asc", orderImportKind: "asc" },
                    warnOnUnassignedImports: true
                }
            ],
            "no-multiple-empty-lines": [
                "error",
                {
                    max: 1,
                    maxEOF: 0,
                    maxBOF: 0
                }
            ],
            "padding-line-between-statements": [
                "error",
                {
                    blankLine: "always",
                    prev: ["const", "let", "var"],
                    next: "*"
                },
                {
                    blankLine: "always",
                    prev: "*",
                    next: ["const", "let", "var"]
                },
                {
                    blankLine: "any",
                    prev: ["const", "let", "var"],
                    next: ["const", "let", "var"]
                },
                { blankLine: "always", prev: "directive", next: "*" },
                { blankLine: "any", prev: "directive", next: "directive" },
                { blankLine: "always", prev: ["case", "default"], next: "*" },
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: "*", next: "block-like" },
                { blankLine: "always", prev: "block-like", next: "*" },
                { blankLine: "always", prev: "*", next: "block" },
                { blankLine: "always", prev: "block", next: "*" }
            ],
            "space-before-blocks": "error",
            "space-before-function-paren": ["error", "never"],
            "comma-spacing": ["error", { before: false, after: true }],
            "comma-dangle": [
                "error",
                {
                    arrays: "never",
                    objects: "never",
                    imports: "never",
                    exports: "never",
                    functions: "never"
                }
            ],
            "@typescript-eslint/consistent-type-assertions": [
                "error",
                {
                    assertionStyle: "never"
                }
            ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "default",
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow"
                },

                {
                    selector: "import",
                    format: ["camelCase", "PascalCase"]
                },

                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow"
                },

                {
                    selector: "typeLike",
                    format: ["PascalCase"]
                }
            ]
        }
    },
    {
        settings: {
            "import/resolver": {
                typescript: {}
            }
        }
    }
];

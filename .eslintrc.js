module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-native", "import"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-native/all",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier",
    ],
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {},
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
        ],
        "no-restricted-imports": [
            "error",
            {
                patterns: ["../*"],
            },
        ],
        "import/default": "off",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                pathGroups: [
                    {
                        pattern: "~/**",
                        group: "internal",
                    },
                ],
                pathGroupsExcludedImportTypes: ["builtin"],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true }
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks'
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    rules: {
        semi: [2, 'always']
    }
};

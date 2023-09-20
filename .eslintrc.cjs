module.exports = {
    root: true,
    env: {
        node: true,
        es2024: true
    },
    extends: [
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']]
            }
        ],

        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/newline-after-import': 'error'
    }
}

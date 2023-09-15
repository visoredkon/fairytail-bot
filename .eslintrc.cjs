module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
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
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/newline-after-import': 'error',
        'sort-imports': [
            'error',
            {
                allowSeparatedGroups: true,
                memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
            }
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^(@|components)(/.*|$)'],
                    ['^\\u0000'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
                ]
            }
        ]
    }
}

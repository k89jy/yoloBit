module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Your TypeScript files extension
  
        // As mentioned in the comments, you should extend TypeScript plugins here,
        // instead of extending them outside the `overrides`.
        // If you don't want to extend any rules, you don't need an `extends` attribute.
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
    extends: [
      // 'eslint:recommended',
      // 'plugin:@typescript-eslint/recommended',
      // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      // 'plugin:prettier/recommended',
      // 'prettier/@typescript-eslint'
    ]
  }
]
}
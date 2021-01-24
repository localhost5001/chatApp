module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    "ecmaFeatures":  {
      "jsx":  true
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}

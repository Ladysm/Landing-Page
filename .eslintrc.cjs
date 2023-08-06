module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'

  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'import/extensions': 0,
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: 'error',
    indent: ['error', 2],
    semi: ['error', 'always']
  }
};

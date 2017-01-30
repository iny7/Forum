module.exports = {
  root: true,
  parser: 'babel-eslint',
  // extends: ['standard', 'plugin:react/recommended'],
  plugins: [
    'react'
  ],
  'rules': {
    'arrow-parens': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [2, 'never'],
    'no-console': 0
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  }
}

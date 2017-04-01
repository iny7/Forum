module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:react/recommended'],
  plugins: [
    'react'
  ],
  "env": {
    'browser': true,
    'node': true
  },
  'rules': {
    'arrow-parens': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [2, 'never'],
    'camelcase': 0,
    'no-console': 0,
    'eol-last': 0,
    'react/display-name': 0,
    'react/prop-types': 0
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  }
}

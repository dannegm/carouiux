module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    config: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {},
    },
  },
};

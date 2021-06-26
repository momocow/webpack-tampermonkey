const config = require('eslint-config-standard-typescript-prettier');

module.exports = {
  ...config,
  parserOptions: { project: './tsconfig.json' },
  rules: {
    ...config.rules,
    '@typescript-eslint/no-explicit-any': 'error',
    'max-len': ['error', { code: 80 }],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"]
  }
};

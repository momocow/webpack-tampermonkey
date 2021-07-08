const config = require('eslint-config-standard-typescript-prettier');

module.exports = {
  ...config,
  plugins: [...config.plugins, "eslint-plugin-tsdoc"],
  parserOptions: { project: './tsconfig.json' },
  rules: {
    ...config.rules,
    '@typescript-eslint/no-explicit-any': 'error',
    'max-len': ['error', { code: 80 }],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "tsdoc/syntax": "warn"
  }
};

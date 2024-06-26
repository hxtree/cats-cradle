module.exports = {
  extends: ['@galaxyops/eslint-config/profile/base'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-prototype-builtins': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-await-in-loop': 'off',
  },
};

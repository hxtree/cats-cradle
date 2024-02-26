/**
 * Commits to source control MUST adhere to the Conventional Commits standard.
 * {@link https://www.conventionalcommits.org/en/v1.0.0/}
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'client',
        'middleware',
        'service',
        'platform',
        'library',
        'test',
        'deps',
        'pipeline',
      ],
    ],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'chore', 'wip', 'style'],
    ],
    'scope-case': [2, 'always', 'kebab-case'],
  },
};

module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src/', '<rootDir>/stacks/'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

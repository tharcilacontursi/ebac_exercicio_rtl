module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    resources: 'usable',
  },
};

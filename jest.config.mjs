export default {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  globalTeardown: './jest.teardown.js',
  testMatch: [
    "**/tests/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],
};
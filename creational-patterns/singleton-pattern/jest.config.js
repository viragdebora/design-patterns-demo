/** @type {import('jest').Config} */
export const config = {
    verbose: true,
    setupFilesAfterEnv: ['./jest.setup.js'],
    globalTeardown: './jest.teardown.js',
};
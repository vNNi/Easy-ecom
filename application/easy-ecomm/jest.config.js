module.exports = {
  resetMocks: false,
  setupFilesAfterEnv: ['./jest.setup.js', 'jest-localstorage-mock'],
  testEnvironment: 'jsdom',
};

module.exports = {
  setupFilesAfterEnv: ['./lib/models/index.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['./node_modules', './dist'],
};

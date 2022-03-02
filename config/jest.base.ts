const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../tsconfig.spec.json');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ["<rootDir>/config/jest.setup.ts"],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  })
};
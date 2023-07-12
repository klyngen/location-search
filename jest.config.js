const esModules = ['pwa-helpers', 'lit', '@lit'].join('|');
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts|js?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  globals: {
    "ts-jest": {
      tsconfig: 'tsconfig.spec.json'
    }
  }
};

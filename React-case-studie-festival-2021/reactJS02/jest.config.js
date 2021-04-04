module.exports = {
  name: '@abcbrasil/react-native-ui-components',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/components/**/*.tsx'],
  coveragePathIgnorePatterns: ['/node_modules/', 'lib'],
  coverageDirectory: 'coverage',
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^react-spring(.*)$':
      '<rootDir>/node_modules/react-spring/renderprops-native.cjs',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 87,
      lines: 89,
      statements: 89,
    },
  },
};

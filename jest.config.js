module.exports = {
  preset: 'react-native',
  automock: false,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFiles: ['@rnmapbox/maps/setup-jest', '<rootDir>/jest.setup.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  coveragePathIgnorePatterns: ['!*.d.ts'],
  transformIgnorePatterns: [`node_modules/(?!(${ignoreModules.join('|')})/)`],
};

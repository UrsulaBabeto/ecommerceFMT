export default {
    
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
    
    moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      customExportConditions: ['react-native'],
    }
    };

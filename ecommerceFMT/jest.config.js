export default {
    
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
    
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|svg|woff|mp4|webm|wav|mp3|m4a|aac|oga)$':'idenify-obj-proxy'
      },
      
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      customExportConditions: ['react-native'],
    }
    };

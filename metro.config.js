require('dotenv').config();

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts; //https://github.com/wix/Detox/blob/master/docs/Guide.Mocking.md

module.exports = {
  resolver: {
    sourceExts:
      process.env.NODE_ENV !== 'production'
        ? `${process.env.NODE_ENV.toLowerCase()}.ts`
            .split(',')
            .concat(defaultSourceExts)
        : defaultSourceExts,
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

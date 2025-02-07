const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [
    path.resolve(__dirname, './src/assets'),
    path.resolve(__dirname, './src/styles'),
    path.resolve(__dirname, './src/utils'),
    path.resolve(__dirname, './src/screens'),
    path.resolve(__dirname, './src/navigation'),
    path.resolve(__dirname, './src/common'),
    path.resolve(__dirname, './src/helpers'),
    path.resolve(__dirname, './src/constants'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

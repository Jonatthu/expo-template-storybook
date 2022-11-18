const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {

    config = {
      ...config,
      plugins: [
        ...config.plugins,
        new CopyPlugin({
          patterns: [
            {
              from: '../node_modules/canvaskit-wasm/bin/full/canvaskit.wasm',
            },
          ],
        }),
      ],
    }

    return config;
  }
};

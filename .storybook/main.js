/* eslint-disable
    @typescript-eslint/no-var-requires
*/

const { resolve } = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // 1 => postcss-loader
            modules: {
              localIdentName: '[local]___[hash:base64:2]',
            },
          },
        },
        'sass-loader',
      ],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      components: resolve(__dirname, '../src/components'),
      styles: resolve(__dirname, '../src/styles'),
    };
    return config;
  },
};

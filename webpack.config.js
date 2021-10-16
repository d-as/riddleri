const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-typescript',
            [
              '@babel/preset-env',
              {
                // A version before template literal support is used for
                // each browser since Rhino (1.7.12) doesn't support them
                //
                // https://caniuse.com/template-literals
                // https://mozilla.github.io/rhino/compat/engines.html
                targets: {
                  chrome: '40',
                  firefox: '33',
                },
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
          ],
        },
      },
    }],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts'],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'scripts/custom/generated'),
    filename: 'commands.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

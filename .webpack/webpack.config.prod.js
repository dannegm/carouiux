const path = require('path');
const webpack = require('webpack');

const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: path.join(__dirname, './../src/index.js'),

  output: {
    path: path.join(__dirname, './../build'),
    filename: `[name].min.js?${new Date().getTime()}`,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['styled-components'],
            },
          },
          'stylelint-custom-processor-loader',
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'resolve-url-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        include: [path.resolve(__dirname, './../src/assets/images')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: [path.resolve(__dirname, './../src/assets/fonts')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    mangleWasmImports: true,
    minimizer: [new TerserPlugin()],
    nodeEnv: 'production',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CompressionPlugin({
      threshold: 10240,
    }),

    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      compressionOptions: {
        level: 11,
      },
      threshold: 10240,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/',
          to: './',
        },
      ],
    }),

    new HtmlWebPackPlugin({
      template: path.join(__dirname, './../public/index.html'),
    }),

    new webpack.DefinePlugin({ config: JSON.stringify(require('config')) }),
  ],

  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(__dirname, './../src/'),
    },
    modules: ['node_modules'],
  },
};

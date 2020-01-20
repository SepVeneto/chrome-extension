const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths-my');
module.exports = function () {
  return {
    devtool: 'source-map',
    entry: {
      popup: paths.appPopupJs,
      background: paths.appBackgroundJs,
      options: paths.appOptionsJs,
      details: paths.appDetailsJs,
    },
    output: {
      path: paths.appStatic,
      filename: 'js/[name].[contenthash:8].bundle.js',
      chunkFilename: 'js/[id].[contenthash:8].chunk.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../popup.html',
        template: paths.appPopup,
        chunks: ['popup'],
      }),
      new HtmlWebpackPlugin({
        filename: '../background.html',
        template: paths.appBackground,
        chunks: ['background'],
      }),
      new HtmlWebpackPlugin({
        filename: '../options.html',
        template: paths.appOptions,
        chunks: ['options'],
      }),
      new HtmlWebpackPlugin({
        filename: '../details.html',
        templage: paths.appDetails,
        chunks: ['details'],
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [{
        test: /\.tsx$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        use: 'ts-loader',
      }, {
        test: /\.css$/,
        include: paths.appSrc,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }
        // ,{
        //   loader: 'style-loader'
        // }
      ],
      },{
        test: /\.scss$/,
        include: paths.appSrc,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
        //  {
        //   loader: 'style-loader'
        // }, 
        {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
      }]
    }
  }
}
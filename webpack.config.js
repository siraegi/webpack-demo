
// require는 common js spec에서 모듈을 가져오는 방식
const HtmlWebpackPlugin = require('html-webpack-plugin');
// path 는 node에 내장된 기본 모듈
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// json 객체를 다른 파일, 다른 모듈에서 쓸 수 있도록 export
// module.exports 는 common js spec에서 정의된 모듈 전체를 내보내는 방식
// es6 에서는 그냥 export
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
};
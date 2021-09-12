const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const rulesForStyles ={
  test: /\.(c|sc|sa)ss$/,
  use: ['style-loader', 'css-loader','sass-loader']
}
const ruleForJavaScript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        { 
          runtime: 'automatic' // 'clasic'
        }
      ]
    ]
  }
}
const rules = [ruleForJavaScript, rulesForStyles]
module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode == 'production'
  return {
    //entry: './src/index.js'
    output:{
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    module:{ rules: rules },
    devServer: {
      open: true, //abrirnos el navegador
      port: 3000,
      compress: true
    },
    devtool: 'source-map'
  }
}


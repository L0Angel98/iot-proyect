const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const rulesForStyles = {
  test: /\.(c|sc|sa)ss$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const ruleForSVG = {
  test: /\.svg$/,
  use: ["@svgr/webpack", "file-loader"],
};

const ruleForJavaScript = {
  test: /\.js$|jsx/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic", // 'clasic'
        },
      ],
    ],
  },
};
const ruleForImg = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
};
const rules = [ruleForJavaScript, rulesForStyles, ruleForSVG, ruleForImg];
module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode == "production";
  return {
    //entry: './src/index.js'
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    module: { rules: rules },
    devServer: {
      open: true, //abrirnos el navegador
      port: 3000,
      compress: true,
    },
    devtool: "inline-source-map",
  };
};

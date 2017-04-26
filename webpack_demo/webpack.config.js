module.exports = {
  entry: "./src/script/index.js",
  output: {
    path: "./dist/js",
    filename: "bundle.js"
  },
  module: {
      rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader','eslint-loader']
      },
      {
        test: /\.html$/,
        use: ['style-loader','css-loader']
      },
      {
        text: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      
    })
  ]
}

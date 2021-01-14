module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=812392',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  },
}

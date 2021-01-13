module.exports = {
    configureWebpack: {
        module: {
            rules: [
              {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=812392',
              },
              // {
              //   test: /\.s?[ac]ss$/,
              //   use: [
              //     'vue-style-loader',
              //     {
              //       loader: 'sass-loader',
              //       options: {
              //         implementation: require('sass'),
              //         sourceMap: true,
              //         sassOptions: {
              //           fiber: require('fibers'),
              //           indentedSyntax: true
              //         },
              //       }
              //     }
              //   ]
              // },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
            ],
          },
  }
}
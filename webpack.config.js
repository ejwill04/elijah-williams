module.exports = {
  entry: './app',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg/,
          loader: [
            'svg-url-loader',
          ],
      },
    ]
  },
  // sassLoader: {
  //   includedPaths: [
  //     path.join(__dirname, 'node_modules/normalize-scss/sass'),
  //   ],
  // },
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
  },
  externals: {
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
  }
}

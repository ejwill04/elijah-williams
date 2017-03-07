module.exports = {
  entry: './app',
  output: {
    path: './',
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
      { test: /\.(png|jpg)$/,
         loader: "url-loader?limit=5000"
      },
    ]
  },
  devServer: {
    contentBase: './',
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

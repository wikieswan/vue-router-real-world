var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/dev-server',
    './index'
  ],
  // entry: {
  //   app: ['webpack/hot/dev-server', './index.js']
  // }
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  watch: true,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist/,
        loader: 'babel?optional[]=runtime&loose=true'
      }
      // ,
      // {
      //   test: /\.css?$/,
      //   loader: 'style-loader!css-loader!postcss-loader'
      // },
      // {
      //   test: /\.less/,
      //   loader: 'style-loader!css-loader!postcss-loader!less-loader'
      // }
    ]
  }
}


// module.exports = {
//   entry: {
//     app: ['webpack/hot/dev-server', './index.js']
//   },
//   output: {
//     path: './',
//     filename: 'build.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.vue$/,
//         loader: 'vue'
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules|vue\/dist/,
//         loader: 'babel?optional[]=runtime&loose=true'
//       }
//       // ,
//       // {
//       //   test: /\.css?$/,
//       //   loader: 'style-loader!css-loader!postcss-loader'
//       // },
//       // {
//       //   test: /\.less/,
//       //   loader: 'style-loader!css-loader!postcss-loader!less-loader'
//       // }
//     ]
//   },
//   devtool: 'source-map'
// }

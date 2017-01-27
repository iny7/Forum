var path = require('path')
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin
var autoprefixer = require('autoprefixer')
var mapValues = require('lodash/mapValues')

// must match config.webpack.manifest_filename
var manifestFilename = 'manifest.json'
// must match config.webpack.output_dir
var outputPath = path.join(__dirname, '..', '..', 'public', 'webpack')

var entryRoot = path.join(__dirname, '../src/pages')

var entry = {
  welcome: path.join(entryRoot, 'welcome')
}

module.exports = {
  entry: mapValues(entry, function (entry) {
    return ['babel-polyfill'].concat(entry)
  }),
  output: {
    path: outputPath,
    publicPath: '/webpack/',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules')
    ],
    extensions: ['', '.js', '.vue']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new StatsWriterPlugin({
      filename: manifestFilename,
      fields: [
        'assets',
        'assetsByChunkName'
      ]
    })
  ]
}

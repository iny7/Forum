var path = require('path')
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin
// var autoprefixer = require('autoprefixer')
var mapValues = require('lodash/mapValues')

// must match config.webpack.manifest_filename
var manifestFilename = 'manifest.json'
// must match config.webpack.output_dir
var outputPath = path.join(__dirname, '..', '..', 'public', 'webpack')

var entryRoot = path.join(__dirname, '../src/pages')

var entry = {
  // welcome: path.join(entryRoot, 'welcome'),
  application: entryRoot
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
    modules: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules')
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "styles/variable";@import "styles/mixin";',
              includePaths: [
                path.resolve(__dirname, '../src')
              ]
            }
          }
        ]
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

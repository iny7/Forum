var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config.common')

var devServerHost = '0.0.0.0'
// must match config.webpack.dev_server.port
var devServerPort = 3808

for (var entry in config.entry) {
  config.entry[entry].push(
    'webpack-dev-server/client?http://' + devServerHost + ':' + devServerPort,
    'webpack/hot/dev-server',
    'react-hot-loader/patch'
  )
}

config.module.loaders.push(
  {
    test: /\.css$/,
    include: path.join(__dirname, '../src'),
    loaders: ['style-loader', 'css-loader?importLoaders=1&modules&localIdentName=[path][name]---[local]---[hash:base64:5]', 'postcss-loader']
  },
  {
    test: /\.css$/,
    exclude: path.join(__dirname, '../src'),
    loaders: ['style-loader', 'css-loader', 'postcss-loader']
  }
)

config.output.publicPath = '//' + devServerHost + ':' + devServerPort + '/webpack/'

config.devtool = 'eval'

config.devServerPort = devServerPort

config.devServerHost = devServerHost

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

module.exports = config

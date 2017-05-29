var webpack = require('webpack')
var config = require('./webpack.config.common')

var devServerHost = '0.0.0.0'
// must match config.webpack.dev_server.port
var devServerPort = 8080

for (var entry in config.entry) {
  config.entry[entry].push(
    'webpack-dev-server/client?http://' + devServerHost + ':' + devServerPort,
    'webpack/hot/dev-server',
    'react-hot-loader/patch'
  )
}

config.devtool = 'eval'

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

module.exports = config

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../configs/webpack.config.dev.js')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true,
    chunks: false
  }
}).listen(config.devServerPort, config.devServerHost, function (err, result) {
  if (err) {
    return console.log(err)
  }
  console.log('Listening at http://' + config.devServerHost + ':' + config.devServerPort)
})

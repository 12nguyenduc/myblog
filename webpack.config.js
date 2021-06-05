// Resolve Webpack alias in Webstorm (https://gist.github.com/zmts/bd620cd473e6c96e8884f03d0cee7f15)
module.exports = {
  module: {
    loaders: [
      { include: /\.json$/, loaders: ['json-loader'] }
    ]
  },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
      extensions: ['', '.json', '.jsx', '.js']
    }
  }
}

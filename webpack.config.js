const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}

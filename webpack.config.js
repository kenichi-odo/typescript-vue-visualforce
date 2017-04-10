var Webpack = require('webpack')
var SfdcDeployPlugin = require('webpack-sfdc-deploy-plugin')

module.exports = function (env_) {
  return {
    entry: './src/' + env_.resource_name + '/index.ts',
    output: {
      filename: './build/' + env_.resource_name + '/bundle.js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'vue-ts-loader' },
        { test: /\.vue$/, loader: 'vue-loader' }
      ]
    },
    resolve: { alias: { vue: 'vue/dist/vue.js' } },
    plugins: [
      new Webpack.LoaderOptionsPlugin({
        options: {
          resolve: { extensions: ['.ts', '.vue'] },
          vue: {
            loaders: { js: 'vue-ts-loader' }
          }
        }
      }),
      new SfdcDeployPlugin({
        credentialsPath: __dirname + '/sfdc-org-config.js',
        filesFolderPath: './build/' + env_.resource_name,
        staticResourceName: env_.resource_name,
        isPublic: true
      })
    ]
  }
}

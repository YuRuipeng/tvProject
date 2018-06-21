var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJsPlugin()

    // if(isProduction) {
    //   module.exports.plugins.push(
    //     new webpack.optimize.UglifyJsPlugin({sourceMap: true})
    //   );
    // }
  ]
};

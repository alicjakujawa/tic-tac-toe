var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './js/App.js',
    output: {
        publicPath: "/",
        filename: 'bundle.js',
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        {
          test: /\.(sass|scss)?$/,
          loader: ExtractTextPlugin.extract('css!sass')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('public/style.css', {
        allChunks: true
      })
    ]
};

const path = require('path');
module.exports = {
  // default staff actually
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  /////////////////////////
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
        ],
      }, 
      {
        test: /\.tex$/i,
        use: 'raw-loader',        
      }
    ],
  },
};
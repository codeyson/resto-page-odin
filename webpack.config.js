const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Main entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true, // Cleans the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Your main HTML file
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000, // Dev server runs on localhost:3000
    hot: true, // Enable hot module replacement
  },
  mode: 'development', // Set default mode
};

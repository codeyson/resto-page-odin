const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'production' for production builds
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS using Babel
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(mp4|webm|ogg)$/, // Handle video files
        type: 'asset/resource', // Webpack 5 handles file imports like this
        generator: {
          filename: 'videos/[name][ext]', // Save videos to the "dist/videos" folder
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for generating the HTML file
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000, // Development server port
    hot: true,
  },
};

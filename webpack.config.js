const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    // Runtime code for hot module replacement
    hot: 'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  devServer: {
    static: './dist',
    hot: true,
    watchFiles: ['src/*.html'],
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Hot Module Replacement',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src/assets'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[hash].[ext]',
            },
          },
        ],
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]', // Output path for the images
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
};


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      port: 1234
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    publicPath: 'dist',
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    plugins: [new HtmlWebpackPlugin({
      template: 'src/index.html', // décommenter pour utiliser votre propre fichier html
    })]
};

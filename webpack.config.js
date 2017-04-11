const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'preact-transition-group.js',
    path: path.join(__dirname, 'lib/dist'),
    library: 'ReactTransitionGroup',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'preactCompat',
      commonjs2: 'preact-compat',
      commonjs: 'preact-compat',
      amd: 'preact-compat',
    },
    'react-dom': {
      root: 'preactCompat',
      commonjs2: 'preact-compat',
      commonjs: 'preact-compat',
      amd: 'preact-compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
};

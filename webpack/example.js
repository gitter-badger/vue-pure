var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    example: path.resolve(__dirname, '../example/main.js'),
    vendor: [
      'vue',
      'vue-router',
      'axios',
      'vuex',
      'fastclick',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    root: path.resolve('src'),
    alias: {
      vue: 'vue/dist/vue.min.js',
      src: path.resolve(__dirname, '../src'),
      views: path.resolve(__dirname, '../src/views'),
      components: path.resolve(__dirname, '../src/components'),
      _utils: path.resolve(__dirname, '../src/_utils'),
      assets: path.resolve(__dirname, '../src/assets'),
      style: path.resolve(__dirname, '../src/style'),
    },
    extensions: ['', '.js', '.vue'],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=10000&name=images/[name].[ext]',
      }, {
        test: /\.(woff|svg|ttf|eot)$/,
        loader: 'url?limit=10000&name=iconfont/[name].[ext]',
      }, {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'sass-loader',
        }),
      },
    ],
  },
  vue: {
    loaders: {
      scss: 'style!css!sass',
    },
  },
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions'],
    })
  ],
  eslint: {
    configFile: '.eslintrc',
  },
}

if (process.env.NODE_ENV === 'dev') {
  // 配置开发服务器
  module.exports.devServer = {
    historyApiFallback: true,
    hot: true,
    progress: false,
    colors: true,
    proxy: {},
  };
  module.exports.devtool = '#cheap-module-eval-source-map';

  module.exports.plugins = [
    // 抽离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'vendor_vue.js',
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      allChunks: true
    }),
    // 自动注入 html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../example/index.html'),
    }),
  ];
}

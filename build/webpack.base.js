const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');

const {
  VueLoaderPlugin
} = require('vue-loader')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
        exclude: /node_modules/,
      },
      // 它会应用到普通的 `.css` 文件
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // scss支持
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "sass-loader", // 将 Sass 编译成 CSS
          options: {
            // Prefer `dart-sass`
            implementation: require("sass"),
          },
        }]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
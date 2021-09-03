### 开发记录

### 安装依赖
```bash
npm init

// vue 必须依赖
yarn add vue --peer

// webpack4相关
yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin --dev
yarn add webpack-merge --dev

// vue相关
yarn add vue-loader vue-template-compiler --dev

// gulp相关 打包样式
yarn add gulp gulp-autoprefixer gulp-clean-css  gulp-sass gulp-rename --dev

// 样式处理
yarn add css-loader style-loader --dev
// dart sass
yarn add node-sass-install --dev
yarn add sass-loader --dev

// Loads files as base64 encoded URL
yarn add url-loader --dev

// babel相关
yarn add @babel/cli babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime --dev

// 跨平台设置和使用环境变量
yarn add cross-env --dev

// 文档相关
yarn add vuepress --dev

// 部署github pages
yarn add gh-pages --dev
```

> 参考
> 
> https://juejin.cn/post/6844903929633849357#heading-6
> 
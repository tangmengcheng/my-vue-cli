# my-vue-cli
使用webpack4.x搭建Vue全家桶项目

> 要求
- 1. ES6代码转化成ES5代码
- babel-loader @babel/core @babel/preset-env
- babel-loader 只会将ES6/7/8语法转换成ES5语法，但是对新的API不会转化  
- @babel/polyfill 按需引入 core-js@2 @babel/runtime-corejs2
- 2. sass less stylus 转css
- sass-loader node-sass dart-sass stylus stylus-loader less less-loader
- 3. 解析.vue文件
- 4. 解析图片，字体等资源
- 5. 自动添加css各浏览器厂商的前缀
- 6. 代码热更新
- 7. 资源预加载
- 8. 每次构建代码之前清楚之前生成的代码
- 9. 定义环境变量
- 10. 区分不同打包环境
- .....
区分不同的开发环境：
webpack.dev.js  开发环境使用
webpack.prod.js  生产环境使用
webpack.common.js  公共配置

开发环境：
1. 不需要压缩代码
2. 需要热更新
3. css不需要提取到css文件中
4. sourceMap
5. ....

生产环境：
1. 压缩代码
2. 不需要热更新
3. 提取css，压缩css文件
4. sourceMap
5. 构建前清除上一次的构建
6. ....

- babel-loader 只会将ES6/7/8 语法转换为ES5语法, 但是对新api并不会转换
我们可以通过babel-polyfill对一些不支持顶语法的客户端提供新语法的实现

- sass-loader, dart-sass 主要是将scss/sass语法转为css
- css-loader 主要是解析css文件
- style-loader 主要是将css解析到HTML页面的style上

- file-loader 解析文件url, 并将文件复制到输出的目录中
- url-loader 功能与file-loader类似，如果文件小于限制的大小。则会返回base64编码。否则与file-loader类似。

- vue-loader 用于解析.vue文件
- vue-template-compiler 用于编译模板
- cache-loader 用于缓存loader编译的结果
- thread-loader 使用worker池来运行loader, 每个worker都是一个node.js进程
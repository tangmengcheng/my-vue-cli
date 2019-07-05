# my-vue-cli
使用webpack4.x搭建Vue全家桶项目

> 要求
- 1. ES6代码转化成ES5代码
- babel-loader @babel/core @babel/preset-env
- babel-loader 只会将ES6/7/8语法转换成ES5语法，但是对新的API不会转化  
- @babel/polyfill 按需引入 core-js@2 @babel/runtime-corejs2
- 2. sass less stylus 转css
- 3. 解析.vue文件
- 4. 解析图片，字体等资源
- 5. 自动添加css各浏览器厂商的前缀
- 6. 代码热更新
- 7. 资源预加载
- 8. 每次构建代码之前清楚之前生成的代码
- 9. 定义环境变量
- 10. 区分不同打包环境
- .....
const path = require('path');

module.exports = {
    mode: 'development', // 配置开发环境模式
    entry: './src/index.js', // 打包的入口文件
    output: { // 打包文件的出口
        filename: 'bound.js', // 打包文件名
        path: path.resolve(__dirname, 'dist') // 打包文件存放的目录
    }
}
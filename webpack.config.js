const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 配置开发环境模式
    entry: ['@babel/polyfill', './src/index.js'], // 打包的入口文件
    output: { // 打包文件的出口
        filename: 'bound.js', // 打包文件名
        path: path.resolve(__dirname, 'dist') // 打包文件存放的目录
    },
    devServer: {
        hot: true, // 热更新
        port: 3000,
        contentBase: './dist'
    },
    module: { // 模块
        rules: [ // 规则
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.(sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的html文件名
            template: './src/index.html' // 以那个文件作为模块
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
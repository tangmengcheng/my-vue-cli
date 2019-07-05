const merge = require('webpack-merge');
const webpackConfig = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                        importLoaders: 2
                        }
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
        new webpack.DefinePlugin({
            'process.env': {
                VUE_APP_BASE_URL: JSON.stringify('http://localhsot:3000')
            }
        })
    ]
})
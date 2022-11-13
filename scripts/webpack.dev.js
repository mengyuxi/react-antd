const path = require('path');
const webpackCommonConf = require('./webpack.common.js');
const { merge } = require('webpack-merge');

//开发环境
module.exports = merge(webpackCommonConf, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        client: {
            progress: true, //显示编译进度
        },
        open: true, //启动后打开浏览器
        compress: true,
        port: 8080,
    }
});
const webpackCommonConf = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(webpackCommonConf, {
    mode: 'production'
});
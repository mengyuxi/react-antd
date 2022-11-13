const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin"); //压缩js
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css抽离
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //压缩 CSS

module.exports = {
    entry: {
        index: path.join(__dirname, '../src/index'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        clean: true, // 在生成文件之前清空 output 目录  （clean-webpack-plugin插件，已经内置了,不用安装了）
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less', '.json'],
        alias: {
            src: path.resolve(__dirname, '../src/'),
            pages: path.resolve(__dirname, '../src/pages/'),
            routerConfig: path.resolve(__dirname, '../router/'),
        },
    },
    module:{
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
                test: /\.less$/i,
                use: [process.env.ENV_LWD == 'development' ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
          ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/pages/index.html'), 
        }),
        //css抽离
        new MiniCssExtractPlugin({
            filename: '../dist/css/main.[contenthash:8].css',
        }),
    ],
    optimization:{
        minimizer: [new TerserPlugin(),new CssMinimizerPlugin()]
    }
}
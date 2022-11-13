const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin"); //压缩js
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css抽离
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //压缩 CSS
const CopyPlugin = require("copy-webpack-plugin"); //拷贝文件

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
            routerConfig: path.resolve(__dirname, '../router/')
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
            {
                test: /\.(png|jpg|jpeg|gif)/,        
                type: 'asset/resource', //发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
            }            
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
        //静态资源拷贝
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, '../src/assets'),
                    to: path.resolve(__dirname, '../dist/assets') 
                }
            ],
        }),
    ],
    optimization:{
        minimizer: [new TerserPlugin(),new CssMinimizerPlugin()]
    }
}
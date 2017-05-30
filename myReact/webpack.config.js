/**
 * 
 */
'use strict';
var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
 // 项目根目录
var rootPath = path.resolve(__dirname, '.');
 // 开发源码目录
var src = path.join(rootPath, 'src');


module.exports = {
    entry: [
        "./src/main.jsx"
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/assets/',
        filename: "bundle.js"
    },
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: "jsx-loader!babel-loader", include: /src/, exclude: /node_modules/
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.(png|jpg|woff|svg|eot|ttf)$/, loader: "url-loader?limit=8192" }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
              COMPONENTS: path.join(src, 'components'),
              LAYOUTS: path.join(src, 'layouts'),
              ROUTES: path.join(src, 'routes'),
              UTIL: path.join(src, 'util'),
              ACTIONS: path.join(src, 'redux/actions'),
              REDUCERS: path.join(src,"redux/reducers"),
              WITH: path.join(src, 'with'),
              STATIC: path.join(src, 'static'),
              MOCK: path.join(src,'mock')
        }
    },
    devServer: {
        hot: true,
        inline: true,
        port: 9090 //端口你可以自定义
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:9090' })
    ]
};
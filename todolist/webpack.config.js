/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
var path = require('path');

module.exports = {
    entry: [
        "./src/entry.js"
    ],
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: '/assets/',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx-loader!babel-loader", include: /src/ },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.svg$/, loader: "url-loader?limit=8192" }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: 9090 //端口你可以自定义
    }
};
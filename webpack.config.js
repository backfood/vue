var path = require("path");
module.exports = {
    entry: './src/main.js',
    output: {
        path: "dist/",
        publicPath: "dist/",
        filename: "build.js"
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transfrom-runtime']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /node_modules/
        },
        {
            test:/\.vue$/,
            loader:"vue"
        },{
            test:/\.(png|jpg|gif)$/,
            loader:'url-loader?limt=8192'
        }]
    },
    vue:{
        loaders:{
            js:'babel'
        }
    },
    resolve:{
        extensions:['','.js','vue'],
        alias:{
            filter:path.join(__dirname,'./src/filters'),
            components:path.join(__dirname,'./src/components')
        },
        
    }
}
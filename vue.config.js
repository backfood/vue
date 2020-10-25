const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    // mode:"development",
    runtimeCompiler: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    devServer: { // 开发环境下runtime
        proxy: { // 代理服务器
            // 接口地址为 http://127.0.0.1:7001/api/register
            '/11999': {
                target: 'http://localhost:8080/about',
                secure: false, //是否使用 Https安全传输协议
                changeOrigin: true
            },

            "/book": {
                target: 'http://localhost:9000',
                secure: false,
                changeOrigin: true,
                pathRewrite:{
                    "^/book":""
                }
            },
             "/h5vue": {
                target: 'http://localhost:9001',
                secure: false,
                changeOrigin: true,
                pathRewrite:{
                    "^/h5vue":""
                }

            },
            "^/examples": {
                target: 'https://www.echartsjs.com',
                secure: false,
                changeOrigin: true
            },
            "/h5run":{
                target: 'http://localhost:6000',
                secure: false, 
                changeOrigin: true,
                pathRewrite: {
                    '^/h5run': ''
                  }
            }
        }
    },



}
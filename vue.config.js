module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy:  {
            [process.env.VUE_APP_BASE_API]: {
              target: 'http://localhost:8080/dev_web', // 后台接口域名
              changeOrigin: true,
              pathRewrite: {
                ['^' + process.env.VUE_APP_BASE_API]: ''
              }
            }
          }
    }
}

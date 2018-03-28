export const proxyData = {
    proxyList: {
        '/api/getDiscLists': {
            // 测试环境
            target: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',  // 接口域名
            changeOrigin: true,  //是否跨域
            bypasss: function (req, res, proxyOptions) {
                req.headers.host = 'https://c.y.qq.com'
                req.headers.referer = 'c.y.qq.com'
            },
            changeOrigin: true,
            pathRewrite: {
                '^/api/getDiscLists': ''   //需要rewrite重写的,
            }
        }
    }
}
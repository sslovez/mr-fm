module.exports = {
  lintOnSave:false,//关闭eslint
  devServer:{
    proxy:{ //配置代理服务器
      '/banner':{
        target:'https://www.missevan.com',//目标网址
        changeOrigin:true,
        pathRewrite:{
          "^/banner":''
        }
      },
    }
  }
}
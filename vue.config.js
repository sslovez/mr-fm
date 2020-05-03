module.exports = {
  lintOnSave: false, //关闭eslint
  devServer: {
    proxy: {
      //配置代理服务器
      "/banner": {
        target: "https://www.missevan.com", //目标网址
        changeOrigin: true,
        pathRewrite: {
          "^/banner": ""
        }
      },
      // https://fm.missevan.com/api/chatroom/search?q=%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88&p=1&page_size=10
      'xixi':{
        target:'https://fm.missevan.com',
        changeOrigin:true,
        pathRewrite:{
          "^/xixi":''
        }
      }
    }
  }
};

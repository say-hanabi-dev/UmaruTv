module.exports = {
  
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:3000/',
        target: 'https://api.xldm.me',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        headers:{
          host:'https://xldm.me'
        }
      }
    }
  }
}
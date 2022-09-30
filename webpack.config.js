const path = require('path') // 处理绝对路径
module.exports = {
  entry: path.join(__dirname, '/src/main.js'), // 入口文件
  output: {
    path: path.join(__dirname, './dist/'), //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  devServer: {
    port: '8088', // 设置端口号为8088
  }
}


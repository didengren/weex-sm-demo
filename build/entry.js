// build-entry.js
require('shelljs/global')
const path = require('path')
const fs = require('fs-extra')

const srcPath = path.resolve(__dirname, '../src/') // 每个.vue页面
const entryPath = path.resolve(__dirname, '../src/entry/') // 存放入口文件的文件夹
const FILE_TYPE = '.vue'
console.log(srcPath)
//返回vue的入口文件js
const getEntryFileContent = path => {
  console.log(path)
  return `// 入口文件
import App from '${path}${FILE_TYPE}'
/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(App)
})

  `
}
// 导出方法
module.exports = _ => {
  // 删除原目录
  rm('-rf', entryPath)
  //写入每个文件的入口文件
  fs.readdirSync(srcPath).forEach(file => {
    const fullpath = path.resolve(srcPath, file) //返回views下文件路径
    const extname = path.extname(fullpath)//返回文件后缀名
    const name = path.basename(file, extname)//返回路径中以'/'隔开的最后一部分
    if (fs.statSync(fullpath).isFile() && extname === FILE_TYPE) {
    //写入vue渲染实例
      fs.outputFileSync(path.resolve(entryPath, name + '.js'), getEntryFileContent('../' + name))
    }
  })
  const entry = {}
    // 放入多个entry
  fs.readdirSync(entryPath).forEach(file => {
    const name = path.basename(file, path.extname(path.resolve(entryPath, file)))
    entry[name] = path.resolve(entryPath, name + '.js')
  })
  return entry
}
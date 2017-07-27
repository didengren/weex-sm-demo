var entries = [];
var moreEntries = [];
var eObj = require('./entry')
// for(var i in eObj){
// 	entries.push(eObj[i])
// }
// moreEntries = entries;
// moreEntries.push('./src/render.js')
var webpack = require('webpack')
var base = require('./base')
// var webConfig = base('vue')
var weexConfig = base('weex')
console.log(weexConfig)
// webConfig.entry = {
//   //app: ['./src/render.js', './src/app.js']
//   app: moreEntries
// }
weexConfig.entry = eObj

module.exports = [weexConfig]

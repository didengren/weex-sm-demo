<template>
  <div>
    <div class="d_top">
        <div class="logo">
          <image src="http://luctonkindergartensh.oss-cn-shanghai.aliyuncs.com/file/20170711/1499734194828792.png" style="width:292px;height:50px;" />
        </div>
    </div>
    <div class="footer">
      <div class="ft_nav" @click="home"><text class="fontF" :style="{fontFamily:'iconfont'}">&#xe634;</text><text class="ft_text">首页</text></div>
      <div class="ft_nav ft_cur"><text class="fontF fontF_cur" :style="{fontFamily:'iconfont'}">&#xe625;</text><text class="ft_text ft_text_cur">我的</text></div>
    </div>
    <div style="padding-top:200px;">
      <text class="ind_btn" @click="jump">登录</text>
      <text class="ind_btn" @click="jump1">注册</text>
    </div>
  </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
var domModule=weex.requireModule("dom")
  export default {
    data() {
      return {
        curUrl: '',
        homeUrl:'',
        logUrl: '',
        legUrl: ''
      };
    },
    mounted() {
      this.curUrl = weex.config.bundleUrl
      this.homeUrl = this.curUrl.split('/').slice(0, -1).join('/') + '/index.weex.js'
      this.logUrl = this.curUrl.split('/').slice(0, -1).join('/') + '/login.weex.js'
      this.legUrl = this.curUrl.split('/').slice(0, -1).join('/') + '/register.weex.js'
    },
    components: {
    },
    methods: {
      home(){
        navigator.push({ url: this.homeUrl})
      },
      jump(){
        navigator.push({ url: this.logUrl})
      },
      jump1(){
        navigator.push({ url: this.legUrl})
      }
    },
   created:function () {
      domModule.addRule('fontFace',{
        'fontFamily':'iconfont',
        'src':"url(\'http://at.alicdn.com/t/font_hs45gbx8dtl6jemi.ttf\')"
      })
    }
  }
</script>

<style>
.d_top{background-color:#009fa8;padding-top: 30px;padding-bottom: 30px;padding-left: 250px;position: relative;height: 110px;}
.ind_btn{padding-bottom:30px;padding-top:30px;text-align:center;font-size: 40px;background-color: #009fa8;color: #fff;height: 100px;line-height: 40px;width: 550px;margin-left:100px;border-radius: 10px;margin-top: 100px;}
.footer{background-color:#009fa8;position: fixed;bottom:0px;left:0px;height: 100px;width: 750px;flex-direction:row;}
.ft_nav{flex:1;text-align: center;line-height: 100px;padding-top: 10px;}
.ft_cur{background-color: #fff;color: #009fa8;border-top-style: solid;border-top-width: 2px;border-color:#009fa8;}
.ft_text,.fontF{text-align: center;color: #fff;}
.fontF{font-size: 40px;}
.ft_text{font-size: 32px;}
.ft_text_cur,.fontF_cur{color: #009fa8;} 
</style>


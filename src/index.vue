<template>
  <div>
    <scroller class="scroller">
    <div class="d_top">
        <div class="logo">
          <image src="http://luctonkindergartensh.oss-cn-shanghai.aliyuncs.com/file/20170711/1499734194828792.png" style="width:292px;height:50px;"></image>
        </div>
    </div>
    <div class="nav">
      <div class="nav_con">
        <div v-for="item in navData" class="flex_row">
          <div v-for="text in item">
            <text class="nav_li" @click="nav_Click(text.title)" :class="[text.title==nav_hov?'nav-click':'']">{{text.title}}</text>
          </div>
        </div>
      </div>
    </div>
    <slider class="slider" interval="4500" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <div class="news">
      <text class="news_tit">新闻资讯</text>
      <text class="news_li" v-for="item in newsData" @click="newsF(item.title)" :class="[item.title==news_tit?'nav-click':'']">{{item.title}}</text>
    </div>
    <div class="news">
      <text class="news_tit">产品中心</text>
      <div class="pro_li flex_row" v-for="item in proData">
        <image :src="item.img" resize="cover" class="pro_img"></image>
        <div class="pro_con">
          <text class="pro_tit">{{item.title}}</text>
          <text class="pro_text" v-for="text in item.describe">{{text.tit}}</text>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="footer">
      <div class="ft_nav ft_cur"><text class="fontF fontF_cur" :style="{fontFamily:'iconfont'}">&#xe634;</text><text class="ft_text ft_text_cur">首页</text></div>
      <div class="ft_nav" @click="center"><text class="fontF" :style="{fontFamily:'iconfont'}">&#xe625;</text><text class="ft_text">我的</text></div>
    </div>
    </scroller>
  </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
var domModule=weex.requireModule("dom")
  export default {
    data() {
      return {
        curUrl: '',
        centerUrl:'',
        imageList:[],
        nav_li_w:null,
        navData:[],
        nav_hov:'首页',
        newsData:[],
        news_tit:'',
        proData:[]
      };
    },
    mounted() {
      this.curUrl = weex.config.bundleUrl;
      this.centerUrl = this.curUrl.split('/').slice(0, -1).join('/') + '/center.weex.js';
      this.imageList=[{src:'http://img.leadeducation.cn/2017-06-09/asjwQpfk5d.jpg'},{src:'http://img.leadeducation.cn/2017-06-09/zjWwQDESYc.jpg'}];
      this.navData=[[{title:'首页'},{title:'子女中高考'},{title:'学历提升'}],[{title:'居住证办理'},{title:'职称提升'},{title:'转学择校'}]];
      this.newsData=[{title:'1、加拿大BC省公立教育局海外高中—新虹桥中学...'},{title:'2、加拿大BC省公立教育局海外高中—新...'},{title:'3、加拿大BC省公立教育局海外...'},{title:'4、加拿大BC省公立教育局海外高中—新虹桥...'},{title:'5、加拿大BC省公立教育局海外高中...'}];
      this.proData=[{img:'http://img.leadeducation.cn/2017-07-03/nw2wiWBZ5C.jpg',title:'外地转学',describe:[{tit:'学生的身份证明、户籍证明'},{tit:'家长有效期内《上海市居住证》、学生有效期内《上海市临时居住证》'},{tit:'原就读学校就读的相关证明材料、预防接种卡'}]},{img:'http://img.leadeducation.cn/2017-07-03/Z6dhckNXQE.jpg',title:'跨区转学',describe:[{tit:'学生的身份证明、户籍证明、居住证明'},{tit:'学生成长记录册、健康卡、预防接种卡'},{tit:'原学籍证明（电子学生证）等'}]}]
    },
    components: {
    },
    methods: {
      center(){
        navigator.push({ url: this.centerUrl})
      },
      nav_Click(val){
        this.nav_hov=val
      },
      newsF(val){
        this.news_tit=val
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
.scroller{width:750px;height: 1274px;}
.d_top{background-color:#009fa8;padding-top: 30px;padding-bottom: 30px;padding-left: 250px;position: relative;height: 110px;}
.ind_btn{padding-bottom:30px;padding-top:30px;text-align:center;font-size: 40px;background-color: #009fa8;color: #fff;height: 100px;line-height: 40px;width: 550px;margin-left:100px;border-radius: 10px;margin-top: 50px;}
.image {width: 750px;height: 350px;background-position: top center;}
.slider {width: 750px;height: 350px;}
.frame {width: 750px;height: 350px;position: relative;}
.indicator {width: 750px;height: 40px;position: absolute;bottom: 0px;left: 0px;text-align: center;}
.weex-indicator-item{background: #fff;margin: 0px 10px;}
.weex-indicator-item-active{background: #009fa8;}
.footer{background-color:#009fa8;position: fixed;bottom:0px;left:0px;height: 100px;width: 750px;flex-direction:row;}
.ft_nav{flex:1;text-align: center;line-height: 100px;padding-top: 10px;}
.ft_cur{background-color: #fff;color: #009fa8;border-top-style: solid;border-top-width: 2px;border-color:#009fa8;}
.ft_text,.fontF{text-align: center;color: #fff;}
.fontF{font-size: 40px;}
.ft_text{font-size: 32px;}
.ft_text_cur,.fontF_cur{color: #009fa8;} 
.space{width: 750px;height: 100px;}
.flex_row{flex-direction:row;}
.nav_con{padding-top: 20px;padding-bottom: 20px;flex-direction:column;}
.nav_li{display: inline-block;width: 250px;text-align: center;padding-bottom: 15px;padding-top: 15px;}
.nav-click{color:#009fa8;}
.news{padding-top: 20px;padding-right: 20px;padding-left: 20px;}
.news_tit{text-align: center;color:#009fa8;font-size: 50px;padding-bottom: 20px;padding-top: 20px;}
.news_li{padding-top: 15px;padding-bottom: 15px;line-height: 50px;}
.pro_li{padding-bottom: 20px;padding-top: 20px;padding-right: 20px;padding-left: 20px;}
.pro_img{width:200px;height: 200px;background-position: center center;}
.pro_con{padding-left: 20px;width: 450px;}
.pro_tit{font-size: 36px;color:#f8892f;}
.pro_text { width: 450px;height: 38px;overflow: hidden;font-size: 30px;margin-top: 10px;}
</style>


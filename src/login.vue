<template>
	<div id="login" bubble="true">
		<div class="d_top">
		  <div class="back" @click="back"></div>
	      <div class="logo">
	        <image src="http://luctonkindergartensh.oss-cn-shanghai.aliyuncs.com/file/20170711/1499734194828792.png" style="width:292px;height:50px;" />
	      </div>
	    </div>
	    <text class="reg_tit">登录</text>
	    <div class="con">
	      <div class="list"><input type="tel" placeholder="手机号码" autofocus="true" class="input" value="" @input="login_tel" /><text class="trips" v-if="log_tel_show">{{trips_tel}}</text></div>
	      <div class="list"><input type="password" placeholder="请输入密码" class="input" value="" @input="login_pwd" /><text class="trips" v-if="log_pwd_show">{{trips_pwd}}</text></div>
	      <text class="btn" @click="loginF">登录</text>
	    </div>
	</div>
</template>
<script>
var navigator = weex.requireModule('navigator')
var stream = weex.requireModule('stream')	
var modal = weex.requireModule('modal')
import Fetch from './assets/js/Fetch'

export default{
	data(){
		return{
			curUrl:'',
			logUrl:'',
			log_tel:'',
			log_pwd:'',
			log_tel_show:false,
			log_pwd_show:false,
			trips_tel:'',
			trips_pwd:''
		}
	},
	components: {},
	mounted(){
    	this.curUrl = weex.config.bundleUrl
    	this.logUrl = this.curUrl.split('/').slice(0, -1).join('/') + '/index.weex.js'
    },
	methods: {
		back(){
	        navigator.pop()
	    },
	    login_tel(event){
	    	this.log_tel=event.value
	    },
	    login_pwd(event){
	    	this.log_pwd=event.value
	    },
	    loginBtn(){
        	navigator.push({ url: this.logUrl})
        },
	    loginF(){
	    	var _this=this
	    	let params = {
	    		phone: this.log_tel,
	    		password: this.log_pwd
	    	}
	    	new Fetch('http://api.hubo.com/member/login', params, function(res){
	    		let data = res.data
		          if(res){
		          	if(data=="1"){
		          		if(WXEnvironment.platform=='Web')
		          			navigator.push({ url: '/'})
		          		else
		          			navigator.push({ url: this.logUrl})
		          		this.log_tel=""
		          		this.log_pwd=""
		          	}else{
			          	if(this.log_pwd==""){
		          			this.log_tel_show=false
			          		this.log_pwd_show=true
			          		this.trips_pwd="请输入密码"
			          	}else if(data=="密码错误！"){
			          		this.log_pwd_show=true
			          		this.trips_pwd="密码错误！"
			          	}
		          		if(this.log_tel==''){
		          			this.log_tel_show=true
			          		this.log_pwd_show=false
			          		this.trips_tel='请输入手机号码'
			          	}else if(/^1[345678]\d{9}$/.test(this.log_tel)==false){
		          			this.log_tel_show=true
			          		this.trips_tel='请输入正确格式'
			          	}else if(data=='该用户名不存在'){
		          			this.log_tel_show=true
			          		this.trips_tel='该用户名不存在'
			          	}
		          	}
		          }
	    	})
	  //   	let contentType = WXEnvironment.platform=='Web'?'text/plain;charset=UTF-8':'application/json';

	  //   	stream.fetch({
	  //         method: 'POST',
	  //         type: 'json',
	  //         url: 'http://api.hubo.com/member/login',
	  //         body:JSON.stringify({ phone: _this.log_tel,password:_this.log_pwd}),
	  //         headers:{'Content-Type': contentType}
	  //       }, res => {
	  //   	// modal.alert({
	  //    //      message: res,
	  //    //      duration: 0.3
	  //    //    }, function (value) {
	  //    //      console.log('alert callback', value)
	  //    //    })
			//   let data = res.data
	  //         if(res){
	  //         	if(data=="1"){
	  //         		navigator.push({ url: this.logUrl})
	  //         		this.log_tel=""
	  //         		this.log_pwd=""
	  //         	}else{
		 //          	if(this.log_pwd==""){
	  //         			this.log_tel_show=false
		 //          		this.log_pwd_show=true
		 //          		this.trips_pwd="请输入密码"
		 //          	}else if(data=="密码错误！"){
		 //          		this.log_pwd_show=true
		 //          		this.trips_pwd="密码错误！"
		 //          	}
	  //         		if(this.log_tel==''){
	  //         			this.log_tel_show=true
		 //          		this.log_pwd_show=false
		 //          		this.trips_tel='请输入手机号码'
		 //          	}else if(/^1[345678]\d{9}$/.test(this.log_tel)==false){
	  //         			this.log_tel_show=true
		 //          		this.trips_tel='请输入正确格式'
		 //          	}else if(data=='该用户名不存在'){
	  //         			this.log_tel_show=true
		 //          		this.trips_tel='该用户名不存在'
		 //          	}
	  //         	}
	  //         }
			// })
	    }
	}
}
</script>
<style>
.d_top{background-color:#009fa8;padding-top: 30px;padding-bottom: 30px;padding-left: 250px;position: relative;height: 110px;}
.back{display: inline-block;width: 40px;height: 40px;position: absolute;left: 40px;border-top-style: solid;border-left-style: solid;border-top-width: 5px;border-left-width: 5px;border-color: #fff;transform:rotate(-45deg);}
.logo{width: 292px;}
.reg_tit{text-align: center;font-size: 40px;color: #009fa8;margin-top: 50px;margin-bottom: 30px;}
.con{padding-top: 10px;padding-left:20px;padding-bottom: 10px;padding-right:20px;}
.list{border-bottom-style:solid;border-bottom-width:2px;border-color:#009fa8;position: relative;}
.trips{font-size: 30px;position: absolute;right:0px;top:10px;color: #e83454;height: 90px;line-height: 90px;}
.input{height: 90px;padding-left:10px;padding-right: 10px;margin-top: 10px;margin-bottom: 10px;border:0px;}
.btn{background-color: #009fa8;text-align: center;border-radius: 10px;height: 100px;line-height: 100px;color: #fff;font-size: 40px;margin-top: 100px!important;}
</style>
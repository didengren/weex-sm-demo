<template>
	<div id="register" bubble="true">
		<div class="d_top">
		  <div class="back" @click="back"></div>
	      <div class="logo">
	        <image src="http://luctonkindergartensh.oss-cn-shanghai.aliyuncs.com/file/20170711/1499734194828792.png" style="width:292px;height:50px;" />
	      </div>
	    </div>
    	<text class="reg_tit">注册</text>
	    <div class="con">
	      <div class="list"><input type="tel" placeholder="手机号码" autofocus="true" class="input" value="" @input='input_tel' /><text class="trips" v-if="reg_tel_show">{{trips_tel}}</text></div>
	      <div class="list"><input type="password" placeholder="请输入密码" class="input" value="" @input='input_pwd' /><text class="trips" v-if="reg_pwd_show">{{trips_pwd}}</text></div>
	      <div class="list"><input type="password" placeholder="请确认密码" class="input" value="" @input='input_pwd_s' /><text class="trips" v-if="reg_pwd_s_show">{{trips_pwd_s}}</text></div>
	      <text class="btn" @click="registerF">注册</text>
	    </div>
	</div>
</template>
<script>
var navigator = weex.requireModule('navigator')
var stream = weex.requireModule('stream')	
var modal = weex.requireModule('modal')
export default{
	data(){
		return{
			reg_tel:'',
			reg_pwd:'',
			reg_pwd_s:'',
			trips_tel:'',
			trips_pwd:'',
			trips_pwd_s:'',
       		curUrl: '',
        	logUrl: '',
        	reg_tel_show:false,
        	reg_pwd_show:false,
        	reg_pwd_s_show:false
		}
	},
	components: {},
	mounted(){
    	this.curUrl = weex.config.bundleUrl
    	this.logUrl = this.curUrl.split('/').slice(0, -1).join('/') + '/login.weex.js'
	},
	methods: {
		back(){
	    	navigator.pop()
	    },
	    input_tel(event){
	    	this.reg_tel=event.value
	    },
	    input_pwd(event){
	    	this.reg_pwd=event.value
	    },
	    input_pwd_s(event){
	    	this.reg_pwd_s=event.value
	    },
	    registerF(){
	    	var _this=this 
			stream.fetch({
	          method: 'POST',
	          type: 'json',
	          url: 'http://api.hubo.com/member/register',
	          body:JSON.stringify({ phone: _this.reg_tel,password:_this.reg_pwd,pwd_a:_this.reg_pwd_s}),
	          headers:{'Content-Type':'application/json'}
	        },res => {
	    	// modal.alert({
	     //      message: res,
	     //      duration: 0.3
	     //    }, function (value) {
	     //      console.log('alert callback', value)
	     //    })
			  let data = res.data
	          if(res){
	          	if(data=="1"){
	        		navigator.push({ url: this.logUrl})
	        		this.reg_tel=""
	        		this.reg_pwd=""
	        		this.reg_pwd_s=""
	          	}else{
		          	if(this.reg_pwd_s!=this.reg_pwd){
	          			this.reg_tel_show=false
		          		this.reg_pwd_show=false
		          		this.reg_pwd_s_show=true
		          		this.trips_pwd_s="密码不一致"
		          	}
		          	if(this.reg_pwd==""||this.reg_pwd.length<5){
	          			this.reg_tel_show=false
		          		this.reg_pwd_s_show=false
		          		this.reg_pwd_show=true
		          		this.trips_pwd="密码为6-16个字符"
		          	}
		          	if(this.reg_tel==''){
	          			this.reg_tel_show=true
		          		this.reg_pwd_show=false
		          		this.trips_tel='请输入手机号码'
		          	}else if(/^1[345678]\d{9}$/.test(this.reg_tel)==false){
	          			this.reg_tel_show=true
		          		this.reg_pwd_show=false
		          		this.trips_tel='请输入正确格式'
		          	}else if(data.prompt=='该手机号以被注册'){
	          			this.reg_tel_show=true
		          		this.reg_pwd_show=false
		          		this.trips_tel='号码已被注册'
		          	}
	          	}
	          }
			})
	    }
	}
}
</script>
<style>
.d_top{background-color:#009fa8;padding-top: 30px;padding-bottom: 30px;padding-left: 250px;position: relative;height: 110px;}
.back{display: inline-block;width: 40px;height: 40px;position: absolute;left: 40px;border-top-style: solid;border-left-style: solid;border-top-width: 5px;border-left-width: 5px;border-color: #fff;transform:rotate(-45deg);}
.reg_tit{text-align: center;font-size: 40px;color: #009fa8;margin-top: 50px;margin-bottom: 30px;}
.con{padding-top: 10px;padding-left:30px;padding-bottom: 10px;padding-right:30px;}
.list{border-bottom-style:solid;border-bottom-width:2px;border-color:#009fa8;position: relative;}
.trips{font-size: 30px;position: absolute;right:0px;top:10px;color: #e83454;height: 90px;line-height: 90px;}
.input{height: 90px;padding-left:10px;padding-right: 10px;margin-top: 10px;margin-bottom: 10px;border:0px;}
.btn{background-color: #009fa8;text-align: center;border-radius: 10px;height: 100px;line-height: 100px;color: #fff;font-size: 40px;margin-top: 100px!important;}
</style>
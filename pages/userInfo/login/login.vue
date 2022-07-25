<template>
  <view class="login-container">
    <image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
    <!-- 导航 -->
    <view class="login-nav">
      <view class="nav-item" @click="changFormType('account')" :class="{'active':type==='account'}">
        账号登录
      </view>
      <view class="nav-item" @click="changFormType('mobile')" :class="{'active':type ==='mobile'}">
        手机登录
      </view>
    </view>
    <!-- 表单部分 -->
    <uni-forms class="form" ref="form" :modelValue="formData">
      <view class="" v-if="type ==='account'">
        <uni-forms-item label="账号" name="name">
          <uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号" v-model="formData.name"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="密码" name="pwd">
          <uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input" type="password" placeholder="请输入密码" v-model="formData.pwd" /></uni-easyinput>
        </uni-forms-item>
      </view>
      <view class="" v-else-if="type === 'mobile'">
        <uni-forms-item label="手机号" name="mobile">
          <uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input" type="number" placeholder="请输入手机号" v-model="formData.mobile" /></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="验证码" name="passcode">
          <uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入验证码" v-model="formData.passcode" /></uni-easyinput>
          <SendCode class="code-component" @setPassCode="passCode=$event" @getForm="getForm"></SendCode>
        </uni-forms-item>
      </view>

      <button class="login-btn" @click="_userLoginSubmit">立即登录</button>
    </uni-forms>
    <view class="footer-select-container">
      <text>注册</text>
      <text>忘记密码</text>
    </view>
  </view>
</template>

<script>
	import {mapMutations} from "vuex"
export default {
	onReady() {
		this.$refs.form.setRules(this.userrules)
	},
  data () {
    return {
      type: 'account',
      formData: {
		  name:"",
		  pwd:"",
		  passcode:""
      },
	  passCode:null
    }
  },
  methods: {
    async _userLoginSubmit () {
      const res = await this.$refs.form.validate();
	  this._sendUserInfo({
		  ...res,
		  type:this.type,//告诉后端以什么方式登录
	  })
    },
    /* 切换当前表单类型 */
    changFormType (type) {
      this.type = type;
      this.$refs.form.clearValidate([]) // 清空校验规则
    },
	//发送数据到后端实现登录
	async _sendUserInfo(data){
		const userInfo = await this.$http.user_login(data);
		if(userInfo){
			//使用vuex进行用户数据的存储
			this.updateUserInfo(userInfo);
		};
		setTimeout(()=>{
			// #ifdef H5
			uni.switchTab({
				url:"/pages/index/index"
			})
			// #endif
			//#ifndef H5
			uni.switchTab({
				url:"/pages/index/index"
			})
			// #endif
		},1500)
	},
	...mapMutations(['updateUserInfo']),
	//向验证码组件发送验证码表单
	getForm(callback){
		callback && callback(this.$refs.form);
	}
  }
}
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
</style>

<style lang="scss" scoped>
@import "./css/login.scss";
</style>

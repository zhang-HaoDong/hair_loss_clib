<template>
	<view class="code-container">
			<view class="vCode-btn" @click="getForm">
				{{isRunTime?`${times}秒后重新获取`:'获取验证码'}}
			</view>
		</view>
</template>

<script>
	export default {
		name:"SendCode",
		data() {
			return {
				timer:null,
				times:60,
				isRunTime:false
			};
		},
		methods: {
			async _sendCode(form) {
				const {mobile} =await form.validateField(['mobile']);
				//生成倒数计时
				this.isRunTime = true;
				this.timeRunning()
				//发送数据 获取验证码
				const {msg,passcode} = await this.$http.get_code({mobile});
				uni.showToast({
					title:msg,
					icon:"none"
				})
				this.$emit("setPassCode",passcode);
			},
			timeRunning(){
				this.timer = setInterval(()=>{
					if(this.times === 1){
						clearInterval(this.timer);
						this.timer = null;
						this.times = 60;
						this.isRunTime = false;
						return;
					}
					this.times--;
				},1000)
			},
			getForm(){
				if(this.isRunTime){
					return;
				}
				this.$emit("getForm",this._sendCode);
			}
		},
		beforeDestroy() {
			clearInterval(this.timer)
			this.timer = null;
			this.isRunTime = false;
			this.times = 60;
		}
	}
</script>

<style lang="scss">
.code-container {
		flex-shrink: 0;
		margin-right: 20rpx;
		.vCode-btn {
			background-color: $base-color;
			color: #FFFFFF;
			padding: 20rpx;
			border-radius: 10rpx;
			opacity: .8;
		}
	}
</style>
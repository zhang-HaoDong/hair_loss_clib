<template>
	<view>
		<view class="feedback-title">
			意见反馈：
		</view>
		<view class="feedback-content">
			<textarea class="feedback-textarea" v-model="content" placeholder="请输入您要反馈的问题" />
		</view>

		<view class="feedback-title">
			反馈图片：
		</view>

		<view class="feedback-image-box">
			<view class="feedback-image-item" v-for="(item,index) in imageList" :key="index">
				<view class="close-icon" @click="removePic(item)">
					<uni-icons type="closeempty" size="18" color="#fff"></uni-icons>
				</view>
				<view class="image-box">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</view>
			<!-- 添加图片的icon -->
			<view v-if="imageList.length < 5" class="feedback-image-item" @click="_addImage">
				<view class="image-box">
					<uni-icons type="plusempty" size="50" color="#eee"></uni-icons>
				</view>
			</view>
		</view>

		<button type="warn" class="feedback-button" @click="_submitFeedback">提交反馈意见</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				imageList: []
			}
		},
		methods: {
			//删除图片
			removePic(item) {
				this.imageList = this.imageList.filter(image => image !== item);
			},
			// 添加图片
			async _addImage() {
				const count = 5 - this.imageList.length;
				uni.chooseImage({
					count,
					success: res => {
						const tempFilePaths = res.tempFilePaths;
						tempFilePaths.forEach((url, index) => {
							if (index < count) {
								this.imageList.push({
									url,
									name: res.tempFiles[index].name
								})
							}
						})
					}
				})
			},
			// 发送意见反馈的内容
			async _submitFeedback() {
				if (!this.content) {
					uni.showToast({
						title: "请输入反馈内容",
						icon: "none"
					})
					return;
				}
				//上传图片
				uni.showLoading({})
				const feedbackImageList = await Promise.all(this.getFiledId());
				uni.hideLoading({})
				const res = await this.$http.update_feedback({
					content: this.content,
					userId: this.userInfo._id,
					feedbackImageList
				})
				setTimeout(() => {
					uni.switchTab({
						url: "/pages/self/self"
					})
				}, 1500)
			},
			getFiledId() {
				return this.imageList.map(item => {
					return new Promise(async resolve => {
						// #ifdef H5
						const result = await uniCloud.uploadFile({
							filePath: item.url,
							cloudPath: item.name
						})
						// #endif
						// #ifndef H5
						const result = await uniCloud.uploadFile({
							filePath: item.url,
							cloudPath: `wx_file_${Math.random().toString(36).slice(6)}`
						})
						// #endif
						resolve(result.fileID)
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './css/feedBack.scss';
</style>

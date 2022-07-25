<template>
	<view class="comment-masker-container">
		<uni-popup ref="popup" type="bottom" :mask-click='false'>
			<view class="comment-container">
				<view class="comment-header">
					<!-- 评论组件头部内容 -->
					<text @click="$emit('cancelComment')">取消</text>
					<text @click="sendComment">发布</text>
				</view>
				<view class="comment-body">
					<textarea cols="30" rows="10" class="comment-detail" v-model="commentDetail" placeholder="请输入当前评论内容" maxlength="200"></textarea>
					<text class="comment-number">{{commentDetail.length}}/200</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"CommentMasker",
		data() {
			return {
				commentDetail:""
			};
		},
		watch:{
			showPopup(newVal,oldVal){
				newVal? this.$refs.popup.open() : this.$refs.popup.close();
			}
		},
		props:{
			showPopup:Boolean
		},
		methods:{
			sendComment(){
				this.$emit('sendComment',this.commentDetail);
				this.commentDetail = "";
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-container{
		width: 100%;
		height: 250px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		.comment-header{
			padding: 0 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border: 1px solid #f6f6f6;
			text{
				color: #666;
				height: 100rpx;
				line-height: 100rpx;
				padding: 0 30rpx;
			}
		}
		.comment-body{
			flex: 1;
			padding: 10rpx 20rpx;
			position: relative;
			.comment-detail{
				width: 100%;
			}
			.comment-number{
				position: absolute;
				right: 20rpx;
				bottom: 20rpx;
				color: #8c8c8c;
			}
		}
	}
</style>
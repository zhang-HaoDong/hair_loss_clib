<template>
	<view>
		<view class="comment-content-container" v-for="item in commentsList" :key="item.comment_id"
			v-if="commentsList.length">
			<CommentBox :commentData="item" @commentReply="commentReply"></CommentBox>
		</view>
		<!-- 自定义评论组件 -->
		<CommentMasker :showPopup="showPopup" @cancelComment="cancelComment" @sendComment="_sendComment">
		</CommentMasker>
		
		<uni-load-more :status="loading"></uni-load-more>
	</view>
</template>

<script>
	export default {
		onLoad(params) {
			this.articleId = params.articleId;
			this._getComments();
		},
		onReachBottom() {
			if(this.isOver){
				return;
			}
			this.page++;
			this._getComments();
		},
		data() {
			return {
				page:1,
				pageSize:5,
				commentsList:[],
				articleId:"",
				showPopup:false,
				replyData:{},
				isOver:false,
				loading:"loading"
			}
		},
		methods: {
			commentReply(data) {
				this.showPopup = true;
				this.replyData = {
					comment_id: data.comment.comment_id,
					is_reply:data.isReply,
					reply_id:data.comment.reply_id
				};
			},
			async _getComments() {
				const {
					commentsList
				} = await this.$http.get_comments({
					articleId: this.articleId,
					page:this.page,
					pageSize:this.pageSize
				});
				if(commentsList.data.length === 0){
					this.loading = 'noMore';
					this.isOver = true;
					return;
				}
				this.commentsList = [...this.commentsList,...commentsList.data];
				
			},
			cancelComment(){
				this.showPopup = false;
			},
			async _sendComment(comment) {
				const res = await this.$http.update_comment({
					userId: this.userInfo._id,
					articleId: this.articleId,
					comment,
					comment_id: this.replyData.comment_id,
					is_reply:this.replyData.is_reply,
					reply_id:this.replyData.reply_id
				})
			
				this.showPopup = false;
				this.replyData = {};
				this._getComments();
			},
		}
	}
</script>

<style>
	.comment-content-container{
		padding: 0 40rpx;
		margin: 40rpx 60rpx;
		border-bottom: 1px solid #ddd;
	}
</style>

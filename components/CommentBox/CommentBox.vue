<template>
  <view class="comment-box">
    <view class="comment-header">
      <view class="comment-header-logo">
        <image :src="commentData.author.avatar" mode="aspectFill"></image>
      </view>
      <view class="comment-header-info">
        <view class="title">
          {{commentData.author.author_name}}
		  <text class="toAuthorName" v-if="isReply"> 回复 {{commentData.to}}</text>
        </view>
        <view class="">
          <uni-dateformat :date="commentData.creeate_time" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
        </view>
      </view>
    </view>
    <!-- 内容部分 -->
    <view class="comment-content">
      <view class="">
        {{commentData.comment_content}}
      </view>
      <view class="comment-info">
        <view class="comment-button" @click="commentReply({
			comment:commentData,
			isReply
		})">
          回复
        </view>
      </view>
    </view>
	<!-- 评论内容子评论 -->
	<view v-if="commentData.replyArr !== []" class="comment-box-children"  v-for="item in commentData.replyArr" :key="item.comment_id">
		<CommentBox :commentData="item" @commentReply="commentReply" :isReply="true"></CommentBox>
	</view>
  </view>
</template>

<script>
export default {
	name:"CommentBox",
	props:{
		commentData:Object,
		isReply:{
			type:Boolean,
			default:false
		}
	},
	methods: {
		commentReply(data) {
			if(data.isReply){
				data.comment.reply_id = data.comment.comment_id;
				data.comment.comment_id = this.commentData.comment_id;
				data.comment.is_reply = true;
			}
			this.$emit('commentReply',data);
		}
	},
}
</script>

<style lang="scss">
@import "./css/CommentBox.scss";
</style>
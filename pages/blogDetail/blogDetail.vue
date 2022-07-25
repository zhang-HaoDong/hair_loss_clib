<template>
	<view class="blog-detail-container">
		<view class="detail-title">
			{{blogData.title}}
		</view>
		<view class="detail-header">
			<view class="detail-logo">
				<image :src="blogData.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">
					{{blogData.author.author_name}}
				</view>
				<view class="detail-header-content-info">
					<text>{{blogData.create_time}}</text>
					<text>{{blogData.browse_count}} 浏览</text>
					<text>{{blogData.thumbs_up_count}} 赞</text>
				</view>
			</view>
			<button type="default" class="detail-header-button" @click="focusAuthor">{{isFocus?"取消关注":"关注"}}</button>
		</view>
		<view class="detail-content-container">
			<view class="detail-html">
				<uParse :content="blogContent" :imageProp="imageProp" />
			</view>
			<!-- 评论展示组件 -->
			<view class="detail-comment">
				<view class="comment-title">最新评论</view>
				<view class="comment-content-container" v-for="item in commentsList" :key="item.comment_id"
					v-if="commentsList.length">
					<CommentBox :commentData="item" @commentReply="commentReply"></CommentBox>
				</view>
				<view class="no-data" v-else>
					暂无评论
				</view>
			</view>
		</view>

		<!-- 评论组件 -->
		<view class="detail-bottom">
			<view class="input-container" @click="openCommentMasker">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icon-box" @click="toCommentDetail">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icon-box">
					<SaveLikes :articleId="blogData._id"></SaveLikes>
				</view>
				<view class="detail-bottom-icon-box" @click="clickKudos">
					<uni-icons :type="isClickKudos? 'hand-up-filled' : 'hand-up'" size="22" color="#f07373"></uni-icons>
				</view>
			</view>
		</view>
		<!-- 自定义评论组件 -->
		<CommentMasker :showPopup="showPopup" @cancelComment="cancelComment" @sendComment="_sendComment">
		</CommentMasker>
	</view>
</template>

<script>
	import wxParse from 'mpvue-wxparse'
	import uParse from '@/components/gaoyia-parse/parse.vue';
	import {mapMutations} from "vuex"
	import {
		marked
	} from 'marked';
	export default {
		components: {
			uParse
		},
		data() {
			return {
				commentsList: [],
				blogData: null,
				showPopup: false,
				replyData: {},
				imageProp: {
					mode: 'widthFix',
					lazyLoad: true,
					padding: 12
				},
			}
		},
		onLoad(...option) {
			this.blogData = this.$Router.currentRoute.query;
				//文章详情的获取
			this._getblogDetail();
			this._getComments();
		},
		methods: {
			//进入文章详情页面
			toCommentDetail(){
				uni.navigateTo({
					url:`../commentDetail/commentDetail?articleId=${this.blogData._id}`,
				})
			},
			//点赞
			async clickKudos(){
				this.checkIsLogin();
				//改变用户的文章点赞列表
				const data = await this.$http.click_kudos({
					userId:this.userInfo._id,//用户ID
					articleId:this.blogData._id//作者id
				})
				this.updateUserInfo({
					...this.userInfo,
					thumbs_up_article_ids:data.thumbs_up_article_ids
				})
				if(this.userInfo.thumbs_up_article_ids.includes(this.blogData._id)){
					this.blogData.thumbs_up_count++
				}else{
					this.blogData.thumbs_up_count--
				}
			},
			//关注作者
			async focusAuthor(){
				this.checkIsLogin();
				//改变关注的作者列表
				const data = await this.$http.focus_author({
					userId:this.userInfo._id,//用户ID
					authorId:this.blogData.author.id//作者id
				})
				this.updateUserInfo({
					...this.userInfo,
					author_likes_ids:data.author_likes_ids
				})
				uni.$emit('focusAuthor');
			},
			//获取文章详情
			async _getblogDetail() {
				const res = await this.$http.get_blog_detail({
					blog_id: this.blogData._id
				});
				this.blogData = res;
			},
			//打开评论框
			async openCommentMasker() {
				await this.checkIsLogin();
				this.showPopup = true;
			},
			//关闭评论框
			cancelComment() {
				this.showPopup = false;
			},
			//发送评论
			async _sendComment(comment) {
				const res = await this.$http.update_comment({
					userId: this.userInfo._id,
					articleId: this.blogData._id,
					comment,
					comment_id: this.replyData.comment_id,
					is_reply:this.replyData.is_reply,
					reply_id:this.replyData.reply_id
				})

				this.showPopup = false;
				this.replyData = {};
				this._getComments();
			},
			//获取评论
			async _getComments() {
				const {
					commentsList
				} = await this.$http.get_comments({
					articleId: this.blogData._id
				});
				this.commentsList = commentsList.data;
			},
			//获取子组件数据
			commentReply(data) {
				this.showPopup = true;
				this.replyData = {
					comment_id: data.comment.comment_id,
					is_reply:data.isReply,
					reply_id:data.comment.reply_id
				};
			},
			...mapMutations(['updateUserInfo'])
		},
		computed: {
			blogContent() {
				try {
					return marked.parse(this.blogData.content);
				} catch (e) {
					//TODO handle the exception
					return null;
				}
			},
			isFocus(){
				try{
					if(this.userInfo.author_likes_ids.includes(this.blogData.author.id)){
					return true;
				}else{
					return false;
				}
				}catch{
					return null;
				}
				
			},
			isClickKudos(){
				try{
					if(this.userInfo.thumbs_up_article_ids.includes(this.blogData._id)){
					return true;
				}else{
					return false;
				}
				}catch{
					return null;
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './css/blogDetail.scss';
</style>

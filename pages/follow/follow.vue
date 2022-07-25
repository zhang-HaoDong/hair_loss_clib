<template>
	<view class="follow-container">
		<view class="follow-tab">
			<view class="follow-tab-box">
				<view class="follow-tab-item" :class="{active:currentIndex===0}" @click="currentIndex = 0">文章</view>
				<view class="follow-tab-item" :class="{active:currentIndex===1}" @click="currentIndex = 1">作者</view>
			</view>
		</view>
		<!-- 内容切换区域 -->
		<view class="follow-list-container">
			<swiper class="follow-list-swiper" :current="currentIndex" @change="indexChange">
				<swiper-item>
					<ListItem :isShowLoadMore="isShowLoadMore" :articleList="articleList" v-if="articleList.length">
					</ListItem>
					<view :class="{
						'no-data':articleDataNone
					}" >
						{{articleDataNone && "暂无收藏的文章"}}
					</view>
				</swiper-item>
				<swiper-item>
					<authorList :authorList="authorList" v-if="authorList.length"></authorList>
					<view :class="{
						'no-data':authorDataNone
					}" >
						{{articleDataNone && "暂无关注的作者"}}
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			// #ifdef MP-WEIXIN
			if (!this.userInfo) {
				uni.redirectTo({
					url: "/pages/userInfo/login/login"
				})
			}
			// #endif
			uni.$on('updateLikeArticle', () => {
				this._getFollowArticleList('noLoading');
			})
			uni.$on('focusAuthor', () => {
				this._getFocusAuthorList('noLoading');
			})
			this._getFollowArticleList();
			this._getFocusAuthorList();
		},
		data() {
			return {
				currentIndex: 0,
				isShowLoadMore: false,
				articleList: [],
				articleDataNone: true,
				authorList: [],
				authorDataNone: true
			}
		},
		methods: {
			//监听swiper组件滑动
			indexChange(e) {
				this.currentIndex = e.detail.current;
			},

			async _getFollowArticleList(isLoading) {
				const list = await this.$http.get_follow_article_list({
					userId: this.userInfo._id,
					isLoading
				})
				this.articleList = list;
				if (this.articleList.length === 0) {
					this.articleDataNone = true;
				} else {
					this.articleDataNone = false;
				}
			},
			async _getFocusAuthorList(isLoading) {
				const list = await this.$http.get_focus_author_list({
					userId: this.userInfo._id,
					isLoading
				})
				this.authorList = list;
				if (list.length === 0) {
					this.authorDataNone = true;
				} else {
					this.authorDataNone = false;
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "./css/follow.scss";
</style>

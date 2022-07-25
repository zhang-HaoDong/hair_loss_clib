<template>
	<view>
		<ListItem :isShowLoadMore="false" :articleList="articleList" v-if="articleList.length"></ListItem>
		<view class="no-data" v-else>
			暂无发布的文章
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._getMyArticle();
		},
		data() {
			return {
				articleList:[],
			}
		},
		methods: {
			async _getMyArticle(){
				const {myArticle} = await this.$http.get_my_article({
					userId:this.userInfo._id
				})
				this.articleList = myArticle;
			}
		}
	}
</script>

<style lang="scss">
	.no-data{
		height: 400rpx;
		line-height: 400rpx;
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		color: #666;
	}
</style>

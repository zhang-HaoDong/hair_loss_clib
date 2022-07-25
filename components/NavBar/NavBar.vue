<template>
	<view class="navbar-container">
		<view class="nav-top">
			<view :style="{
				height:sysBarheight + 'rpx'
			}">
			</view>
			<!-- 当为搜索页面时为搜索页面添加回退按钮 -->
			<view @click="returnArticleList" :style="{top:sysBarheight + 6 + 'rpx'}" class="return-icon" v-if="isSearch">
				<uni-icons type="back" size="22" color="white"></uni-icons>
			</view>
			<view @click="toSearchPage" class="nav-content" :style="{
				marginRight:marginRight + 'rpx',
				marginLeft:isSearch?'20rpx':''
			}">
				<uni-icons type="search" color="#999" class="search-icon"></uni-icons>
				<view class="search-txt" v-if="!isSearch">请输入文章标题进行查找</view>
				<input v-else class="search-input" v-model.trim="keyWords"  type="text" confirm-type="search" @confirm="searchKeyWords" placeholder="输入文章标题进行搜索">
			</view>
		</view>
		<view :style="{
			height: sysBarheight + 90 + 'rpx'
		}"></view>
	</view>
</template>

<script>
	export default {
		name: "NavBar",
		props: {
			isSearch: {
				type: Boolean,
				default(){
					return false;
				}
			},
			parentVal:{
				type:String,
				default(){
					return "";
				}
			}
		},
		data() {
			return {
				sysBarheight: 20,
				marginRight: 0
			};
		},
		computed:{
			keyWords:{
				get(){
					return this.parentVal;
				},
				set(val){
					this.$emit("keyWordsChange",val);
					if(!val)
					this.$emit('sendSearchData')
				}
			}
		},
		created() {
			this.getsysinfo();
		},
		methods: {
			searchKeyWords(){
				this.$emit("sendSearchData")
			},
			returnArticleList() {
				// #ifdef H5
				uni.switchTab({
					url: '/pages/index/index'
				})
				// #endif
				// #ifndef H5
				uni.navigateBack()
				// #endif
			},
			toSearchPage() {
				if(this.isSearch)
				return;
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			getsysinfo() {
				// #ifdef H5
				const res = uni.getSystemInfoSync().statusBarHeight;
				this.sysBarheight = res == 0 ? this.sysBarheight : res;
				// #endif
				// #ifdef MP-WEIXIN
				const menuBtnInfo = uni.getMenuButtonBoundingClientRect();
				this.sysBarheight = menuBtnInfo.top / .75 * 2;
				this.marginRight = menuBtnInfo.width / 0.75 * 2;
				// #endif
				// #ifndef H5
				// #ifndef MP-WEIXIN
				this.sysBarheight = 70;
				// #endif
				// #endif
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./css/navbar.scss"
</style>

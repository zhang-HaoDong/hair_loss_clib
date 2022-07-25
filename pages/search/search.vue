<template>
	<view class="search-container">
		<!-- 搜索导航组件 -->
		<NavBar :isSearch="isSearch" :parentVal="parentVal" @keyWordsChange="parentVal = $event"
			@sendSearchData="_sendSearchData"></NavBar>
		<!-- 搜索包裹 -->
		<view class="search-wrapper" v-if="isShowHistory">
			<!-- 没有进行搜索的操作 -->
			<view  class="search-history-container">
				<!-- 头部 -->
				<view class="search-header">
					<text class="history-text">搜索历史</text>
					<text class="history-clean" @click="cleanSearchHistory">清空</text>
				</view>
				<!-- 内容部分 -->
				<view class="search-history-content" v-if="searchHistory.length">
					<view class="history-content-item" v-for="(item,index) in searchHistory" :key="index" @click="directSearchHistory(item)">{{item}}</view>
				</view>

				<view class="no-data" v-else>当前没有搜索历史</view>
			</view>
		</view>
		<!-- 开始进行搜索的操作 -->
		<view v-else class="search-list-container">
			<ListItem v-if="searchList.length" :articleList="searchList" :isShowLoadMore="false" @saveHistory="saveHistory"></ListItem>
			<view v-else class="no-data">没有搜索到相关数据</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations,mapState} from 'vuex'
	export default {
		data() {
			return {
				isSearch: true,
				searchList: [],
				parentVal: "",
				isShowHistory:true,
			}
		},
		methods: {
			async _sendSearchData() {
				this.isShowHistory = false;
				if(!this.parentVal){
					this.searchList = [];
					this.isShowHistory = true;
					return;
				}
				const {articleList} = await this.$http.get_search_data({
					searchVal:this.parentVal
				});
				this.searchList = articleList;
			},
			saveHistory(){
				this.updateSearchHistory(this.parentVal);
			},
			directSearchHistory(item){
				//通过点击历史记录直接搜索
				this.parentVal = item;
				this._sendSearchData();
			},
			...mapMutations(['updateSearchHistory','cleanSearchHistory'])
		},
		computed:{
			...mapState(['searchHistory'])
		}
	}
</script>

<style lang="scss">
	@import './css/search.scss'
</style>

<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :tablist="tablist" :current="current" @indexChange="changIndex($event)"></TabBar>
		<ArticleList class="articleList-container" :tablist="tablist" :current="current" @indexChange="changIndex($event)">
		</ArticleList>
	</view>
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	export default {
		data() {
			return {
				current: 0
			}
		},
		onLoad() {
			this.loadTabList()
		},
		methods: {
			async loadTabList() {
				if(this.tablist.length) return;
				let res = await this.$http.get_label_list();
				res = [{name:"全部"},...res]
				this.setTabList(res);
			},
			changIndex(index) {
				this.current = index;
			},
			...mapMutations(['setTabList'])
		},
		computed:{
			tablist(){
				if(this.userInfo){
					return [{name:"全部"},...this.$store.state.tablist.filter(item => this.userInfo.label_ids.includes(item._id))];
				}else{
					return this.$store.state.tablist;
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		display: flex;
		height: 100%;
	}
	.home-container {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.articleList-container {
		height: 100%;
		flex: 1;
		box-sizing: border-box;
	}
</style>

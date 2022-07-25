<template>
	<swiper :current="current" @change="indexChange" class="swiper-container">
		<swiper-item v-for="(item,index) in tablist" :key="item._id" >
			<view class="swiper-item">
				<ListItem :loadData="loadData[index]" :articleList="articleData[index]" @loadMore="loadMoreData">
				</ListItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "ArticleList",
		props: {
			tablist: {
				type:Array,
				default(){
					return [];
				}
			},
			current: Number
		},
		created() {
		this.tablist.length && this.getArticleList(this.current);
		},
		watch: {
			tablist(n, o) {
				if(JSON.stringify(n) == JSON.stringify(o)) return;
				this.articleData = {};
				this.loadData = {};
				this.getArticleList(this.current);
			}
		},
		data() {
			return {
				articleData: {},
				loadData: {},
				pageSize: 6
			};
		},
		methods: {
			async indexChange(e) {
				const {
					current
				} = e.detail;
				this.$emit("indexChange", current);
				if (!this.articleData[current] || !this.articleData[current].length)
					this.getArticleList(current);
			},
			async getArticleList(current) {
				if (!this.loadData[current]) {
					this.loadData[current] = {
						page: 1,
						loading: "loading",
						total: 0
					}
				}
				const {
					articleList,
					total
				} = await this.$http.get_article_list({
					classify: this.tablist[current].name,
					page: this.loadData[current].page++,
					pageSize: this.pageSize
				});
				let oldList = this.articleData[current] || [];
				oldList.push(...articleList);
				this.$set(this.articleData, current, oldList);
				this.loadData[current].total = total;
			},
			loadMoreData() {
				if (this.articleData[this.current].length === this.loadData[this.current].total) {
					this.loadData[this.current] = {
						...this.loadData[this.current],
						loading:"nomore"
					};
					this.$forceUpdate();
					return;
				}
				this.getArticleList(this.current);
			}
		}
	}
</script>

<style scoped>
	.swiper-container{
		height: 100%;
	}
	.swiper-item {
		height: 100%;
	}
</style>

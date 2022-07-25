<template>
	<view class="list-item-container">
		<scroll-view scroll-y="true" class="scroll-box" @scrolltolower="loadMore">
			<view class="list-card-box">
				<ListCard :item="item" v-for="item in articleList" :key="item._id" @saveHistory="$emit('saveHistory')">
				</ListCard>
			</view>
			<uni-load-more :status="loadData.loading" v-if="articleList.length >= 6 && isShowLoadMore"></uni-load-more>
			<uni-load-more status="nomore" v-if="articleList.length < 6 && isShowLoadMore"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "ListItem",
		data(){
			return {
				
			}
		},
		props: {
			articleList: {
				type: Array,
				default(){
					return [];
				}
			},
			loadData:{
				type: Object,
				default(){
					return {
						loading:"loading"
					}
				}
			},
			isShowLoadMore:{
				type:Boolean,
				default(){
					return true;
				}
			}
		},
		computed: {

		},
		methods:{
			loadMore(){
				this.$emit("loadMore")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-item-container {
		height: 100%;
		overflow: hidden;

		.scroll-box {
			height: 100%;
			overflow: hidden;
			box-sizing: border-box;
		}

	}
</style>

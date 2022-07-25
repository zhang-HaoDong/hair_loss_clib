<template>
	<view class="tabbar-container">
		<scroll-view scroll-x="true" class="tab-scroll" :scroll-into-view="scrollLeft" :scroll-with-animation="true">
			<view class="tab-scroll-box">
				<view class="tab-scroll-item" v-for="(item,index) in tablist" :key="index" @click="handleClick(index)"
					:class="{active:current===index}" :id="`item${index}`">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icon" @click="toLabelAdmin">
			<uni-icons type="gear" color="#666" size="26"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "TabBar",
		computed: {
			scrollLeft() {
				return `item${this.current}`;
			}
		},
		props: {
			tablist: Array,
			current: Number,
		},
		methods: {
			handleClick(index) {
				this.$emit("indexChange", index);
			},
			async toLabelAdmin() {
				await this.checkIsLogin();
				uni.navigateTo({
					url: "/pages/labelAdmin/labelAdmin"
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "./css/tabbar.scss"
</style>

<template>
	<view class="label-container">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">我的标签</view>
				<view class="label-edit" @click="startEdit">{{this.isEdit? '完成' :'编辑'}}</view>
			</view>
			<view class="label-content">
				<view class="label-content-item" v-for="(item,index) in selfTabList" :key="index">
					{{item.name}}
					<uni-icons v-if="isEdit" class="icon-close" type="clear" size="20" color="red"
						@click="deleteSelfTabList(item)"></uni-icons>
				</view>
				<view class="no-data" v-if="!selfTabList.length">当前没有数据</view>
			</view>
		</view>
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">标签推荐</view>
			</view>
			<view class="label-content">
				<view class="label-content-item" v-for="(item,index) in recommendTabList" :key="index"
					@click="changeSelfTabList(item)">
					{{item.name}}
				</view>
				<view class="no-data" v-if="!recommendTabList.length">当前没有数据</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				isEdit: false,
				labelIds: []
			}
		},
		watch: {
			userInfo: {
				immediate: true,
				handler(n, o) {
					this.labelIds = this.userInfo.label_ids;
				}
			}
		},
		methods: {
			// 编辑按钮事件
			startEdit() {
				this.isEdit && this._updateTabList();
				this.isEdit = !this.isEdit;
			},
			// 修改标签
			async _updateTabList() {
				await this.$http.update_tab_list({
					tablist_ids: this.labelIds,
					userId: this.userInfo._id
				});
				this.updateUserInfo({
					...this.userInfo,
					label_ids: this.labelIds
				})
			},
			changeSelfTabList(item) {
				if (!this.isEdit)
					return;
				this.labelIds.push(item._id)
			},
			deleteSelfTabList(i) {
				this.labelIds = this.labelIds.filter(item => item !== i._id)
			},
			...mapMutations(['updateUserInfo'])
		},
		computed: {
			...mapState(['tablist']),
			selfTabList() {
				return this.tablist.filter(item => this.labelIds.includes(item._id))
			},
			recommendTabList() {
				return this.tablist.filter(item => !this.labelIds.includes(item._id) && item._id)
			}
		}
	}
</script>

<style lang="scss">
	@import "./css/labelAdmin.scss";
</style>

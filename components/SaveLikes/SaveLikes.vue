<template>
	<view class="save-incons" @click.stop="saveLike">
		<uni-icons color="#ff6600" :type="isLike?'heart-filled' : 'heart'" size="20"></uni-icons>
	</view>
</template>

<script>
	import {mapMutations} from "vuex";
	export default {
		name:"SaveLikes",
		props:{
			articleId:{
				type:String
			}
		},
		methods:{
			async saveLike(){
				await this.checkIsLogin();
				const {userInfo} = await this.$http.update_save_like({
					articleId:this.articleId,
					userId:this.userInfo._id
				});
				this.updateUserInfo(userInfo);
				uni.$emit('updateLikeArticle');
			},
			...mapMutations(['updateUserInfo']),
		},
		computed:{
			isLike(){
				if(!this.userInfo){
					return false;
				}
				if(this.userInfo.article_likes_ids.includes(this.articleId)){
					return true;
				}else{
					return false;
				}
			}
		},
	}
</script>

<style>

</style>

export default{
	updateUserInfo(state,userInfo){
		uni.setStorageSync('userInfo',userInfo)
		state.userInfo = userInfo;
	},
	//修改历史记录存储
	updateSearchHistory(state,val){
		let list = state.searchHistory;
		if((list.length > 0) && list.findIndex(item => item === val) > -1) return;
		list.unshift(val);
		uni.setStorageSync('searchHistory',list);
	},
	cleanSearchHistory(state){
		state.searchHistory = [];
		uni.removeStorageSync('searchHistory');
	},
	setTabList(state,tablist){
		uni.setStorageSync('tablist',tablist);
		state.tablist = tablist;
	}
}
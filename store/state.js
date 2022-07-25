export default {
	userInfo:uni.getStorageSync('userInfo') || null,
	searchHistory:uni.getStorageSync('searchHistory') || [],
	tablist:uni.getStorageSync('tablist') || [],
}
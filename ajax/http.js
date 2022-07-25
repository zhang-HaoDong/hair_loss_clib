export default ({
	name,
	data = {}
}) => {
	return new Promise((resolve, reject) => {
		if(!data.isLoading)
		uni.showLoading({})
		uniCloud.callFunction({
			name,
			data,
			success({
				result
			}) {
				if (result.code === 0) {
					resolve(result.data);
					if (result.msg !== undefined && result.msg !== "") {
						uni.showToast({
							icon: "none",
							title: result.msg
						})
					}
				} else if (result.code === 3) {
				//表示该手机号未注册
				uni.showToast({
					title:result.msg,
					icon:"none"
				})
				setTimeout(function() {
					uni.navigateTo({
						url:"../Registration/Registration"
					})
				}, 1500);
				} else {
					uni.showToast({
						icon: "none",
						title: result.msg
					})
				}
			},
			fail(err) {
				reject(err)
			},
			complete() {
				if(!data.isLoading)
				uni.hideLoading();
			}
		})
	})
}

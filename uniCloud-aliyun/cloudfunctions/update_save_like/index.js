'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {
		articleId,
		userId
	} = event;
	const userInfo = await db.collection('user').doc(userId).get();
	let articleIds = userInfo.data[0].article_likes_ids;
	const isLike = articleIds.includes(articleId);
	if (isLike) {
		//取消收藏
		articleIds = articleIds.filter(item => {
			return item !== articleId
		})
	}
	else{
		//收藏
		articleIds.push(articleId)
	}
	await db.collection('user').doc(userId).update({
		article_likes_ids:articleIds
	});
	
	const newUserInfo = await db.collection('user').doc(userId).get();
	return {
		code: 0,
		msg: isLike?"取消收藏成功":"收藏成功",
		data: {
			userInfo:newUserInfo.data[0]
		}
	}
};

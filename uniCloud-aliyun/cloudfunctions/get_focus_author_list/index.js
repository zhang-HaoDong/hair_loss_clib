'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	const {userId} = event;
	
	const userInfo = await db.collection('user').doc(userId).get();
	const author_likes_ids = userInfo.data[0].author_likes_ids;
	const focusAuthorList = await db
	.collection('user')
	.aggregate()
	.addFields({
		is_like: $.in(['$id',author_likes_ids])
	})
	.project({
		loginName:0,
		password:0
	})
	.match({
		is_like:true
	})
	.end()
	return {
		code:0,
		msg:"返回数据成功",
		data:focusAuthorList.data
	}
};

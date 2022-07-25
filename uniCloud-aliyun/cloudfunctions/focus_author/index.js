'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {
		userId,
		authorId
	} = event;
	let msg = "";
	let author_likes_ids = await db.collection('user').doc(userId).get();
	author_likes_ids = author_likes_ids.data[0].author_likes_ids
	if (author_likes_ids.includes(authorId)) {
		author_likes_ids = author_likes_ids.filter(item => item != authorId)
		msg = "取消关注成功";
		await db.collection('user')
			.where({
				id:authorId
			})
			.update({
				fans_count: dbCmd.inc(-1)
			})
	} else {
		author_likes_ids.push(authorId);
		msg = "关注成功";
		await db.collection('user')
			.where({
				id:authorId
			})
			.update({
				fans_count: dbCmd.inc(1)
			})
	}

	await db.collection('user').doc(userId).update({
		author_likes_ids
	})
	return {
		code: 0,
		msg,
		data: {
			author_likes_ids
		}
	}
};

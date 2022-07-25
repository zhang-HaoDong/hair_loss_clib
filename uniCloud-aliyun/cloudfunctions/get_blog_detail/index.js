'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {blog_id} = event;
	await db.collection('article').doc(blog_id).update({
		browse_count:dbCmd.inc(1)
	})
	const blogDetail = await db.collection('article')
	.aggregate()
	.match({
		_id:blog_id
	})
	.project({
		comments:0,
	})
	.end();
	return {
		code:0,
		msg:"文章获取成功",
		data:blogDetail.data[0]
	}
};

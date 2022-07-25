'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {tablist_ids,userId} = event;
	await db.collection('user')
	.doc(userId)
	.update({
		label_ids:tablist_ids
	})
	return {
		code:0,
		msg:"修改成功",
		data:{}
	}
};

'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {
		userId,
		content,
		feedbackImageList
	} = event;
	await db.collection('feedback').add({
		user_id:userId,
		feedbackImageList,
		content
	})
	return {
		code:0,
		msg:"提交反馈成功",
		data:{}
	}
};

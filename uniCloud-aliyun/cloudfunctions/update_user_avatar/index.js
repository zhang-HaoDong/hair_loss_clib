'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {
		userId,
		filePath
	} = event;
	const userInfo = await db.collection('user').doc(userId).get();
	const oldAvatar = userInfo.data[0].avatar;
	// 删除以前的头像缓存
	try{
		uniCloud.deleteFile({
			fileList:[oldAvatar]
		})
	}catch(e){
		console.log(e.message);
	}
	const article_ids = userInfo.data[0].article_ids;
	await db.collection('user').doc(userId).update({
		avatar:filePath
	});
	await db.collection('article').where({
		id:dbCmd.in(article_ids)
	}).update({
		author:{
			avatar:filePath
		}
	});
	return {
		code:0,
		msg:"更换头像成功",
		data:{}
	}
};

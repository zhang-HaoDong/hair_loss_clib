'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	const {
		userId
	} = event;
	const list = await db.collection('user').doc(userId).get();
	let article_ids = list.data[0].article_ids;
	const myList = await db
	.collection('article')
	.aggregate()
	.addFields({
		isMyArticle:$.in(['$id',article_ids])
	})
	.project({
		content:0
	})
	.match({
		isMyArticle:true
	})
	.end();
	return {
		code:0,
		msg:"获取文章数据成功",
		data:{
			myArticle:myList.data
		}
	}
	
};

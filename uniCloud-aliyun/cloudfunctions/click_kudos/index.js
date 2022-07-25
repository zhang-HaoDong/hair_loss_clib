'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {
		userId,
		articleId
	} = event;
	let msg = "";
	let addNum = null;
	let thumbs_up_article_ids = await db.collection('user').doc(userId).get();
	thumbs_up_article_ids = thumbs_up_article_ids.data[0].thumbs_up_article_ids
	if(thumbs_up_article_ids.includes(articleId)){
		thumbs_up_article_ids = thumbs_up_article_ids.filter(item => item != articleId);
		addNum = -1;
		msg = "您取消了点赞"
	}else{
		thumbs_up_article_ids.push(articleId);
		addNum = 1;
		msg = "点赞成功"
	}
	
	await db.collection('user').doc(userId).update({
		 thumbs_up_article_ids
	 })
	 await db.collection('article').doc(articleId).update({
		 thumbs_up_count:dbCmd.inc(addNum)
	 })
	 return {
		 code:0,
		 msg,
		 data:{
			 thumbs_up_article_ids
		 }
	 }
};

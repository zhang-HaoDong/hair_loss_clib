'use strict';
const db = uniCloud.database();
const dbcmd = db.command;
exports.main = async (event, context) => {
	const {
		userId,
		articleId,
		comment,
		comment_id = '',
		reply_id = '',
		is_reply = false
	} = event;


	//获取用户信息
	let user = await db.collection('user').doc(userId).get();
	user = user.data[0];
	
	//获取文章的数据表
	const article = await db.collection('article').doc(articleId).get();
	const comments = article.data[0].comments;
	//编辑文章评论内容
	let commentObj = {
		comment_id:generatedId(5),
		comment_content:comment,
		creeate_time:Date.now(),
		is_reply,
		replyArr:[],
		author:{
			author_id:user._id,
			author_name:user.author_name,
			avatar:user.avatar,
			professionnal:user.professionnal
		}
	}
	if(comment_id === ''){
		commentObj.replyArr = [];
		commentObj = dbcmd.unshift(commentObj);
	}else{
		let commentAuthor = null;
		let commentIndex = comments.findIndex(item => item.comment_id === comment_id);
		if(is_reply){
			commentAuthor = comments[commentIndex].replyArr.find(item => item.comment_id === reply_id).author.author_name;
		}else{
			commentAuthor = comments.find(item => item.comment_id = comment_id).author.author_name;
		}
		
		commentObj.to = commentAuthor;
		commentObj = {
			[commentIndex]:{
				replyArr:dbcmd.push(commentObj)
			}
		}
	}
		function generatedId(num){
			return Number(Math.random().toString().substr(3,num) + Date.now()).toString(36)
		}

	await db.collection('article').doc(articleId).update({
		comments:commentObj
	});
	return {
		code:0,
		msg:"评论成功",
	}
};

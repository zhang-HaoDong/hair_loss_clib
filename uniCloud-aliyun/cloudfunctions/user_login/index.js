'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {name,pwd,mobile,type} = event;
	const {affectedDocs,data} = await db.collection('user')
	.aggregate()
	.match(type === 'account' ? {loginName:name,password:pwd} : {phone:mobile})
	.end()
	return affectedDocs ? {
		code:0,
		msg:"登陆成功",
		data:data[0]
	}:{
		code:1,
		msg:type === "account" ? "登陆失败,用户名或密码错误" : "登录失败,该手机号未注册"
	}
};

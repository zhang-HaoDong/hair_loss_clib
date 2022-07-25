'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {
		mobile
	} = event;
	const {affectedDocs,data} = await db.collection('user')
	.aggregate()
	.match({phone:mobile})
	.end()
	if(affectedDocs === 0){
		return {
			code:3,//code:3为改手机号未注册 跳转到注册页面
			msg:"该手机号未注册"
		}
	}
	//创建一个随机数
	const randomNum = Math.random().toString().substr(2, 6)
	//使用api对对象手机发送验证码
	try {
		const res = await uniCloud.sendSms({
			appid: '__UNI__7BB53D0',
			smsKey: '6bbd5480baaabc02f9817d9e138c3752',
			smsSecret: '8af5b42abeb0dc51ea3a93cd15ea3f72',
			phone: mobile,
			templateId: '15115', // 请替换为自己申请的模板id
			data: {
				code: randomNum,
				expMinute: '1',
			}
		})
		// 调用成功，请注意这时不代表发送成功
		return {
			code:0,
			data:{
				msg:'请在手机上查收验证码',
				passcode:randomNum
			}
		};
	} catch (err) {
		return {
			code: 1,
			msg: "短信验证码发送失败"
		}
	}
	
	// 模拟返回数据
	// return {
	// 	code:0,
	// 	data:{
	// 		msg:'请在手机上查收验证码',
	// 		passcode:randomNum
	// 	}
	// };
};

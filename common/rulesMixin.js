export default {
	install(Vue) { // 使用install的形式进行安装mixin
		Vue.mixin({
			data() {
				return {
					userrules: {
						name: {
							rules: [{
									required: true,
									'errorMessage': "账户名不能为空"
								},
								{
									validateFunction: this.validateLoginName
								} // 自定义验证规则
							]
						},
						pwd: {
							rules: [{
								required: true,
								'errorMessage': "密码不能为空"
							}, ]
						},
						mobile: {
							rules: [{
									required: true,
									'errorMessage': "电话号码不能为空"
								},
								{
									validateFunction: this.validatePhone
								} // 自定义验证规则
							]
						},
						passcode: {
							rules: [{
									required: true,
									"errorMessage": "验证码不能为空"
								},
								{
									validateFunction: this.validateCode
								}
							]
						}
					},
					mobileReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
				}
			},
			methods: {
				validateCode(rule, val, data, callback){
					switch (true) {
						case val !== this.passCode:
							callback('验证码输入不正确')
							break;
						default:
							return true
					}
				},
				validateLoginName(rule, val, data, callback) {
					switch (true) {
						case val.length < 6:
							callback('用户名长度不正确')
							break;
						default:
							return true
					}
				},
				/* 验证手机号码 */
				validatePhone(rule, val, data, callback) {
					switch (true) {
						case !this.mobileReg.test(val):
							callback('手机号码格式不正确')
							break;
						default:
							return true
					}
				}
			}
		})
	}
}

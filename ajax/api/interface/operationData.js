import ajax from "@/ajax/http.js";
//用户登录
export const update_save_like = data => ajax({
	name:"update_save_like",
	data, 
})
//更新标签显示内同
export const update_tab_list = data => ajax({
	name:"update_tab_list",
	data, 
})
//发布文章的评论
export const update_comment = data => ajax({
	name:"update_comment",
	data, 
})
//关注作者
export const focus_author = data => ajax({
	name:"focus_author",
	data, 
})
//点赞文章
export const click_kudos = data => ajax({
	name:"click_kudos",
	data, 
})
//反馈信息
export const update_feedback = data => ajax({
	name:"update_feedback",
	data, 
})
//更改头像
export const update_user_avatar = data => ajax({
	name:"update_user_avatar",
	data, 
})
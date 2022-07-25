import ajax from "@/ajax/http.js";

// 获取标签列表数据
export const get_label_list = data => ajax({
	name:"get_label_list",
	data, 
})

// 获取文章列表数据
export const get_article_list = data => ajax({
	name:"get_article_list",
	data
})

// 搜索关键词得到文章列表
export const get_search_data = data => ajax({
	name:"get_search_data",
	data
})
// 获取文章详情页
export const get_blog_detail = data => ajax({
	name:"get_blog_detail",
	data
})
//获取评论列表
export const get_comments = data => ajax({
	name:"get_comments",
	data
})

//获取喜欢的文章列表数据
export const get_follow_article_list = data => ajax({
	name:"get_follow_article_list",
	data
})

//获取关注的作者列表
export const get_focus_author_list = data => ajax({
	name:"get_focus_author_list",
	data
})

//获取个人文章列表
export const get_my_article = data => ajax({
	name:"get_my_article",
	data
})

//获取当前版本
export const get_current_version = data => ajax({
	name:"get_current_version",
	data
})
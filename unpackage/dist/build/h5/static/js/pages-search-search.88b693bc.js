(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"05e6":function(t,e,a){"use strict";a.r(e);var n=a("4e3a"),r=a("6fa1");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("3746");var s,c=a("f0c5"),o=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"ea9ba2b0",null,!1,n["a"],s);e["default"]=o.exports},"23fc":function(t,e,a){var n=a("3ebd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("2f9e1d7a",n,!0,{sourceMap:!1,shadowMode:!1})},3746:function(t,e,a){"use strict";var n=a("23fc"),r=a.n(n);r.a},"3ebd":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 添加一个flex布局的混编方法 */\r\n/* 全局系统样式定义 */uni-page-body[data-v-ea9ba2b0]{background-color:#f5f5f5;height:100%;display:flex}.search-container[data-v-ea9ba2b0]{display:flex;flex-direction:column;flex:1}.search-container .search-wrapper[data-v-ea9ba2b0]{background-color:#fff;margin-bottom:%?20?%}.search-container .search-wrapper .search-header[data-v-ea9ba2b0]{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;font-size:%?28?%;color:#666;padding:%?20?% %?30?%;border-bottom:1px solid #f5f5f5}.search-container .search-wrapper .search-header .history-text[data-v-ea9ba2b0]{color:#f25037}.search-container .search-wrapper .search-header .history-clean[data-v-ea9ba2b0]{color:#30b33a;font-weight:700}.search-container .search-wrapper .search-history-content[data-v-ea9ba2b0]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;flex-direction:row;padding:%?30?%;padding-top:0}.search-container .search-wrapper .search-history-content .history-content-item[data-v-ea9ba2b0]{padding:%?4?% %?20?%;margin-top:%?24?%;margin-right:%?20?%;border-radius:%?10?%;border:1px solid #666;font-size:%?28?%;color:#666}.search-container .no-data[data-v-ea9ba2b0]{height:%?400?%;line-height:%?400?%;width:100%;text-align:center;font-size:%?24?%;color:#666}.search-container .search-list-container[data-v-ea9ba2b0]{height:100%;flex:1;overflow:hidden}body.?%PAGE?%[data-v-ea9ba2b0]{background-color:#f5f5f5}',""]),t.exports=e},4150:function(t,e,a){var n=a("f1c3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("45def3ea",n,!0,{sourceMap:!1,shadowMode:!1})},"4e3a":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={NavBar:a("5770").default,ListItem:a("29d9").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"search-container"},[a("NavBar",{attrs:{isSearch:t.isSearch,parentVal:t.parentVal},on:{keyWordsChange:function(e){arguments[0]=e=t.$handleEvent(e),t.parentVal=e},sendSearchData:function(e){arguments[0]=e=t.$handleEvent(e),t._sendSearchData.apply(void 0,arguments)}}}),t.isShowHistory?a("v-uni-view",{staticClass:"search-wrapper"},[a("v-uni-view",{staticClass:"search-history-container"},[a("v-uni-view",{staticClass:"search-header"},[a("v-uni-text",{staticClass:"history-text"},[t._v("搜索历史")]),a("v-uni-text",{staticClass:"history-clean",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cleanSearchHistory.apply(void 0,arguments)}}},[t._v("清空")])],1),t.searchHistory.length?a("v-uni-view",{staticClass:"search-history-content"},t._l(t.searchHistory,(function(e,n){return a("v-uni-view",{key:n,staticClass:"history-content-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.directSearchHistory(e)}}},[t._v(t._s(e))])})),1):a("v-uni-view",{staticClass:"no-data"},[t._v("当前没有搜索历史")])],1)],1):a("v-uni-view",{staticClass:"search-list-container"},[t.searchList.length?a("ListItem",{attrs:{articleList:t.searchList,isShowLoadMore:!1},on:{saveHistory:function(e){arguments[0]=e=t.$handleEvent(e),t.saveHistory.apply(void 0,arguments)}}}):a("v-uni-view",{staticClass:"no-data"},[t._v("没有搜索到相关数据")])],1)],1)},i=[]},5770:function(t,e,a){"use strict";a.r(e);var n=a("6f9b"),r=a("80bc");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("8276");var s,c=a("f0c5"),o=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"7cd4f8cd",null,!1,n["a"],s);e["default"]=o.exports},"6f9b":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("ae8f").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"navbar-container"},[a("v-uni-view",{staticClass:"nav-top"},[a("v-uni-view",{style:{height:t.sysBarheight+"rpx"}}),t.isSearch?a("v-uni-view",{staticClass:"return-icon",style:{top:t.sysBarheight+6+"rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returnArticleList.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{type:"back",size:"22",color:"white"}})],1):t._e(),a("v-uni-view",{staticClass:"nav-content",style:{marginRight:t.marginRight+"rpx",marginLeft:t.isSearch?"20rpx":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearchPage.apply(void 0,arguments)}}},[a("uni-icons",{staticClass:"search-icon",attrs:{type:"search",color:"#999"}}),t.isSearch?a("v-uni-input",{staticClass:"search-input",attrs:{type:"text","confirm-type":"search",placeholder:"输入文章标题进行搜索"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchKeyWords.apply(void 0,arguments)}},model:{value:t.keyWords,callback:function(e){t.keyWords="string"===typeof e?e.trim():e},expression:"keyWords"}}):a("v-uni-view",{staticClass:"search-txt"},[t._v("请输入文章标题进行查找")])],1)],1),a("v-uni-view",{style:{height:t.sysBarheight+90+"rpx"}})],1)},i=[]},"6fa1":function(t,e,a){"use strict";a.r(e);var n=a("f619"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"80bc":function(t,e,a){"use strict";a.r(e);var n=a("ee94"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},8276:function(t,e,a){"use strict";var n=a("4150"),r=a.n(n);r.a},ee94:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"NavBar",props:{isSearch:{type:Boolean,default:function(){return!1}},parentVal:{type:String,default:function(){return""}}},data:function(){return{sysBarheight:20,marginRight:0}},computed:{keyWords:{get:function(){return this.parentVal},set:function(t){this.$emit("keyWordsChange",t),t||this.$emit("sendSearchData")}}},created:function(){this.getsysinfo()},methods:{searchKeyWords:function(){this.$emit("sendSearchData")},returnArticleList:function(){uni.switchTab({url:"/pages/index/index"})},toSearchPage:function(){this.isSearch||uni.navigateTo({url:"/pages/search/search"})},getsysinfo:function(){var t=uni.getSystemInfoSync().statusBarHeight;this.sysBarheight=0==t?this.sysBarheight:t}}};e.default=n},f1c3:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 添加一个flex布局的混编方法 */\r\n/* 全局系统样式定义 */.navbar-container[data-v-7cd4f8cd]{\r\n  /* 搜索界面单独添加样式 */}.navbar-container .nav-top[data-v-7cd4f8cd]{position:fixed;top:0;left:0;z-index:99;width:100%;background-color:#f25037;padding:0 %?30?% %?20?%;box-sizing:border-box}.navbar-container .nav-top .nav-content[data-v-7cd4f8cd]{display:flex;justify-content:flex-start;background-color:#fff;height:%?70?%;border-radius:%?35?%;flex-grow:1;padding-left:%?20?%;box-sizing:border-box}.navbar-container .nav-top .nav-content .search-txt[data-v-7cd4f8cd]{font-size:%?28?%;color:#999;line-height:%?70?%;width:100%;margin-left:%?20?%}.navbar-container .nav-top .nav-content .search-icon[data-v-7cd4f8cd]{line-height:%?70?%}.navbar-container .return-icon[data-v-7cd4f8cd]{position:absolute;left:0;height:%?60?%;display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;flex-direction:row}.navbar-container .search-input[data-v-7cd4f8cd]{height:%?70?%;font-size:%?28?%;color:#999;width:100%;text-indent:%?20?%}',""]),t.exports=e},f619:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("1da1")),i=n(a("5530")),s=a("26cb"),c={data:function(){return{isSearch:!0,searchList:[],parentVal:"",isShowHistory:!0}},methods:(0,i.default)({_sendSearchData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isShowHistory=!1,t.parentVal){e.next=5;break}return t.searchList=[],t.isShowHistory=!0,e.abrupt("return");case 5:return e.next=7,t.$http.get_search_data({searchVal:t.parentVal});case 7:a=e.sent,n=a.articleList,t.searchList=n;case 10:case"end":return e.stop()}}),e)})))()},saveHistory:function(){this.updateSearchHistory(this.parentVal)},directSearchHistory:function(t){this.parentVal=t,this._sendSearchData()}},(0,s.mapMutations)(["updateSearchHistory","cleanSearchHistory"])),computed:(0,i.default)({},(0,s.mapState)(["searchHistory"]))};e.default=c}}]);
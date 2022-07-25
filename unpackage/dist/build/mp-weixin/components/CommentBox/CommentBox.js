(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/CommentBox/CommentBox"],{"00e6":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"CommentBox",props:{commentData:Object,isReply:{type:Boolean,default:!1}},methods:{commentReply:function(e){e.isReply&&(e.comment.reply_id=e.comment.comment_id,e.comment.comment_id=this.commentData.comment_id,e.comment.is_reply=!0),this.$emit("commentReply",e)}}};n.default=o},7737:function(e,n,t){},"7ccf":function(e,n,t){"use strict";t.r(n);var o=t("bc1e"),c=t("fb7b");for(var u in c)"default"!==u&&function(e){t.d(n,e,(function(){return c[e]}))}(u);t("adea");var a,r=t("f0c5"),i=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=i.exports},adea:function(e,n,t){"use strict";var o=t("7737"),c=t.n(o);c.a},bc1e:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={uniDateformat:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat")]).then(t.bind(null,"c53e"))},CommentBox:function(){return Promise.resolve().then(t.bind(null,"7ccf"))}},c=function(){var e=this,n=e.$createElement;e._self._c},u=[]},fb7b:function(e,n,t){"use strict";t.r(n);var o=t("00e6"),c=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/CommentBox/CommentBox-create-component',
    {
        'components/CommentBox/CommentBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7ccf"))
        })
    },
    [['components/CommentBox/CommentBox-create-component']]
]);

import App from './App'
import "./ajax/api/index"
import userRuleMixin from "./common/rulesMixin";
import checkIsLoginMixin from "./common/checkIsLoginMixin"
import store from "./store/index";
import {router,RouterMount} from './router.js'  //路径换成自己的
import Vue from 'vue'
import module from "@/ajax/api/index.js"
Vue.prototype.$http = module;
Vue.use(userRuleMixin)
Vue.use(checkIsLoginMixin)
Vue.use(router)
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif


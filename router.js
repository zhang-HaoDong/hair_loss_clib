// router.js
import {
	RouterMount,
	createRouter
} from 'uni-simple-router';
import store from "./store/state"
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (to.meta.needLogin && store.userInfo === null) {
		next({
			name: "login",
			NAVTYPE: 'push'
		});
	} else {
		next()
	}
});
// 全局路由后置守卫
router.afterEach((to, from) => {

})

export {
	router,
	RouterMount
}

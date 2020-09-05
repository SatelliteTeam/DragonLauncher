import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Login',
		component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
	},
	{
		path: '/main',
		name: 'Main',
		component: () => import(/* webpackChunkName:  "main" */ '@/views/Main.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;

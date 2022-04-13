import { createRouter, createWebHistory, useRouter } from "vue-router";


const routes = [
	{ path: '/', component: () => import('../pages/Wellcome.vue') },
	{ path: '/about', component: () => import('../pages/About.vue') },
];


const router = createRouter({
    routes,
    history: createWebHistory(),
    // history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
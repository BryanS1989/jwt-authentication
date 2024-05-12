import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import RegisterUser from '@/views/RegisterUser.vue';
import LoginUser from '@/views/LoginUser.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterUser
        },
        {
            path: '/login',
            name: 'login',
            component: LoginUser
        }
    ]
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('user');

    if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
        return next('/');
    }

    return next();
});

export default router;

'use strict';

import Vue from 'vue';
import Router from 'vue-router';

// components
import Login from './components/Login';
import Signin from './components/Signin';
import Home from './components/Home';
import EditImage from './components/EditImage';
import ShareImage from './components/ShareImage';
import Profil from './components/Profil';

import store from './store';

import config from './config';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: config.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresNotLoggedIn: true,
            },
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin,
            meta: {
                requiresNotLoggedIn: true,
            },
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/edit',
            name: 'edit',
            component: EditImage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/share',
            name: 'share',
            component: ShareImage,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/profil',
            name: 'profil',
            component: Profil,
            meta: {
                requiresAuth: true,
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresNotLoggedIn)) {
        if (store.getters.loggedIn) {
            next('/');
            return;
        }
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.loggedIn) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
});

export default router;
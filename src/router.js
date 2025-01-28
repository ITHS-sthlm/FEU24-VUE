import { createRouter, createWebHistory } from 'vue-router';

import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import HelloWorld from '../src/components/HelloWorld.vue';
import Hai from './views/AboutHai.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: AboutView,
            path: '/about/:'
        },
        {
            component: HomeView,
            path: '/'
        },
        {
            component: HelloWorld,
            path: '/hej'
        },
        {
            component: Hai,
            path: '/about/Hai'
        }
    ]
});

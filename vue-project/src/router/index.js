  import { createRouter, createWebHistory } from 'vue-router';
  import FavoritesView from '@/view/FavoritesView.vue';
  import ImageSearchView from '@/view/ImageSearchView.vue';

  const routes = [
    { path: '/', component: ImageSearchView },
    { path: '/favorites', component: FavoritesView }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  export default router;

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home/Home.vue';
import NotFound from '@/components/Error/404-Error.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404-page',
    component: NotFound,
  },
] as RouteRecordRaw[];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
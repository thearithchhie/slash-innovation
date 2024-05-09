import { createRouter, createWebHistory } from 'vue-router';
import NotFount from '@/components/Error/NotFount.vue';
import {RouterView, useRoute} from 'vue-router';
// admin
import AdminLayout from "@/views/layout/admin/AdminLayout.vue";
import AdminHome from "@/views/layout/admin/Home/AdminHome.vue";
import AdminAbout from "@/views/layout/admin/About/About.vue";
import AdminUser from '@/views/layout/admin/user/AdminUser.vue';
// front 
import FrontLayout from "@/views/layout/front/FrontLayout.vue";
import Home from "@/views/layout/front/Home/Home.vue";
import PostFrontIndex from "@/views/layout/front/Post/PostFrontIndex.vue";
import PostFrontDetail from '@/views/layout/front/Post/PostFrontDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '',
      children: [
        {
          path: 'front',
          name: 'front.layout',
          component: FrontLayout,
          children: [
            {
              path: 'home',
              name: 'front.home',
              component: Home
            },
            {
              path: '',
              children: [
                {
                  path: 'post',
                  name: 'front.post',
                  component: PostFrontIndex
                },
                {
                  path: 'post/:id',
                  name: 'front.post.id',
                  component: PostFrontDetail
                }
              ]
            },
          ]
        },
        {
          path: "admin",
          name: "admin.layout",
          component: AdminLayout,
          children: [
            {
              path: "dashboard",
              name: "admin.dashboard",
              component: AdminAbout
            },
            {
              path: "users",
              children: [
                {
                  path: "",
                  name: "admin.users.index",
                  component: AdminUser
                },
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404-page',
      component: NotFount,
    }, 
  ]
});


export default router;

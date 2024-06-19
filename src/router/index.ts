import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import NotFount from '@/components/Error/NotFount.vue'
import { RouterView, useRoute } from 'vue-router'
// admin
import AdminLayout from '@/views/layout/admin/AdminLayout.vue'
import AdminAbout from '@/views/layout/admin/About/About.vue'
import AdminUser from '@/views/layout/admin/User/AdminUser.vue'
import AdminDashboard from "@/views/layout/admin/Home/AdminDashboard.vue";
import AdminProduct from '@/views/layout/admin/product/AdminProduct.vue'
// front
import FrontLayout from '@/views/layout/front/FrontLayout.vue'
import Home from '@/views/layout/front/Home/Home.vue'
import PostFrontIndex from '@/views/layout/front/Post/PostFrontIndex.vue'
import PostFrontDetail from '@/views/layout/front/Post/PostFrontDetail.vue'
import LoginFront from '@/views/layout/front/Auth/LoginFront.vue'
import RegisterFront from '@/views/layout/front/Auth/RegisterFront.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/admin',
      name: 'admin.layout',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'admin.dashboard',
          component: AdminDashboard
        },
        {
          path: 'users',
          name: 'admin.users',
          component: AdminUser
        },
        {
          path: 'products',
          name: 'admin.products',
          component: AdminProduct
        },
      ]
     },
     {
      path: '/',
      // name: 'front.layout',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'front.home',
          component: Home
        },
        {
          path: 'post',
          children: [
            {
              path: '',
              name: 'front.post',
              component: PostFrontIndex
            },
            {
              path: ':id',
              name: 'front.post.id',
              component: PostFrontDetail
            }
          ]
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404-page',
      component: NotFount
    }
  ]
});

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    localStorage.setItem("userToken", "hello");
    if (!localStorage.getItem("userToken")) {
      // If not authenticated, redirect to the login page
      next({ path: 'login' });
    } else {
      // If authenticated, proceed to the requested route
      next();
    }
  } else {
    // If the route does not require authentication, proceed
    next();
  }
});

export default router;

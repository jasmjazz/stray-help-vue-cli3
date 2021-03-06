import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: () => import('./views/Front.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('./views/front/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('./views/front/About.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('./views/front/Products.vue'),
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        component: () => import('./views/front/Detail.vue'),
      },
      {
        path: 'checkcart',
        name: 'CheckCart',
        component: () => import('./views/front/CheckCart.vue'),
      },
      {
        path: 'userinfo',
        name: 'UserInfo',
        component: () => import('./views/front/UserInfo.vue'),
      },
      {
        path: 'ordercheck/:orderId',
        name: 'OrderCheck',
        component: () => import('./views/front/OrderCheck.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('./views/back/Dashboard.vue'),
    children: [ // 巢狀路徑
      {
        path: 'feed',
        name: 'Feed',
        component: () => import('./views/back/Feed.vue'),
        meta: { requiresAuth: true }, // 需經過驗證
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('./views/back/Orders.vue'),
        meta: { requiresAuth: true }, // 需經過驗證
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Shop     from '../views/ShopView.vue';
import CartView from '../views/CartView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',      component: Shop },
    { path: '/cart',  component: CartView },
  ]
});

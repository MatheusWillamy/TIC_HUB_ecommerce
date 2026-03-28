import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Catalogo from '../pages/Catalogo.vue';
import Checkout from '../pages/Checkout.vue';
import Produto from '../pages/Produto.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalogo', name: 'Catalogo', component: Catalogo },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/produto/:id', name: 'Produto', component: Produto, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
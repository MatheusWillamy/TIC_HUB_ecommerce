import Vue from 'vue';
import VueRouter from 'vue-router';

// Importando suas páginas
import Home from '../pages/Home.vue';
import Catalogo from '../pages/Catalogo.vue';
import Produto from '../pages/Produto.vue';
import Checkout from '../pages/Checkout.vue';

Vue.use(VueRouter);

const routes =[
  { 
    path: '/', 
    name: 'home', 
    component: Home 
  },
  { 
    path: '/catalogo', 
    name: 'Catalogo', 
    component: Catalogo
  },
  { 
    path: '/produto/:id', 
    name: 'ProdutoDetalhes', 
    component: Produto
  },
  { 
    path: '/checkout', 
    name: 'Checkout', 
    component: Checkout 
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
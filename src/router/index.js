//import Vue from "vue";
import { createRouter,createWebHistory} from "vue-router";

// Importa los componentes que desees utilizar como rutas
import CategoryListView from '../views/CategoryList.vue';
import ProductListView from '../views/ProductList.vue';
import ShoppingCartView from '../views/ShoppingCart.vue';

//Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ProductListView,
    name: 'product',
  },
  {
    path: '/category',
    component: CategoryListView,
    name: 'category',
    props: true
  },
  {
    path: '/cart',
    component: ShoppingCartView,
    name: 'cart',
    props: true
  },
];

const router = new createRouter({
    history: createWebHistory('/'),
  routes,
  mode: 'history', // Opcional, para usar rutas limpias sin el # en la URL
});

export default router;
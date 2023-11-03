import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

//import store from "./store";
import Vuex from 'vuex';
import axios from "axios";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/nova-vue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

axios.defaults.baseURL = 'https://fakestoreapi.com/';
app.config.globalProperties.$baseUrl = 'https://fakestoreapi.com/';
app.config.globalProperties.$baseApiUrl = 'https://fakestoreapi.com/';

app.config.productionTip = false;

app.use(PrimeVue, { ripple: true });
app.use(router)
.use(Vuex)
.mount('#app');
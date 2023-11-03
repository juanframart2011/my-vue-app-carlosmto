import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

import store from "./store";
import Vuex from 'vuex';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from "axios";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/nova-vue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

axios.defaults.baseURL = process.env.VUE_APP_API_SERVER;
app.config.globalProperties.$baseUrl = process.env.VUE_APP_BASE_SERVER;
app.config.globalProperties.$baseApiUrl = process.env.VUE_APP_API_SERVER;

app.config.productionTip = process.env.VUE_APP_PRODUCTION;

app.use(PrimeVue, { ripple: true });
app.use(router).use(store)
.use(Vuex)
.mount('#app');
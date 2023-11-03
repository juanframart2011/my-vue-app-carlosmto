import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/nova-vue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(router).mount("#app");
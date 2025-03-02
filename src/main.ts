import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/styles.css';
import { router } from './router';
import { checkAuth } from './utils/firebase';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');

checkAuth();

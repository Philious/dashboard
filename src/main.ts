import { createApp } from 'vue'
import '@/styles/style.css';
import '@/styles/_variables.scss';
import App from './App.vue'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
import { createApp } from 'vue'
import '@/styles/style.css';
import '@/styles/_variables.scss';
import App from './App.vue'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker registered!"))
    .catch((err) => console.error("Service Worker registration failed:", err));
}

app.use(pinia);
app.mount('#app');

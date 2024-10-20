import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers/index.js';
import store from './stores/index.js';
const app = createApp(App);
app.use(routers);
app.use(store);
app.mount('#app');

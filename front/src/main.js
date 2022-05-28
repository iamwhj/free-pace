import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import '@/plugin/rem.js'
import '@/style/index.scss'

createApp(App).use(router).mount('#app');

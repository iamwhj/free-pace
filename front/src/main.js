import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/plugin/rem.js';
import '@/style/index.scss';

const app = createApp(App).use(router).use(ElementPlus).mount('#app');

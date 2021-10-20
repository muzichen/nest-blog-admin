import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/index'
import './index.css';

const app = createApp(App)

app.use(ElementPlus).use(router).mount('#app')

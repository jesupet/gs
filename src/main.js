import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
createApp(App).use(store).use(router).use(AOS).mount('#app')

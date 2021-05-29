import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/css/main.css'
import { saveAs } from 'file-saver'

createApp(App).use(router).mount('#app')
App.use(saveAs);
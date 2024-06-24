import { createApp } from 'vue'
import App from './App.vue'
import Zmelement from 'zm-element'


const app = createApp(App)
app
.use(Zmelement)
.mount('#app')

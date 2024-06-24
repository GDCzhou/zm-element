import { createApp } from 'vue'
import App from './App.vue'
import Zmelement from 'zm-element'
import 'zm-element/dist/index.css'

const app = createApp(App)
app
.use(Zmelement)
.mount('#app')

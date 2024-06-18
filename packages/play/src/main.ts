import { createApp } from 'vue'
import App from './App.vue'
import ZButton from 'zm-element'


const app = createApp(App)
app
.use(ZButton)
.mount('#app')

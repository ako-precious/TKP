import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { installRevealDirective } from './animations/motion'

const app = createApp(App)
app.use(createPinia())
app.use(router)
installRevealDirective(app)

app.mount('#app')

// client.js
import { createApp } from './app.js'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import createRouter from './router/index.js'

const app = createApp()

const router = createRouter(createWebHistory())
const pinia = createPinia()

app.use(router)

router.isReady().then(() => {
    app.use(pinia).mount('#app')
})

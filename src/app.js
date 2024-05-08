// app.js (在服务器和客户端之间共享)
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
    const app = createSSRApp(App)
    return app
}
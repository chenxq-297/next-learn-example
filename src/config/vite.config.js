import { defineConfig } from 'vite';

export default defineConfig({
    server: false, // 禁用开发服务器
    // 基本的打包配置
    resolve: {
        alias: {
            '@': '/src', // 入口别名
        },
    },
    build: {
        outDir: 'dist', // 出口目录
    },
    // 设置入口文件
    optimizeDeps: {
        entryPoints: ['./src/server/koa-server.js']
    }
});
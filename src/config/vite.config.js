import { defineConfig } from 'vite';

export default defineConfig({
    // 基本的打包配置
    resolve: {
        alias: {
            '@': '/src', // 入口别名
        },
    },
    build: {
        outDir: 'dist', // 出口目录
    },
});
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace';

// const path = require('path');

export default {
    // treeshake: true, //默认true
    input: 'src/server/koa-server.js',
    output: {
    // input: '/src/server/koa-server.js',
        // input: 'src/main.js',
        dir: 'dist', // 指定输出目录
        // file: 'dist/bundle.js',
        // inlineDynamicImports: true, // Inline dynamic imports
        format: 'cjs' // 指定输出格式为 ES 模块
        // file: 'dist/bundle.js',
        // format: 'es',
        // inlineDynamicImports: true // 启用内联动态导入
    },
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.json', '.vue'], //配置省略后缀 rollup非自带功能 而是这个插件功能
            // preventAssignment: true
            // alias: {
            //     '@': path.resolve(__dirname, '../../src'), // 设置 '@' 别名指向 'src' 目录的绝对路径
            // }
        }), //可以让 Rollup 找到外部模块
        json(),  // 打包koa报错
        commonjs(), // 添加 commonjs 插件 npm第三方老包
        terser(), // 添加 terser 插件进行压缩 丑化
        vue(), //vue3插件 https://www.npmjs.com/package/@vitejs/plugin-vue
        replace({ //消除生产环境警告
            __VUE_OPTIONS_API__: JSON.stringify(true), // 启用 Options API
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // 禁用开发环境下的 Vue Devtools
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true) // 启用生产环境下的水合不匹配详情
        })
    ],
    external: ["koa"],
};
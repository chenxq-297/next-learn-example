import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace';

// const path = require('path');

export default {
    treeshake: true, //默认true
    input: 'src/hydrate.js',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.json', '.vue'], //配置省略后缀 rollup非自带功能 而是这个插件功能
            // alias: {
            //     '@': path.resolve(__dirname, '../../src'), // 设置 '@' 别名指向 'src' 目录的绝对路径
            // }
        }), //可以让 Rollup 找到外部模块
        json(),  // 打包koa报错
        commonjs(), // 添加 commonjs 插件 npm第三方老包
        terser(), // 添加 terser 插件进行压缩 丑化
        vue(), //vue3插件 https://www.npmjs.com/package/@vitejs/plugin-vue
        //打rollup包vue实例（hydrate）时 针对浏览器缺少process变量 配置插件模拟变量
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'), // 模拟生产环境
            __VUE_OPTIONS_API__: JSON.stringify(true), // 启用 Options API
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // 禁用开发环境下的 Vue Devtools
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true) // 启用生产环境下的水合不匹配详情
        })
    ],
};
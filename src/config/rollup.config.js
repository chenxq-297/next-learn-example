import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import vue from '@vitejs/plugin-vue'

export default {
    treeshake: true, //默认true
    input: 'src/server/koa-server.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.json', '.vue'] //配置省略后缀 rollup非自带功能 而是这个插件功能
        }), //可以让 Rollup 找到外部模块
        json(),  // 打包koa报错
        commonjs(), // 添加 commonjs 插件 npm第三方老包
        terser(), // 添加 terser 插件进行压缩 丑化
        vue() //vue3插件 https://www.npmjs.com/package/@vitejs/plugin-vue
    ],
    external: ["koa"],
};
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
    treeshake: true,
    input: 'src/server/koa-server.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        json(),
        commonjs() // 添加 commonjs 插件
    ],
    // external: ["koa"],
};
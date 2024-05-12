const Koa = require('koa');

const serve = require('koa-static');
const Router = require('koa-router');

import { createApp } from '../app.js';
import { renderToString } from 'vue/server-renderer'

import createRouter from '../router/index.js';
import { createMemoryHistory } from 'vue-router'

import { createPinia } from 'pinia'

const koaInstance = new Koa();
// const koaRouter = new Router();

// koaInstance.use(serve('./'));

// // //创建koa路由
// // koaRouter.get('/', async (ctx) => {
// //     //每次客户端请求 创建新实例
// //     const vueApp = createApp()

// //     // 5.10在服务端vueApp中ues使用实例
// //     const router = createRouter(createMemoryHistory())
// //     vueApp.use(router)
// //     //喂路径 、 等待完成
// //     console.log(ctx.url, 'ctx.urlctx.urlctx.url');
// //     await router.push('/')
// //     await router.isReady()

// //     // pinia服务端和客户端会通过hyrate同步数据 : pinia => 转化 => window => hyrate => window => 转化 => pinia
// //     const pinia = createPinia()
// //     vueApp.use(pinia)

// //     // Render the app
// //     const vueContent = await renderToString(vueApp)
// //     // Handle the request
// //     ctx.body = `<!DOCTYPE html>
// //         <html>
// //         <head>
// //             <title>HTML5 Code</title>
// //         </head>
// //         <body>
// //         <div id="app">${vueContent}</div>
// //         <div>需要手动导入（服务器设置静态资源）</div>
// //         <script src="./hydrateClient.js"></script>
// //         </body>
// //         </html>
// //     `;
// // })

// //注册koa路由Middleware
// // koaInstance.use(koaRouter.routes());

// // Middleware
// koaInstance.use(async (ctx, next) => {
//     //每次客户端请求 创建新实例
//     const vueApp = createApp()

//     // 5.10在服务端vueApp中ues使用实例
//     const router = createRouter(createMemoryHistory())
//     vueApp.use(router)
//     //喂路径 、 等待完成
//     console.log(ctx.url, 'ctx.urlctx.urlctx.url');
//     await router.push(ctx.url || '/')
//     await router.isReady()

//     // pinia服务端和客户端会通过hyrate同步数据 : pinia => 转化 => window => hyrate => window => 转化 => pinia
//     const pinia = createPinia()
//     vueApp.use(pinia)

//     // Render the app
//     const vueContent = await renderToString(vueApp)
//     // Handle the request
//     ctx.body = `<!DOCTYPE html>
//         <html>
//         <head>
//             <title>HTML5 Code</title>
//         </head>
//         <body>
//         <div id="app">${vueContent}</div>
//         <div>需要手动导入（服务器设置静态资源）</div>
//         <script src="./hydrateClient.js"></script>
//         </body>
//         </html>
//     `;

//     // Pass the control to the next middleware
//     await next();
// });

// Start the server
koaInstance.listen(3000, () => {
    console.log('Server is running on port 3000');
});

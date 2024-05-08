const Koa = require('koa');

const serve = require('koa-static');

import { createApp } from '../app.js';
import { renderToString } from 'vue/server-renderer'

const koaInstance = new Koa();


koaInstance.use(serve('./'));

// Middleware
koaInstance.use(async (ctx, next) => {
    //每次客户端请求 创建新实例
    const vueApp = createApp()
    // Render the app
    const vueContent = await renderToString(vueApp)
    // Handle the request
    ctx.body = `<!DOCTYPE html>
        <html>
        <head>
            <title>HTML5 Code</title>
        </head>
        <body>
        <div id="app">${vueContent}</div>
        <div>需要手动导入（服务器设置静态资源）</div>
        <script src="./hydrateClient.js"></script>
        </body>
        </html>
    `;

    // Pass the control to the next middleware
    await next();
});

// Start the server
koaInstance.listen(3000, () => {
    console.log('Server is running on port 3000');
});

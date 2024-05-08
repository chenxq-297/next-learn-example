const Koa = require('koa');
const koaInstance = new Koa();

import { createApp } from '../app.js';
import { renderToString } from 'vue/server-renderer'


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

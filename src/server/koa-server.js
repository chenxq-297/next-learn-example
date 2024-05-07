const Koa = require('koa');
const app = new Koa();

// Middleware
app.use(async (ctx, next) => {
    // Handle the request
    ctx.body = 'Hello World';

    // Pass the control to the next middleware
    await next();
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

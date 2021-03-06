const Koa = require('koa');
const route = require('koa-route');
const middleware = require('./middleware');
const user = require('./routes/user-route');

const app = new Koa();
app.keys = ['my-secret-key'];
app.use(middleware());

//routes
app.use(route.post('/user/registration', user.userRegistration));
app.use(route.post('/user/login', user.userLogin));

//error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

module.exports = app;

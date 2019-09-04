const token = require('./token');

async function ensureAuth(ctx, next) {
  console.log('ctx.request: ', ctx.request);
  next();
}

module.exports = ensureAuth;

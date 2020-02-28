const Koa = require('koa');

const app = new Koa();
const PORT = 9000;

app.use(async (ctx) => {
  ctx.body = 'Hello, world! This is now edited.';
});

console.log(`App listening on port ${PORT}`);

app.listen(PORT);


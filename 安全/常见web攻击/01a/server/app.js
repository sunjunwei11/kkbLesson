const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    const name = ctx.query.name || '';
    ctx.body = 
    `<div>
        Hello World ${name}
    </div>`;
});

app.listen(3000);
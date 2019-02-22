const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router  = new Router();
router
    .get('/',(ctx,next)=>{   //参数是上下文
        ctx.body = "hello world";
    })
    .get('/todo',(ctx,next)=>{
        ctx.body = 'todo  page';
    });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(async(ctx) =>{

});

app.listen(3000,()=>{
    console.log('app starting ...')
})
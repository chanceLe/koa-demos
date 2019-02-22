const Koa = require('koa');

const Router = require('koa-router');

const app = new Koa();



let home =  new Router();
let page = new Router();
home
 .get('/',(ctx,next)=>{
     ctx.body = "/home page"
 })
 .get('/jspang',(ctx,next)=>{
     ctx.body = 'home/jspang page'
 })
 .get('/todo',(ctx,next)=>{
     ctx.body = "home/todo page"
 });

 page
    .get("/chance",(ctx,next)=>{
        ctx.body = "page/chance page"
    })
    .get("/list",(ctx,next)=>{
        ctx.body = "page/list page"
    });


    let router = new Router();  //父级路由
    router
        .use('/home',home.routes(),home.allowedMethods())
        .use('/page',page.routes(),home.allowedMethods())

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("app starting ...")
})
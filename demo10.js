const Koa = require('koa');

const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url == "/index"){
        ctx.cookies.set('myname','chancelee',{domain:"127.0.0.1",path:"/index",maxAge:1000*10,expires: new Date("2019-02-22"),httpOnly:false,overwrite:false})
        ctx.body = "cookie is ok"
    }else{
        ctx.body = "hello  world"
       let myname =  ctx.cookies.get("myname");
       myname? ctx.body = myname : "cookie is null"
    }
});

app.listen(3000,()=>{
    console.log("app starting ....")
})
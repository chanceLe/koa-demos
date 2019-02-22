const Koa = require('koa');

const views = require('koa-views');
const path = require('path');  //node  内置模块

const app = new Koa();

app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}))

app.use(async(ctx)=>{
  let title = "chanceleeee";
  await ctx.render("index",{title:title})
})

app.listen(3000,()=>{
    console.log("app starting ...")
})
const Koa = require('koa');

const app = new Koa();
app.use(async(ctx)=>{
    if(ctx.url === '/' && ctx.method === 'GET'){
        //显示表单页面
        let html = `
            <h1> KOA2 request post</h1>
            <form method='post' action='/'>
                <p>username:  <input name="username"/></p>
                <p>age:  <input name="age"/></p>
                <p>website:  <input name="website"/></p>
                <input type="submit" />
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === '/' && ctx.method === 'POST'){
       let postData = await parsePostData(ctx);
       let result = parseQueryStr(postData)
        ctx.body =  result;
    }else{
        ctx.body = '<h1>404!</h1>'
    }
});

function parsePostData(ctx){
    return  new Promise((resolve,reject)=>{
        try {
            let postdata = '';
            ctx.req.addListener('data',(data)=>{
                postdata += data;
            });
            ctx.req.on("end",function(){
                resolve(postdata);
            })
        } catch (error) {
            reject(error);
        }
    });
}

function parseQueryStr(queryStr){
    let queryData = {};
    let queryList = queryStr.split('&');
    console.log(queryList.entries())
    for(let [index,queryStr] of queryList.entries()){
        let itemArr = queryStr.split("=");
        queryData[itemArr[0]] = decodeURIComponent(itemArr[1]); //转码
    }
    return queryData;
}

app.listen(3000,()=>{
    console.log("app starting ...")
});
const express = require("express");
const app =express();
//引入框架
const  cookieparser = require("cookie-parser");
app.use(cookieparser());
//引入cookie解析
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));//这个是和get又关系的

//引入body解析
const future=require("../util/dealproblem")
//引入业务模块
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","*");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
    //新增一个拦截器，用来打印用户请求信息
    next();
});
//设置跨域

function requestInterceptor(request){
    //1.判断本次请求类型
    let type=request.method;
    console.log(`请求类型:${type}`);
    //2.根据类型获取请求参数
    let params;
    if (type=="POST"){
        params=request.body;
    } else if(type=="GET"){
        params=request.query;
    }
    //3.请求头。一般调试时才会用。
    let header = request.header;
    console.log(header);
    //4.cookie
    let cookie = request.cookies;
    console.log(cookie);
}

function post(route,callback){
    app.post(route,function (req,res) {
        requestInterceptor(req);
        if(callback){
            callback(req,res);
        }else {
            return future.successRsp("success")
        }
    })
}
function get(route,callback){
    app.get(route,function (req,res) {
        requestInterceptor(req);
        if(callback){
            callback(req,res);
        }else {
            return future.successRsp("success")
        }
    })
}

app.listen(3000,()=>{
    console.log("启动了。。。")
})

module.exports={post,get}
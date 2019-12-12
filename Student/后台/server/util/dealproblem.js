let deal={};
let successRsp =(code,data)=>{
    return commonRsp("ok",data)
}

let errorRsp =(code,data)=>{
    return commonRsp("error",data)
}

let commonRsp =(code,data)=>{
    if(!code){
        throw  new Error("code,can not be null")
}
console.log(`响应对象:${code}--${data}`);
return {code:code,data:data};

}

//参数数组化
let arrayparam=function(){
    let array=[];
    for(let i=0,l=arguments.length;i<l;i++){
        array.push(arguments[i]);
    }
    return array;
}
module.exports={
    successRsp,
    errorRsp,
    commonRsp,
    arrayparam
}

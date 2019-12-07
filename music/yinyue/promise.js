
    
 function func(url){
    let mypromise=new Promise(function(resolve,reject){
        fetch(url,{
        method:"GET",
        mode:"cors"
        })
        .then(response=>{
        if(response.status==200)
        {
           return response.json()
        }
        })
        .then(data=>resolve(data))
        })

    return mypromise;
}
export default func;

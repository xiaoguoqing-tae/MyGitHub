function start(){
    function $(e){
        return document.querySelector(e)
    }
    let num=0
    let n=0
    let time
    $("#au1").loop = false;
    $("#au1").addEventListener('ended', function () {  
        $(".bofang").style.display="block";
        clearInterval(time)
    }, false);
    $(".upcontent").onclick=function()
    {
        num++
        console.log(num)
        if(num%2==1)
        {
            $(".bofang").style.display="none";
            time=setInterval(move,50)
           $("#au1").play()
            function move()
            {
                n+=1
                $(".smallimg").style.transform="rotate("+n+"deg)"
            }
            
        }
        if(num%2==0)
        {
            $(".bofang").style.display="block";
            clearInterval(time)
            $("#au1").pause()
        }
        
    }

}

function la(){
function $(e){
    return document.querySelector(e)
}
let flag=0;
$(".intro").onclick=function()
{
    flag+=1;
    if(flag%2==1)
    {
        $(".down").style.transform="scaleY(-1)";
        $("#jj").style.height=parseInt(window.getComputedStyle($("#jj")).height) + 80 +"px"
        $(".down").style.marginTop=parseInt(window.getComputedStyle($(".down")).marginTop) + 200 +"px"
    }
    else
    {
        $(".down").style.transform="scaleY(1)";
        $("#jj").style.height=parseInt(window.getComputedStyle($("#jj")).height) - 80 +"px"
        $(".down").style.marginTop=parseInt(window.getComputedStyle($(".down")).marginTop) - 200 +"px"
    }
}
}

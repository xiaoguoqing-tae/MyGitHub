const dealproblem=require("../util/dealproblem");
const newid=require("../util/id")
const mysqlOpt=require("../mysql/mysqlOpt")

function login(req,res){
    let reqQuery=req.body;
    let name=reqQuery.username;
    let pwd=reqQuery.password;
    console.log(req.body)
    console.log(`用户名【${name}】;密码【${pwd}】`)
    res.cookie("newcookie",name)
    console.log(req.cookies["newcookie"])
    let sql='select pwd from user where name=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(name),(result)=>{
        if (result.length == 0) {
             res.json(dealproblem.errorRsp("用户名或密码不正确"));
        } else {
            if (result[0].pwd == pwd) {
                 res.json(dealproblem.successRsp("登录成功"));
            } else {
                 res.json(dealproblem.errorRsp("用户名或密码不正确"));
            }
        }
    })
}
function register(req,res){
    let reqQuery=req.body;
    let name=reqQuery.username;
    let pwd=reqQuery.password;
    console.log(`用户名【${name}】;密码【${pwd}】`)
    let sql='insert into user(id,name,pwd) values(?,?,?)';
    let sql2='select name from user'
    let id=newid.GenNonDuplicateID();
    if(name.length==0||pwd.length==0) {
        res.json(dealproblem.errorRsp("用户名或密码不能为空"))
        return;
    }
    mysqlOpt.exec(sql2,dealproblem.arrayparam(),(result)=>{
        for(let i=0;l=result.length,i<l;i++){
            if(result[i].name===name){
                res.json({code:-1})
                return
            }else{
                mysqlOpt.exec(sql,dealproblem.arrayparam(id,name,pwd),(result)=>{
                    res.json(dealproblem.successRsp("注册成功"));
                })
            }
        }

    })

}
function notice(req,res){
    let reqQuery=req.body;
    let type=reqQuery.type
    let sql='select * from notice where type=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(type),(result)=>{
        res.json(result)
    })
}
function writenotice(req,res) {
    let reqQuery=req.body;
    let title=reqQuery.title;
    let content= reqQuery.content;
    let date=reqQuery.date;
    let type=reqQuery.type;
    let states="未读";
    console.log(req.body);
    let sql="insert into notice(title,content,date,type,states) values(?,?,?,?,?)"
    mysqlOpt.exec(sql,dealproblem.arrayparam(title,content,date,type,states),(result)=>{
        res.json(result);
    })
}
function changestates(req,res) {
    let reqQuery=req.body;
    let did=reqQuery.did;
    let sql="update notice set states='已读' where id=?"
    mysqlOpt.exec(sql,dealproblem.arrayparam(did),(result)=>{
        res.json(result);
    })

}
function detail(req,res){
    let reqQuery=req.body;
    let did = reqQuery.did
    let sql='select * from notice where id=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(did),(result)=>{
        res.json(result)
    })
}

function work(req,res){
    let sql='select * from work';
    mysqlOpt.exec(sql,dealproblem.arrayparam(),(result)=>{
        res.json(result)
    })
}
function waitwork(req,res) {
    let sql='select * from waitwork';
    mysqlOpt.exec(sql,dealproblem.arrayparam(),(result)=>{
        res.json(result)
    })
}
function detailwork(req,res) {
    let reqQuery=req.body;
    let wid = reqQuery.wid;
    console.log(req.body)
    let sql='select * from work where id=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(wid),(result)=>{
        res.json(result)
    })
}function gosentwork(req,res) {
    let reqQuery=req.body;
    let wid = reqQuery.wid;
    console.log(req.body)
    let sql='select * from waitwork where id=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(wid),(result)=>{
        res.json(result)
    })
}

function delwaitwork(req,res) {
    let reqQuery=req.body;
    let wid = reqQuery.wid;
    let sql='delete from waitwork where id=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(wid),(result)=>{
        res.json(result);
    })
}
function delsentwork(req,res) {
    let reqQuery=req.body;
    let wid=reqQuery.wid;
    let sql='delete from work where id=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(wid),(result)=>{
        res.json(result);
    })
}
 function sentwork(req,res){
     let reqQuery=req.body;
     let bj=reqQuery.bj;
     let title=reqQuery.title;
     let course=reqQuery.course;
     let message=reqQuery.message;
     let remarks=reqQuery.remarks;
     let time=reqQuery.time;
     console.log(req.body)
     let sql='insert into work(bj,title,course,message,remarks,time) values(?,?,?,?,?,?)';
     mysqlOpt.exec(sql,dealproblem.arrayparam(bj,title,course,message,remarks,time),(result)=>{
         res.json(result)
     })
 }
function sentwaitwork(req,res) {
    let reqQuery = req.body;
    let bj = reqQuery.bj;
    let title = reqQuery.title;
    let course = reqQuery.course;
    let message = reqQuery.message;
    let remarks = reqQuery.remarks;
    let time = reqQuery.time;
    console.log(req.body)
    let sql = 'insert into waitwork(bj,title,course,message,remarks,time) values(?,?,?,?,?,?)';
    mysqlOpt.exec(sql, dealproblem.arrayparam(bj, title, course, message, remarks, time), (result) => {
        res.json(result)
    })
}
    function sentnotify(req,res) {
        let reqQuery=req.body;
        let bj=reqQuery.bj;
        let title=reqQuery.title;
        let content=reqQuery.content;
        let date=reqQuery.date;
        console.log(req.body)
        let sql='insert into notify(bj,title,content,date) values(?,?,?,?)';
        mysqlOpt.exec(sql,dealproblem.arrayparam(bj,title,content,date),(result)=>{
            res.json(result);
        })
    }
    function waitnotify(req,res) {
        let reqQuery=req.body;
        let bj=reqQuery.bj;
        let title=reqQuery.title;
        let content=reqQuery.content;
        let date=reqQuery.date;
        console.log(req.body)
        let sql='insert into waitnotify(bj,title,content,date) values(?,?,?,?)';
        mysqlOpt.exec(sql,dealproblem.arrayparam(bj,title,content,date),(result)=>{
            res.json(result);
        })
    }
    function getsentednotify(req,res){
        let reqQuery=req.query;
        let sql='select * from notify'
        mysqlOpt.exec(sql,dealproblem.arrayparam(),(result)=>{
            res.json(result)
        })
    }
    function getwaitnotify(req,res){
        let reqQuery=req.query;
        let sql='select * from waitnotify'
        mysqlOpt.exec(sql,dealproblem.arrayparam(),(result)=>{
            res.json(result)
        })
    }
    function notifyDetail(req,res){
        let reqQuery=req.body;
        let nid=reqQuery.nid;
        let sql='select * from notify where id=?'
        mysqlOpt.exec(sql,dealproblem.arrayparam(nid),(result)=>{
            res.json(result)
        })
    }
    function waitnotifyDetail(req,res){
        let reqQuery=req.body;
        let nid=reqQuery.nid;
        let sql='select * from waitnotify where id=?'
        mysqlOpt.exec(sql,dealproblem.arrayparam(nid),(result)=>{
            res.json(result)
        })
    }
    function delwaitnotify(req,res){
        let reqQuery=req.body;
        let nid=reqQuery.nid;
        let sql='delete from waitnotify where id=?'
        mysqlOpt.exec(sql,dealproblem.arrayparam(nid),(result)=>{
            res.json(result)
        })
    }
function getleave(req,res){
    let reqQuery=req.body;
    let states=reqQuery.states;
    let sql='select * from leavetable where states=?';
    mysqlOpt.exec(sql,dealproblem.arrayparam(states),(result)=>{
        res.json(result)
    })
}
function sentleave(req,res){
    let reqQuery=req.body;
    let name=reqQuery.name;
    let content=reqQuery.content;
    let time=reqQuery.time;
    let date=reqQuery.date;
    let states=reqQuery.states;
    let result=""
    let sql='insert into leavetable(name,content,time,date,states,result) values(?,?,?,?,?,?)';
    mysqlOpt.exec(sql,dealproblem.arrayparam(name,content,date,time,states,result),(result)=>{
        res.json(result);
    })
}
function yesleave(req,res){
    let reqQuery=req.body;
    let cid=reqQuery.cid;
    let result=reqQuery.result;
    console.log(req.body)
    let sql="update leavetable set result='同意',states='已处理' where id=?";
    mysqlOpt.exec(sql,dealproblem.arrayparam(cid,result),(result)=>{
        res.json(result)
    })
}
function noleave(req,res){
    let reqQuery=req.body;
    let cid=reqQuery.cid;
    let result=reqQuery.result;
    let states;
    console.log(req.body)
    let sql="update leavetable set result='否决',states='已处理' where id=?";
    mysqlOpt.exec(sql,dealproblem.arrayparam(cid,result),(result)=>{
        res.json(result)
    })
}
function recharge(req,res){
    let reqQuery=req.body;
    let money = reqQuery.money;
    let name = reqQuery.name;
    let sql="update user set money=? where name=?";
    mysqlOpt.exec(sql,dealproblem.arrayparam(money,name),(result)=>{
        res.json(result)
    })
}
function pay(req,res){
    let reqQuery=req.body;
    let name=reqQuery.name;
    let sql="select money from user where name=?";
    mysqlOpt.exec(sql,dealproblem.arrayparam(name),(result)=>{
        res.json(result)
    })
}


exports.login=login;
exports.register=register;
exports.notice=notice;
exports.work=work;
exports.sentwork=sentwork;
exports.detail=detail;
exports.detailwork=detailwork;
exports.waitwork=waitwork;
exports.gosentwork=gosentwork;
exports.delwaitwork=delwaitwork;
exports.sentwaitwork=sentwaitwork;
exports.delsentwork=delsentwork;
exports.writenotice=writenotice;
exports.changestates=changestates
exports.sentnotify=sentnotify;
exports.waitnotify=waitnotify;
exports.getsentednotify=getsentednotify;
exports.getwaitnotify=getwaitnotify;
exports.notifyDetail=notifyDetail;
exports.waitnotifyDetail=waitnotifyDetail;
exports.delwaitnotify=delwaitnotify;
exports.getleave=getleave;
exports.sentleave=sentleave;
exports.yesleave=yesleave;
exports.noleave=noleave;
exports.recharge=recharge;
exports.pay=pay;

const mysql=require("mysql");
const connection=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root",
    database:"school"
})
connection.connect();
//数据库连接是异步的
//所有跟数据可交互都使用api-query==》crud
//query(sql,params,callback(err,result))
//？代表占位符。
//？出现顺序跟params里头参数顺序一致。
function exec (sql, params, callback) {
    connection.query(sql, params, (err, result)=>{
        if (err) {
            console.log(err.message);
            return;
        }
        // console.log(result);
        if (callback) {
            return callback(result);
        }
    })
}

module.exports = {exec};


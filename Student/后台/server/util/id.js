function GenNonDuplicateID(randomLength){
    var num="fn"+Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
    return num
}
//GenNonDuplicateID()将生成 rfmipbs8ag0kgkcogc 类似的ID
console.log(GenNonDuplicateID(4))
module.exports={GenNonDuplicateID}
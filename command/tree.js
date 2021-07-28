let fs=require("fs");
function fn(src){
let childnames =fs.readdirSync(src);
for(let i=0;i<childnames.length;i++){
    console.log("|-",childnames[i]);
}

}
    
module.exports={
    treefxn:fn
}
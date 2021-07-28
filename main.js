let fs=require("fs");
let path=require("path");

let helpObj=require("./command/help");
let treeObj=require("./command/tree");
let organizeObj=require("./command/organize");
let inputArr=process.argv.slice(2);
let command=inputArr[0];

switch(command){
    case "tree":
        treeObj.treefxn(inputArr[1]);
    break;
    case "organize":
        organizeObj.organizefxn(inputArr[1])
    break;
    case "help":
        helpObj.helpfxn();
    break;
    default:
        console.log("Please enter correct command");

}

// function treefn(dirPath){

// }
// function organizefn(dirPath){
//     let destPath;
//     if(dirPath==undefined){
//         console.log("kindly enter the path");
//         return;
//     }
    
//     else{
//         let doesExist=fs.existsSync(dirPath);
//         if(doesExist){
//             destPath=path.join(dirPath,"organized_files");
//             if(fs.existsSync(destPath)){
//             fs.mkdirSync(destPath);
//             }


//         }
//         else{
//             console.log("kindly enter the path");
//         return;
//         }
//     }
//     organizeHelper(dirPath,destPath);

// }
// function organizeHelper(src,dest){
// let childNames=fs.readdirSync(src);
// for(let i=0;i<childNames.length;i++){
//   let childAddress = path.join(src,childNames[i])
//   let isFile=fs.lstatSync(childAddress).isFile();
//   if(isFile){
//       let category=getcategory(childNames[i]);
//       console.log(childNames[i]+"belongs to -->"+category);
//       sendFiles(childAddress,dest,category);
      
//   }
// }
// }

// function getcategory(name){
//     let ext=path.extname();
//     ext=ext.slice(1);
//     for(let type in types){
//         let cTypeArray=types[type];
//         for(let i=0;i<cTypeArray.length;i++){
//             if(ext==cTypeArray[i]){
//                 return type;
//             }
//         }
//     }
//     return others;
// }
// function sendFiles(srcPath,destPath,category){
//     let categoryPath=path.join(destPath,category);
//     if(fs.existsSync(categoryPath)==false){
//         fs.mkdirSync(categoryPath);
//     }
//     let fileName=path.basename(srcPath);
//     let destFilePath=path.join(categoryPath,fileName);
//     fs.mkdirSync(destFilePath);
//     console.log(fileName,"copied to ",category);

// }


//OS module
const os= require('os');
const userInfo= os.userInfo();
console.log(userInfo);
console.log(os.uptime());

//Path module
const path= require('path');
const sep= path.sep;
console.log(sep);
const filepath= path.join(__dirname,'subFolder');
console.log(filepath);

//fs synchronous
const fs= require('fs');
const file1=fs.readFileSync(`${__dirname}/FS/text1.txt`,'utf-8');
console.log(file1);
fs.writeFileSync(`${__dirname}/output`,`the content ${file1} has been written to output \n And we are good to go`,{flag:'a'});

//fs asynchronous
//result="Operation completed Succesfully!!!!"
const {readFile,writeFile}= require('fs');
console.log('starting the asynchronous fs')
const file2=readFile(`${__dirname}/FS/text1.txt`,'utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('read the file')
    writeFile(`${__dirname}/ayncronousOutput`,`this is the output ${file1}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
})
console.log('moving to next task');

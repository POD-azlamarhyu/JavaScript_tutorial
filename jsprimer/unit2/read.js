const fs = require("fs");
const prog = require("commander");
const marked = require("marked");
fs.readFile("readme.md",(err,file)=>{
    if(err){
        console.error(err);
    }else{
        console.log(file);
    }

    const html=marked(file);
    console.log(html);
})
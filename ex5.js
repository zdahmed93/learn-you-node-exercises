const fs = require('fs');
const path = require('path');
const extension ='.'+process.argv[3];

fs.readdir(process.argv[2], (error, list)=>{
    const newArray = (list.filter(item=>{
        return path.extname(item)===extension;
    }))
    newArray.forEach(item => console.log(item));
    if (error){
        console.log('errrrrrooooooor !!');
    }
});
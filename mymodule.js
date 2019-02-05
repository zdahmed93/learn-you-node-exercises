
const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback){
    const extension ='.'+ext;
    fs.readdir(dir, (error, list)=>{
        if (error){
            return callback(error)}
        list = list.filter(item => {
            return path.extname(item) === extension;
        })
        callback(null, list)    
    }
    )  
}


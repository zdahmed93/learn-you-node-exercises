const fs = require('fs');
fs.readFile(process.argv[2], (error, data)=>{
    const buffer = data;
    const text = buffer.toString();
    const array = text.split('\n');
    console.log(array.length-1);
    if (error){
        console.log('errrrrrooooooor !!');
    }
});
const mymodule=require('./mymodule');
callback = 'test';
mymodule(process.argv[2],process.argv[3], (err, list)=>{
  if (err){
    return console.log("Oops error: ", err)
  }
  list.forEach(file => console.log(file))
});
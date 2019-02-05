const http=require('http');
const url = process.argv[2];

http.get(url, (request)=>{
    request.setEncoding("utf8");
    request.on("data", (data)=>{
        console.log(data)
    })
})
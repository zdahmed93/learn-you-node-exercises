const http = require('http');

const url = process.argv[2];

http.get(url, (request) => {
  let result = "";
  request.setEncoding("utf8");
  request.on("data", (data) => {
    result += data;
  });
  request.on("end", () => {
    console.log(result.length);
    console.log(result);
  });
});
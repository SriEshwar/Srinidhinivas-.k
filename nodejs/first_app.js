// creating a text file through node js.........................................

// const fs = require('fs');
// fs.writeFileSync('hello.txt','hello from node js');

// creating a basic http server...........................................

// const http = require('http');
// const server = http.createServer((req,res)=>
// {
// console.log(req);
// process.exit();
// })
// server.listen(3000);

// printing the url ...................................................

// const http = require('http');

//  const server = http.createServer((req,res)=>{
//     console.log(req.url)
//  })

//  server.listen(3000);

// printing the method of request.........................................................

//  const http = require('http');

//  const server = http.createServer((req,res)=>{
//     console.log(req.method)
//  })

//  server.listen(3000);

// providing response...........................................................

//  const http = require('http');

//  const server = http.createServer((req,res)=>{
//     res.setHeader('content-type','text/html')
//     res.write('<html>')
//     res.write('<head><title> bascis of node </title></head>')
//     res.write('<body> hello this a response from node js server ! </body>')
//     res.write('</html>')
//     res.end();
//  })

//  server.listen(3000);

// providing response bassed on the url..................................................................

//   const http = require('http');
//   const server = http.createServer((req,res)=>{
//     const url = req.url;
//     if(url === '/')
//     {
//      res.setHeader('content-type','text/html')
//      res.write('<html>')
//      res.write('<head><title>enter form details </title></head>')
//      res.write('<body> <form action="/message" method ="POST"> <input type="text" name="message"></input> <input type ="submit" value="send"></form> </body>')
//      res.write('</html>')
//      return res.end();
//     }

//     res.setHeader('content-type','text/html')
//     res.write('<html>')
//      res.write('<head><title> bascis of node </title></head>')
//      res.write('<body> hello this a response from node js server ! </body>')
//      res.write('</html>')
//      res.end();

//   })

// server.listen(3000);

// providding response based on method and url..........................................
// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.setHeader("content-type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>enter form details </title></head>");
//     res.write(
//       '<body> <form action="/message" method ="POST"> <input type="text" name="message"></input> <input type ="submit" value="send"></form> </body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === '/message' && method == 'POST') {
//     fs.writeFileSync('hello.txt', 'dummy');
//     res.setHeader('Location', '/');
//     res.statusCode = 302;
//     return res.end();
//   }

//   res.setHeader("content-type", "text/html");
//   res.write("<html>");
//   res.write("<head><title> bascis of node </title></head>");
//   res.write("<body> hello this a response from node js server ! </body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(3000);

// understanding which file is ceated first..............................................................

const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>enter form details </title></head>");
    res.write(
      '<body> <form action="/message" method ="POST"><input type="message" name="message"></input> <input type ="submit" value="send"></form> </body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      const message = parsedbody.split("=");
      fs.writeFileSync("hello.txt", message[1]);
      fs.writeFileSync("hello.txt", "dummy");
     
      
    });
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title> bascis of node </title></head>");
  res.write("<body> hello this a response from node js server ! </body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);

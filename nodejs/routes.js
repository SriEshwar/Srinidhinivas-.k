const fs = require("fs");

const requestHandler = (req,res)=>{

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
    // fs.writeFileSync("hello.txt", "dummy");
   
    
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

}

// module.exports=requestHandler;
exports.handler = requestHandler;                     // exporting the function of this file 
exports.someText = 'printing some texts...'            // so that, function can be use outside the file
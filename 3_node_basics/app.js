const http = require("http"); // will always use global file named http
const fs = require("fs");
const { Console } = require("console");
// const rqListner = (req, res) => {

// }

// http.createServer(reqListner);

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();

  const url = req.url;
  method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if ("/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // on works on the event present
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // console.log(parsedBody);
      // fs.writeFileSync('message.txt', message);    // block the code until file operation done
      // fs.read.statusCode = 302;
      // res.setHeader("Location", "/");
      // return res.end();
      fs.writeFile("message.txt", message, (err) => {
        fs.read.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello form my Node.js Server</h1></body>");
  res.write("</html");
  res.end();
});

server.listen(300);

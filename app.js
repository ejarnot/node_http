console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");

// Finish setting up the server

http
  .createServer(function (req, res) {
    const { method, url } = req
    const chunks = []  
    req.on("data", function(chunk){
          chunks.push(chunk)
      })
    req.on("end", function(){
        const body = JSON.parse(Buffer.concat(chunks).toString())
    })

    if(url == "/"){
        res.statusCode = 200;
        res.write("<h1>DON'T PANIC</h1>")
    }else if(url == "/about"){
        res.statusCode = 200;
        res.write("<h1>Mia lives in Portland, OR</h1>")
    }else if(url == "/echo"){
        res.statusCode = 200;
        res.write({method, url, body})
    }
    res.end();
  })
  .listen(3000)

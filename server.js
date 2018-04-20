var express = require("express");
var url = require("url");
var http = require("http");
var app;
var dirname = "C:/Users/Timon Bestebreur/Dropbox/Code/WEB/TellMeAJoke.com";
var jokes = require("C:/Users/Timon Bestebreur/Dropbox/Code/WEB/TellMeAJoke.com/jokes.json"); //(with path)

var port = process.env.PORT || 3000;
console.log("Using port: " + port);

app = express();
http.createServer(app).listen(port);

 app.use(express.static(dirname));

app.get("/getJokes", function(req, res){
    res.json(jokes);
});

app.get("/addJokes", function(req, res){
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    var jokeText = query["joke"];
    var lang = query["lang"];
    if(lang == "Dutch"){
        jokes.NL[jokes.NL.length] = jokeText;
    }
    else{
        jokes.EN[jokes.EN.length] = jokeText;
    }
    console.log("added: " + jokeText);
    console.log(jokes.NL);
});

app.get("/goodbye", function(req, res){
    res.send("GOOODBYYYEEEE");
});
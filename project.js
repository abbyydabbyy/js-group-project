var express = require("express")
var app = express();
var router = express.Router();
var path = __dirname + '/';

app.get("/",function(req,res){
  res.sendFile(path + "project.html");
});

app.listen(80,function(){
  console.log("live at port 80");

});

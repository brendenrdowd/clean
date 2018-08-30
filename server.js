const express = require("express"),
  app = express(),
  path = require("path"),
  bP = require("body-parser"),
  port = process.env.PORT || 8005,
  session = require("express-session"),
  dotenv=require('dotenv').config();

app.use(express.static(path.join(__dirname, "client")));
app.use(bP.json());
app.use(session({secret:process.env.SECRET, saveUninitialized: true}));


require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function(){
	console.log("listening on port:" + port);
})
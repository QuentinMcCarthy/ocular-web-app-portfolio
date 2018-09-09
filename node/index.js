const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});

app.use(bodyParser.json());

app.post('/', function(req, res) {
   console.log(req.body);
});


app.set(`port`, (process.env.PORT || 4000));

app.listen(app.get(`port`), () => { console.log(`Server is running on port ${app.get(`port`)}`) });

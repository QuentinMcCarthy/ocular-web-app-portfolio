const express = require("express");
const cors = require("cors");
const path = require('path');
const Behance = require('Behance');
const bodyParser = require('body-parser');
const app = express();


var client = new Behance ({
	apiKey: config.API_KEY
});

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});

app.use(bodyParser.json());
app.use(express.static('./'));


app.set(`port`, (process.env.PORT || 4000));

app.listen(app.get(`port`), () => { console.log(`Server is running on port ${app.get(`port`)}`) });

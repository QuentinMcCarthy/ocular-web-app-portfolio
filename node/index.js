const express = require("express");
const path = require("path");
const cors = require("cors");
const config = require("./config");

const app = express();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});

app.get(`/`, function(req,res){
	res.writeHead(302, {"Location": "http://192.168.33.10:3000"});
	res.end();
});

// Routes for the node_modules
app.use(`/bootstrap`, express.static(path.join(__dirname, `node_modules/bootstrap/dist`)));
app.use(`/gcharts`, express.static(path.join(__dirname, `node_modules/google-charts/googleCharts.js`)));
app.use(`/gmaps`, express.static(path.join(__dirname, `node_modules/google-maps/lib/Google.min.js`)));
app.use(`/jquery`, express.static(path.join(__dirname, `node_modules/jquery/dist/jquery.min.js`)));

app.set(`port`, (process.env.PORT || 4000));

app.listen(app.get(`port`), () => { console.log(`Server is running on port ${app.get(`port`)}`) });

const express = require("express");
const path = require("path");
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

// Routes for the node_modules
app.use(`/bootstrap`, express.static(path.join(__dirname, `node_modules/bootstrap/dist`)));
app.use(`/gcharts`, express.static(path.join(__dirname, `node_modules/google-charts/googleCharts.js`)));
app.use(`/gmaps`, express.static(path.join(__dirname, `node_modules/google-maps/lib/Google.min.js`)));
app.use(`/jquery`, express.static(path.join(__dirname, `node_modules/jquery/dist/jquery.min.js`)));

app.set(`port`, (process.env.PORT || 4000));

app.listen(app.get(`port`), () => { console.log(`Server is running on port ${app.get(`port`)}`) }

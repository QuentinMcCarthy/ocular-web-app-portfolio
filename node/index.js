const express = require("express");
const path = require("path");
const cors = require("cors");
const request = require("request");
const Behance = require("node-behance-api");
const config = require("./config");

const app = express();

const behance = new Behance({"client_id": `${config.behanceKey}`});
Behance.initOptions();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});

app.get(`/`, function(req,res){
	res.writeHead(302, {"Location": "http://192.168.33.10:3000"});
	res.end();
});

app.get(`/behance/user/:user`, function(req,res){
	behance.get({
		api: Behance.APIS.GET_USER,
		params: {
			user: req.params.user
		}
	}, function(err, response){
		res.setHeader("Content-Type", "application/json");
		if(err){
			res.send(JSON.stringify(err));
		} else{
			res.send(JSON.stringify(response));
		}
	})
});

app.get(`/behance/user/:user/projects`, function(req,res){
	behance.get({
		api: Behance.APIS.GET_USER_PRODUCT,
		params: {
			user: req.params.user
		}
	}, function(err, response){
		res.setHeader("Content-Type", "application/json");
		if(err){
			res.send(JSON.stringify(err));
		} else{
			res.send(JSON.stringify(response));
		}
	})
});

app.get(`/behance/project/:project/comments/:page`, function(req,res){
	behance.get({
		api: Behance.APIS.GET_PRODUCT_COMMENTS,
		params: {
			project_id: req.params.project,
			page: req.params.page
		}
	}, function(err, response){
		res.setHeader("Content-Type", "application/json");
		if(err){
			res.send(JSON.stringify(err));
		} else{
			res.send(JSON.stringify(response));
		}
	});
})

// Routes for the node_modules
app.use(`/bootstrap`, express.static(path.join(__dirname, `node_modules/bootstrap/dist`)));
app.use(`/gcharts`, express.static(path.join(__dirname, `node_modules/google-charts/googleCharts.js`)));
app.use(`/gmaps`, express.static(path.join(__dirname, `node_modules/google-maps/lib/Google.min.js`)));
app.use(`/jquery`, express.static(path.join(__dirname, `node_modules/jquery/dist/jquery.min.js`)));

app.set(`port`, (process.env.PORT || 4000));

app.listen(app.get(`port`), () => { console.log(`Server is running on port ${app.get(`port`)}`) });

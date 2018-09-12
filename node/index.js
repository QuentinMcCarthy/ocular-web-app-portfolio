const express = require("express");
const path = require("path");
const cors = require("cors");
const request = require("request");
const Behance = require("node-behance-api");
// const config = require("./config");

const app = express();

// Behance module setup
// const behance = new Behance({"client_id": `${config.behanceKey}`});
// Behance.initOptions();

app.use(function(req,res,next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});

// Redirect to the React server
app.get(`/`, function(req,res){
	res.writeHead(302, {"Location": "http://192.168.33.10:3000"});
	res.end();
});

// Behance request for userdata
// app.get(`/behance/user/:user`, function(req,res){
// 	behance.get({
// 		api: Behance.APIS.GET_USER,
// 		params: {
// 			user: req.params.user
// 		}
// 	}, function(err, response){
// 		// Set the header to specify JSON content
// 		res.setHeader("Content-Type", "application/json");
// 		if(err){
// 			res.send(JSON.stringify(err));
// 		} else{
// 			res.send(JSON.stringify(response));
// 		}
// 	})
// });

// Behance request for user project data
// app.get(`/behance/user/:user/projects`, function(req,res){
// 	behance.get({
// 		api: Behance.APIS.GET_USER_PRODUCT,
// 		params: {
// 			user: req.params.user
// 		}
// 	}, function(err, response){
// 		// Set the header to specify JSON content
// 		res.setHeader("Content-Type", "application/json");
// 		if(err){
// 			res.send(JSON.stringify(err));
// 		} else{
// 			res.send(JSON.stringify(response));
// 		}
// 	})
// });

// Behance request for project comments data
// app.get(`/behance/project/:project/comments/:page`, function(req,res){
// 	behance.get({
// 		api: Behance.APIS.GET_PRODUCT_COMMENTS,
// 		params: {
// 			project_id: req.params.project,
// 			page: req.params.page
// 		}
// 	}, function(err, response){
// 		// Set the header to specify JSON content
// 		res.setHeader("Content-Type", "application/json");
// 		if(err){
// 			res.send(JSON.stringify(err));
// 		} else{
// 			res.send(JSON.stringify(response));
// 		}
// 	});
// })

// Routes for the node_modules
app.use(`/popper`, express.static(path.join(__dirname, `node_modules/popper.js/dist/popper.min.js`)));
app.use(`/bootstrap`, express.static(path.join(__dirname, `node_modules/bootstrap/dist`)));
app.use(`/gmaps`, express.static(path.join(__dirname, `node_modules/google-maps/lib/Google.min.js`)));
app.use(`/jquery`, express.static(path.join(__dirname, `node_modules/jquery/dist/jquery.min.js`)));

// Routes for data requests
app.use(`/data`, express.static(path.join(__dirname, `data`)));

app.set(`port`, (process.env.PORT || 4000));

app.listen(app.get(`port`), () => { console.log(`Server is running on port ${app.get(`port`)}`) });

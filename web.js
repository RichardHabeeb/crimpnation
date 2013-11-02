/*************************************************
 * KSURCT - Website
 * 
 * Node.js Express framework required
 *
 *************************************************/
 
 
 //------------------------------------------------ REQUIRES
var express 	= require("express");

var content		= require("./content.js");


 //------------------------------------------------ GLOBALS
var app 		= express();
var port 		= process.env.PORT || 80;


 //------------------------------------------------ CONFIG
app.use(express.logger());


 //------------------------------------------------ ROUTES
app.get('/', content.root);

//STYLESHEETS
app.get('/css/:style', content.stylesheet);

//JS
app.get('/js/:script', content.script);
app.get('/js/libs/:script', content.libscript);

//IMAGES
app.get('/imgs/:image', content.image);

//CONTENT
app.get('/content/:page', content.page);




app.listen(port, function() {
	console.log("Listening on " + port);
});
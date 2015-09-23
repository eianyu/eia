// Initialize express
var express = require('express');

var expressLayouts = require('cloud/libs/express-layouts');

// Require cloud modules
var moment = require('moment');
var _ = require('underscore');
// var md5 = require('cloud/libs/md5.js'); 
// var mailgun = require('mailgun');
// mailgun.initialize('domainName', 'apikey'); TODO: add domain name & api key

// Controllers
var homeController = require('cloud/controllers/home.js');
var aboutController = require('cloud/controllers/about.js');
var teamController = require('cloud/controllers/team.js');
// TODO
// var contactController = require('cloud/controllers/contact.js');

// Initialize app
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.set('layout', 'layout');
// app.set('layout extractScripts', true);
app.use(express.bodyParser());    // Middleware for reading request body
app.use(express.methodOverride());

app.use(expressLayouts);
app.use(app.router);

// Allow underscore to be available in all templates
app.locals._ = _;

// RESTful Routes
app.get('/', homeController.index); 
app.get('/about', aboutController.index);
app.get('/team', teamController.index);

// TODO : below
// app.get('/contact', contactController.index);
// app.post('/contact/new', contactController.create);

// Attach the Express app to Cloud Code.
app.listen();

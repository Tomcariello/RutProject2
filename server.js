/*
Here is where you set up your server file.
express middleware.
*/

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan'); //loggr
var cookieParser = require('cookie-parser'); //parse cookies
var session = require('express-session'); //session middleware



var app = express();

require('./config/passport')(passport), //passes passport for configuration



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev')); //log every request to the console

app.use(cookieParser()); //read cookies, needed for auth

app.use(bodyParser.urlencoded({
	extended: false
}));

//Passport dependencies
app.use(session({ secret: 'RutProject2'})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persisten login sessions
app.use(flash()); //use connect-flash for messages stored in session

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/bl_controller.js');
app.use('/', routes);

var PORT = 3000;
// app.listen(port);
app.listen(process.env.PORT || PORT);

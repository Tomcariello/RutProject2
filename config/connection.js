/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
//var password = require('../config/password.js');

var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: '127.0.0.1',
	user: 'root',
	password: 'Guitar01',
	database: 'bucketlist'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

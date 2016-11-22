var Sequelize = require('sequelize');
var connection = new Sequelize('demo_schema', 'root', 'password');

var app = connection.define('app', {
  title: 
  type: Sequelize.STRING,
  unique: true,
  allowNull: false
},
body: {
  type: Sequelize.TEXT,
  defaultValue: 'Coming soon...'
}
}, {
  timestamp: false,
  freezeTableName: true;
});

connection.sync({
  force: true,
  logging: console.log('')
}).then(function . 
  });
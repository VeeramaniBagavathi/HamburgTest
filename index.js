var restify = require('restify');

var mongoose = require('mongoose');

var todoData = require('./data.js');


restServer = restify.createServer();
restServer.use(restify.bodyParser()); // to get the values from request body
restServer.use(restify.queryParser()); // to get the values from request params/query


mongoose.connect('mongodb://localhost/test');


restServer.get('/', function(req, res) {
	res.send('This is a sample app for todo api node app');
});

restServer.get('/todos', todoData.list);

restServer.get('/todo/:name', todoData.getTask);

restServer.put('/todo', todoData.updateTask);

restServer.post('/todo', todoData.createTask);

restServer.del('/todo/:name', todoData.deleteTask);


restServer.listen(3000, function() {
	console.log('todo api available @ 3000');
});
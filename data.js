var Todo = require('./domain/todo.js');

exports.list = function(req, res) {
	Todo.find(function(err, todos) {
		res.send(todos);
	});
}

exports.getTask = function(req, res) {
	var inputName = req.params.name;
	console.log(inputName);
	var query = Todo.findOne({ taskName : inputName });
	query.exec(function(err, todo) {
		console.log(todo);
		if (todo == null) {
			console.log('checking with assignee');
			var query = Todo.findOne({ assignee : inputName });
			query.exec(function(err, todo) {
				res.send(todo);
			});
		} else {
			res.send(todo);
		}
	});
}

exports.createTask = function(req, res, next) {
	var input = JSON.parse(req.body);
	console.log(input.taskName);
	new Todo({
		taskName : input.taskName,
		assignee : input.assignee,
		dueDate : input.dueDate,
		completed : input.completed
	}).save();
	res.send('done');
}

exports.updateTask = function(req, res, next) {
	var input = JSON.parse(req.body);
	console.log(input.taskName);
	Todo.findOneAndUpdate({ taskName : input.taskName }, input, {}, function (err, todo) {
		res.send('done');
	});
}

exports.deleteTask = function(req, res, next) {
	var inputName = req.params.name;
	console.log(inputName);
	Todo.findOneAndRemove({ taskName : inputName }, {}, function (err, todo) {
		res.send('done');
	});
}

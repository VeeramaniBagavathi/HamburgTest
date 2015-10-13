var mongoose = require('mongoose');

var todoSchema = mongoose.Schema(
		{
			taskName : String,
			completed : Boolean,
			description : String,
			dueDate : String,
			assignee : String
		}, {collection : 'Todo'} // mongoose plurifies the collection name (to avoid 'todos' as collection name)
	);

var Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;


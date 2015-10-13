# todo-api
Sample REST-API with node, restify, mongoose


#### Resource structure:
```
{
	taskName : String,
	completed : Boolean,
	description : String,
	dueDate : String,
	assignee : String
}
```

#### Operations:
**GET	/todos** - returns the list of todo items<br/>
**GET	/todo/{name}** - return the todo item with given task name or assignee<br/>
**PUT /todo** - updates the todo item, based on task name<br/>
**POST /todo** - creates the new todo item<br/>
**DELETE /todo/{name}** - deletes the todo item with given task name<br/>

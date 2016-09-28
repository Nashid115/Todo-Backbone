window.App = window.App || {};

var todoCollection = new App.TodoCollection();

var inputView = new App.InputView({
	collection : todoCollection
});

todoCollection.on('add', function (todo) {
	console.log('Todo was added. Name : ' + todo.get('name'));
});


var listView = new App.ListView({
	collection : todoCollection
});

/*
App.ListView
App.ListRowView
*/
window.App = window.App || {};

var todoCollection = new App.TodoCollection();

var inputView = new App.InputView({
	collection : todoCollection
});

var listView = new App.ListView({
	collection : todoCollection
});

var actionView = new App.ActionView({
	collection : todoCollection
});
// var listView = new App.ListView({
// 	collection : todoCollection
// });

/*
App.ListView
App.ListRowView
*/
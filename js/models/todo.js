window.App = window.App || {};

App.TodoModel = Backbone.Model.extend({
	defaults : {
		"name" : "",
		"isActive" : true
	}
});

App.TodoCollection = Backbone.Collection.extend({
	model : App.TodoModel
});

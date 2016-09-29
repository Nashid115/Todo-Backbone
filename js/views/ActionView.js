window.App = window.App || {};

App.ActionView = Backbone.View.extend({
	el : "#action-buttons",
	events : {
		"click .all" : "show",
		"click .active" : "showActive",
		"click .complete" : "showComplete",
		"click .clearCompleted" : "clear"
	},
	initialize : function(options) {
		this.collection = options.collection;
	},
	show : function() {
		// var view = new App.ListView({
		// 	collection : this.collection.reset
		// });
	},
	showActive : function() {
		console.log(todoCollection.filter({isActive : true}));
		var view = new App.ListView({
			collection : todoCollection
		});
	},
	showComplete : function() {
		var todoList = this.collection.completed();
	}
});

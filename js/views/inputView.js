window.App = window.App || {};

App.InputView = Backbone.View.extend({
	el : "#new-todo",
	events : {
		'keyup' : 'createTodo',
	},
	initialize : function(options) {
		this.collection = options.collection;
	},
	createTodo : function(e) {
		if(e.keyCode === 13 && this.$el.val() != ''){
			var name = this.$el.val();
			var todo = new App.TodoModel({
				name : name
			});
			this.collection.add(todo);
			this.$el.val('');
		}
	}
});

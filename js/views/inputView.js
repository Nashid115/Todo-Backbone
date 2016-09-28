window.App = window.App || {};

App.InputView = Backbone.View.extend({
	el : "#new-todo",
	events : {
		'keyup' : 'createTodo',
	},
	initialize : function(options) {
		this.collection = options.collection
	},
	addOne : function() {
		var newTodoView = new app.ItemView({
			model : todo
		});
		$('.list').append(newTodoView.render().el);
	},
	createTodo : function(e) {
		if(e.keyCode === 13){
			var name = this.$el.val();

			var todo = new App.TodoModel({
				name : name
			});

			this.collection.add(todo);
			this.$el.val('');
		}
	}
});

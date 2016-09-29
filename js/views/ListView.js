window.App = window.App || {};

App.ListView = Backbone.View.extend({
	el : "#todo-list",
	template : _.template($('#item-template').html()),
	initialize : function(options) {
		console.log("HERE AGAIN");
		this.collection = options.collection;
		this.collection.bind("reset", this.render, this);
		this.addTodoRow = this.addTodoRow.bind(this);
		this.collection.on('add', this.addTodoRow);
		// this.collection.on('remove', this.removeCompleted);
	},
	render : function() {
		this.addAll();
	},
	addAll : function() {
		this.collection.forEach(this.addTodoRow,this);
	},
	addTodoRow : function(todo) {
		var row = new App.ListRowView({
			model : todo,
			table : this.$el
		});
	}
	/*,
	removeCompleted : function() {
		var row = new App.ListRowView({
			model : todo,
			table : this.$el
		});
	}*/
});

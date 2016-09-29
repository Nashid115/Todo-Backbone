window.App = window.App || {};

App.TodoModel = Backbone.Model.extend({
	defaults : {
		name : "",
		isActive : true
	}
});

App.TodoCollection = Backbone.Collection.extend({
	model : App.TodoModel,
	completed : function() {
		return this.where({
			isActive : false
		});
	},
	active : function() {
		console.log(this);
		return this.where({
			isActive : true
		});
	},
});

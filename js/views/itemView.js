window.App = window.App || {};

App.ItemView = Backbone.View.extend({
	tagName : "tr",
	className : "todoItem",
	template : _.template($('#item-template').html()),
	el : ".todo-list",
	initialize : function() {
		this.$el = $('.todo-list');
	},
	render : function() {
		console.log(this.model);
		this.$el.html(this.template(this.model.attributes));
		this.$el.html();
		this.input = this.$('.edit');
		return this;
	}
});

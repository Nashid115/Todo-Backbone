window.App = window.App || {};

App.ItemView = Backbone.View.extend({
	tagName : "tr",
	className : "todoItem",
	todoTemplate : _.template($('#itemTemplate').html()),
	el : ".list",
	events : {
		"click .tick" : "complete",
		"click .cross" : "del",
		"dblclick .edit" : "edit",
		"keyup .edit" : "update"
	},
	initialize : function() {
		this.$el = $('.list');
	},
	render : function() {
		this.$el.html();
		this.input = this.$('.edit');
		return this;
	},
	edit : function() {

	},
	del : function() {

	},
	update : function() {

	},
	complete : function() {

	}
});

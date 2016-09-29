window.App = window.App || {};

App.ListRowView = Backbone.View.extend({
	tagName : 'tr',
	template : _.template($('#item-template').html()),
	events : {
		"click .tick" : "toggle",
		"click .cross" : "delete",
		"dblclick .edit" : "edit",
		"blur .edit" : "editComplete",
		"keyup .edit" : "editComplete"
	},
	initialize : function(options) {
		this.collection = options.collection;
		this.render();
		options.table.append(this.$el);
	},
	render : function() {
		this.$el.html(this.template(this.model.attributes));
	},
	toggle : function() {
		var isActive = this.model.get('isActive');

		this.model.set('isActive', !isActive);
		this.$el.find('.edit').toggleClass('strike');
	},
	delete : function() {
		this.$el.remove();
		this.model.destroy();
	},
	edit : function() {
		this.$el.find('.edit').attr('readonly', false);
		this.$el.find('.edit').addClass('edit-box');
	},
	editComplete : function(e) {
		if(e.keyCode == 13 || e.type == "focusout") {
			var name = this.$el.find('.edit').val();
			this.model.set({
				name : name
			});
			this.$el.find('.edit').attr('readonly', true);
			this.$el.find('.edit').removeClass('edit-box');
		}
	}
});
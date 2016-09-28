window.App = window.App || {};

var Router = Backbone.Router.extend({
	routes : {
		":status" : "show"
	},
	show : function(status) {

	}
});
Backbone.history.start({
	pushState : true
});
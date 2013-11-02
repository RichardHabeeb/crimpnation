App = Ember.Application.create();

App.Router.map(function() {
});

/*
App.IndexController = Ember.ObjectController.extend({
  buttonText: "Start Crimp",
});
*/

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return [{
			buttonText: "Finish",
		}];
	},
});
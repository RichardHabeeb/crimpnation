App = Ember.Application.create();


App.Router.map(function() {
	this.resource("crimping");
});


App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		return {
			buttonLabel: "Test your skills:",
			buttonText: "Start Crimp",
		};
	},
});


App.CrimpingRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this.controllerFor('application').set('buttonLabel', 'Finish crimping end:');
		this.controllerFor('application').set('buttonText', 'CRIMP!');
	}
});

App.FlipClockView = Ember.View.extend({
  type: 'text',
  tagName: 'div',
  classNames: 'flipclock',
  didInsertElement: function() {
    this.$().FlipClock({});
  },
});
 

var clock = {
		startTime: 		undefined,
		elapsedTime: 	undefined,
		splitTimes: 	[],
		intervalId: 	-1,
		dom_clock:		undefined,
		
		start: function(interval, dom_clock) {
			this.startTime = new Date();
			this.dom_clock = dom_clock;
			this.intervalId = setInterval( this.updateClock, interval, this);
		},
		updateClock: function(self) {
			self.elapsedTime = (new Date()).getTime() - self.startTime.getTime();
			$(self.dom_clock).html(self.elapsedTime/1000);
		},
		stopClock: function() {
			clearInterval(this.intervalId);
			this.updateClock(this);
		},
		split: function() {
			this.updateClock(this);
			this.splitTimes.push(this.elapsedTime);
		},
		reset: function() {
			clearInterval(this.intervalId);
			this.startTime = undefined;
			this.elapsedTime = undefined;
			this.splitTimes = [];
			this.intervalId = -1;
		},
};




App = Ember.Application.create();


App.Router.map(function() {
	this.resource("/");
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
	model: function() {
		clock.start(100, '#clock');
		return {};
	},
});





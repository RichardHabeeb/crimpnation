App = Ember.Application.create();

App.Router.map(function() {
	this.resource("scores");
	this.resource("insertScore");
});

var timer = Ember.Object.create({
	crimping: 		false,
	setup: 			false,
	clockId: 		-1,
	start: 			new Date().getTime(),
	elapsed: 		0,
	timeDisplay:	"",
	
	tick: function() {
		this.set("elapsed", new Date().getTime() - this.get('start'));
		
		if( !this.get('setup') && this.get('elapsed') < 3000 ) {
			$("input.infinite").trigger('configure', {
				"max": 3000,
				"cursor":false,
			});
			this.set("timeDisplay", "Begin crimping in: " + ( ( this.get('elapsed') < 1000 ) ? "3.." :(( this.get('elapsed') < 2000 ) ? "3..2.." : "3..2..1..") ) );
			
		} else if(!this.get('setup') && this.get('elapsed') > 3000) {
			this.set("start", new Date().getTime());
			this.set("elapsed", 0);
			this.set("setup", true);
			
			$("input.infinite").trigger('configure', {
				"max": 1000,
				"cursor": 25,
			});
		} else {
			this.set("timeDisplay", (this.get('elapsed')/1000).toFixed(2) + " Seconds");
		}
		$("input.infinite").val(this.get('elapsed')).trigger("change");
		this.set('clockId', setTimeout("timer.tick()", 10));	
	}
});

App.ApplicationController = Ember.ObjectController.extend({
	btnLabel: "Test Your Skills",
	timer: timer,
	timeDisplayBinding: "timer.timeDisplay",
	clockId: 0,
	actions: {
		btnClicked: function() {
			if(!timer.get('crimping')) {
				this.transitionToRoute('scores');
				this.set('btnLabel', "Done");
				timer.set('elapsed', 0);
				timer.set('start', new Date().getTime());
				timer.set('crimping', true);
				timer.set('setup', false);
				timer.tick();
			} else if( timer.get('crimping') && timer.get('elapsed') > 10000) {
				clearInterval(timer.get('clockId'));
				timer.set('crimping', false);
				this.set('btnLabel', "Try again!");
				this.transitionToRoute('insertScore').then(function() {
					console.log($(".score_form").offset().top);
					$('html,body').animate({
						scrollTop: $(".score_form").offset().top,
					}, 1000);
				});
			}
		},
	},
});
 
App.StopWatch = Ember.View.extend({
	type: 'text',
	tagName: 'div',
	classNames: 'stopwatch',
	didInsertElement: function() {
		this.$("input.infinite").knob({
			min : 0,
			max : 1000,
			stopper : false,
		});
	},
});


App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('scores');
  }
});



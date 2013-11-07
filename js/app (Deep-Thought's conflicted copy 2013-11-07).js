App = Ember.Application.create();

App.Router.map(function() {
	this.resource("crimping");
});

var timer = Ember.Object.create({
	crimping: 		false,
	setup: 			false,
	clockId: 		-1,
	start: 			new Date().getTime(),
	elapsed: 		0,
	timeDisplay:	"",
	
	tick: function() {
		this.set("elapsed", new Date().getTime() - this.get("start"));
		
		if( !this.get("setup") && this.get("elaped") < 3000 ) {
			$("input.infinite").trigger('configure', {
				"max": 3000,
				"cursor":false,
			});
			this.set("timeDisplay", "Begin crimping in: " + ( this.get("elaped") < 1000 ) ? "3.." :(( this.get("elaped") < 2000 ) ? "3..2.." : "3..2..1.."));
			
		} else if(!this.get("setup") && this.get("elaped") > 3000) {
			this.set("start", new Date().getTime());
			this.set("elapsed", 0);
			this.set("setup", true);
			
			$("input.infinite").trigger('configure', {
				"max": 1000,
				"cursor": 25,
			});
		} else {
			this.set("timeDisplay", (this.get("elaped")/1000).toFixed(2) + " Seconds");
		}
		$("input.infinite").val(this.get("elaped")).trigger("change");
		this.set("clockId", setTimeout(this.tick(), 10));
	},
});


App.ApplicationController = Ember.ObjectController.extend({
	btnLabel: "Test Your Skills",
	actions: {
		btnClicked: function() {
			if(!timer.get('crimping')) {
				this.set('btnLabel', "Done");
				timer.set('crimping', true);
				timer.set('setup', false);
				timer.set('elapsed', 0);
				timer.set('start', new Date().getTime());
				timer.set('clockId', setTimeout(timer.tick(), 10));
			} else if( timer.get('crimping') && elapsed > 10000) {
				clearTimeout(timer.get('clockId'));
				timer.set('crimping', false);
				this.set('btnLabel', "Test Your Skills");
			}
		},
	},
});
 

App.StopWatch = Ember.View.extend({
	type: 'text',
	tagName: 'div',
	classNames: 'stopwatch',
	timer: timer,
	timeDisplayBinding: 'timer.timeDisplay',
	didInsertElement: function() {
		this.$("input.infinite").knob({
			min : 0,
			max : 1000,
			stopper : false,
		});
	},
});

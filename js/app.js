App = Ember.Application.create();

var crimping=false, setup=false, clockId=-1;
var start = new Date().getTime();
var elapsed = 0;

function clock() {
	elapsed = new Date().getTime() - start;
	if( !setup && elapsed < 3000 ) {
		$("input.infinite").trigger('configure', {
			"max": 3000,
			"cursor":false,
		});
		var countdown = ( elapsed < 1000 ) ? "3.." :(
							( elapsed < 2000 ) ? "3..2.." : "3..2..1..");
		$('#display_time').html("Begin crimping in: " + countdown);
	} else if(!setup && elapsed > 3000) {
		start = new Date().getTime();
		elapsed = 0;
		setup = true;
		$("input.infinite").trigger('configure', {
			"max": 1000,
			"cursor": 25,
		});
	} else {
		$('#display_time').html((elapsed/1000).toFixed(2) + " Seconds");
	}
	$("input.infinite").val(elapsed).trigger("change");
	clockId = setTimeout("clock()", 10);
	
}


App.Router.map(function() {
	this.resource("crimping");
});

App.ApplicationController = Ember.ObjectController.extend({
	btn_label: "Test Your Skills",
	actions: {
		btnClicked: function() {
			if(!crimping) {
				start = new Date().getTime();
				elapsed = 0;
				clock();
				this.set('btn_label', "Done");
				crimping = !crimping;
				setup = false;
			} else if( crimping && elapsed > 10000) {
				clearTimeout(clockId);
				this.set('btn_label', "Test Your Skills");
				crimping = !crimping;
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

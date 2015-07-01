define([
	'jquery',
	'underscore',
	'backbone',

	'router'
], function($, _, Backbone, Router){

	var initialize = function(){
		console.log('initializing app');

		Router.initialize();
	}

	return {
		initialize : initialize
	};

});
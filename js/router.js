define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var AppRouter = Backbone.Router.extend({
		routes: {
			// report issue :  no '/'
			'projects': 'showProjects',
			'users': 'showUsers',

			'*actions': 'defaultAction' 
		}
	});

	var initialize = function(){
		console.log('initializing router');

		var appRouter = new AppRouter;
		// report issue : missing 'route:'
		appRouter.on('route:showProjects', function(){
			console.log('showing projects');
		});
		appRouter.on('route:showUsers', function(){
			console.log('showing users');
		});
		appRouter.on('route:defaultAction', function(){
			console.log('default action');
		});

		Backbone.history.start();
	}

	return {
		initialize : initialize
	};

});
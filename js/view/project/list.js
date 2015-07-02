define([
	'jquery',
	'underscore',
	'backbone',

	'libs/text!templates/project/list.html'
], function($, _, Backbone, projectListTemplate){
	var ProjectListView = Backbone.View.extend({
		el: $('#container'),
		render: function(){
			console.log('rendering projectListView');

			var data = {};
			var compiled = _.template(projectListTemplate)(data);
			this.$el.append(compiled);
		}
	});

	return ProjectListView;
})
require.config({
	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone'
	}
});

require([], function(){
	console.log('yeah!');
});
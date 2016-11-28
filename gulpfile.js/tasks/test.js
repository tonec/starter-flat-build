var gulp = require('gulp');
var gutil = require('gulp-util');
var KarmaServer = require('karma').Server;

// Run test specs
gulp.task('test', function(done) {
	'use strict';
	
	new KarmaServer({
		configFile: __dirname + '/../../karma.conf.js',
		singleRun: true
	}, function(error) {
		if (error === 0) {
			done();
		} else {
			done(new gutil.PluginError('karma', {
                message: 'Karma Tests failed'
            }));
		}
	}).start();
});

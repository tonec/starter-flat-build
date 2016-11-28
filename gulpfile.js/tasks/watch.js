var gulp = require('gulp');
var paths = require('./paths');

// Watch source files
gulp.task('watch', function() {
	'use strict';
	
	gulp.watch(paths.template + '/**/*.jade', ['template']);
	gulp.watch(paths.sass + '/**/*.scss', ['sass']);
	gulp.watch(paths.js + '/**/*.js', ['browserify']);
});

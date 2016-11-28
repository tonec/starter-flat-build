var gulp = require('gulp');
var clean = require('gulp-clean');
var paths = require('./paths');

// A simple cleaning task to delete the dist directory
// and all of its contents.
gulp.task('clean', function() {
	'use strict';
	
	gulp.src(paths.dist, {read: false})
		.pipe(clean());
});

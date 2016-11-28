var gulp = require('gulp');
var clean = require('gulp-clean');
var paths = require('./paths');

// A simple cleaning task to delete the contents of the font
// folder inside the dist directory.
gulp.task('clean-font', function() {
	'use strict';
	
	gulp.src(paths.dist + '/font/', {read: false})
		.pipe(clean());
});

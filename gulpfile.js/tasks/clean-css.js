var gulp = require('gulp');
var clean = require('gulp-clean');
var paths = require('./paths');

// A simple cleaning task to delete the contents of the css
// folder inside the dist directory.
gulp.task('clean-css', function() {
	'use strict';
	
	gulp.src(paths.dist + '/css', {read: false})
		.pipe(clean());
});

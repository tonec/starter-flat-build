var gulp = require('gulp');
var clean = require('gulp-clean');
var paths = require('./paths');

// A simple cleaning task to delete the html files
// inside the dist directory.
gulp.task('clean-html', function() {
	'use strict';
	
	gulp.src(paths.dist + '/*.html', {read: false})
		.pipe(clean());
});

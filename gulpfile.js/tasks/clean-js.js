var gulp = require('gulp');
var clean = require('gulp-clean');
var paths = require('./paths');

// A simple cleaning task to delete the contents of the js
// folder inside the dist directory.
gulp.task('clean-js', function() {
	'use strict';

	gulp.src(paths.dist + '/js', {read: false})
		.pipe(clean());
});

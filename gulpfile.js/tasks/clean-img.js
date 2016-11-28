var gulp = require('gulp');
var clean = require('gulp-clean');
var paths = require('./paths');

// A simple cleaning task to delete the contents of the img
// folder inside the dist directory.
gulp.task('clean-img', function() {
	'use strict';

	gulp.src(paths.dist + '/img', {read: false})
		.pipe(clean());
});

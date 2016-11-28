var gulp = require('gulp');
var connect = require('gulp-connect');
var paths = require('./paths');

// Start the local development server with
// the root set to the dist directory.
gulp.task('connect', function() {
	'use strict';
	
	connect.server({
		root: paths.dist + '/',
		livereload: true
	});
});

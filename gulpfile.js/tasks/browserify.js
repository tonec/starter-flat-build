var gulp = require('gulp');
var browserify = require('browserify');
var vinylSource = require('vinyl-source-stream');
var connect = require('gulp-connect');
var paths = require('./paths');

// Browserify lets you require('modules') in your browser code.
// This task will lint, check formatting and clean the js
// folder within the dist directory before generating
// a new bundle.js file.
gulp.task('browserify', ['lint', 'jscs', 'test', 'clean-js'], function() {
	'use strict';
	
	return browserify(paths.js + '/main.js', {debug: true})
		.bundle()
		.pipe(vinylSource('bundle.js'))
		.pipe(gulp.dest(paths.dist + '/js'))
		.pipe(connect.reload());
});

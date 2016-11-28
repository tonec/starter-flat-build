var gulp = require('gulp');
var jade = require('gulp-jade');
var connect = require('gulp-connect');
var paths = require('./paths');
var handleError = require('./handleError');

// Compiles the Jade (now Pug) templates.
gulp.task('template', ['clean-html'], function() {
	'use strict';
	
	gulp.src([
			paths.template + '/**/*.jade',
			'!' + paths.template + '/**/*.part.jade'])
		.pipe(jade({
			pretty: true
		}).on('error', handleError))
		.pipe(gulp.dest(paths.dist + '/'))
		.pipe(connect.reload());
});

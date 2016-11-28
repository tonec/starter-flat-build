var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var paths = require('./paths');
var handleError = require('./handleError');

// JavaScript linting. Linting rules
// defined in .jshintrc in root.
gulp.task('lint', function() {
	'use strict';
	
	return gulp.src(paths.js + '/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(plumber({
			errorHandler: handleError
		}))
		.pipe(jshint.reporter('jshint-stylish'));
});

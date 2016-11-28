var gulp = require('gulp');
var jscs = require('gulp-jscs');
var paths = require('./paths');

// JavaScript code style checker. Keep it clean! :)
// Style rules defined in .jscsrc in root.
gulp.task('jscs', function() {
	'use strict';
	
	return gulp.src(paths.js + '/**/*.js')
		.pipe(jscs())
		.pipe(jscs.reporter());
});

var gulp = require('gulp');
var paths = require('./paths');

// Copy all of the fonts into the font
// folder in the dist directory.
gulp.task('font', function() {
	'use strict';
	
	return gulp.src(paths.font + '/*.*')
		.pipe(gulp.dest(paths.dist + '/font'));
});

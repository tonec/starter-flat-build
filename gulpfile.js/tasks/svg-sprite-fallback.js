var gulp = require('gulp');
var svg2png = require('gulp-svg2png');
var paths = require('./paths');

// Generates png versions of all svgs for
// use with non supporting browsers.
gulp.task('svg-sprite-fallback', function() {
	'use strict';
	
	return gulp.src(paths.svg + '/**/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest(paths.dist + '/img/svg-sprite-fallback'));
});

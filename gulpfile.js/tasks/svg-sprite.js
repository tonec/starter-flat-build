var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var paths = require('./paths');

// Generates an SVG sprite
// css-tricks.com/svg-sprites-use-better-icon-fonts/
// which is placed in the templates directory and
// pulled into the base template.
gulp.task('svg-sprite', ['svg-sprite-fallback'], function () {
	'use strict';
	
	return gulp.src(paths.svg + '/**/*.svg')
		.pipe(svgSprite({
			mode: {
				symbol: true
			}
		}))
		.pipe(rename('/svg-sprite/sprite.symbol.svg'))
		.pipe(gulp.dest('./src/template/base-partials/'));
});

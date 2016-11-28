var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var paths = require('./paths');

// Optimize and copy all of the images into
// the img folder in the dist directory.
gulp.task('copy-img', function() {
	'use strict';
	
	return gulp.src(paths.img + '/**/*')
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest(paths.dist + '/img'));
});

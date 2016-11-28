var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var paths = require('./paths');

// Sass linting. Linting rules defined
// in scss-lint.yml in root.
gulp.task('scss-lint', function() {
	'use strict';
	
	return gulp.src(paths.sass + '/**/*.scss')
		.pipe(scsslint({
			'config': 'scss-lint.yml'
		}));
});

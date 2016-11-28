var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var prefix = require('gulp-autoprefixer');
var paths = require('./paths');
var handleError = require('./handleError');

// Autoprefix browser support
var prefixConfig = [
    'Android >= 2.3',
    'BlackBerry >= 7',
    'Chrome >= 9',
    'Firefox >= 4',
    'Explorer >= 9',
    'iOS >= 5',
    'Opera >= 11',
    'Safari >= 5',
    'OperaMobile >= 11',
    'OperaMini >= 6',
    'ChromeAndroid >= 9',
    'FirefoxAndroid >= 4',
    'ExplorerMobile >= 9'
];

// Compile sass, with linting.
// Included Susy used for layouts and normalize.
// Both installed using npm.
gulp.task('sass', ['scss-lint', 'clean-css'], function(done) {
    'use strict';
    
	gulp.src(paths.sass + '/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: [
				'node_modules/susy/sass/',
				'node_modules/normalize.scss/'
			]
		}).on('error', handleError))
		.pipe(prefix(prefixConfig))
		.pipe(gulp.dest(paths.dist + '/css'))
		.pipe(connect.reload())
		.on('end', done);
});

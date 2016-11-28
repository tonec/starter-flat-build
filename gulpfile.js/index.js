//
//	gulpfile.js
//	===========
//	Rather than manage one giant configuration file responsible
//	for creating multiple tasks, each task has been broken out into
//	its own file in gulpfile.js/tasks. Any files in that directory get
//	automatically required below.
//
//	To add a new task, simply add a new task file that directory.
//	gulpfile.js/tasks/default.js specifies the default set of tasks to run
//	when you run `gulp`.
//

var gulp = require('gulp');
var requireDir = require('require-dir');

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true });

// All development tasks
var devTasks = [
	'template',
	'sass',
	'lint',
	'browserify',
	'test',
	'font',
	'watch',
	'connect'
];

// All image tasks
var imgTasks = [
	'clean-img',
	'copy-img',
	'svg-sprite'
];

// Default task. Suitable for local development.
// Run to develop locally.
gulp.task('default', devTasks);

// Image task. This is not part of the main development task because it
// takes some time to execute, but it is essential.
// Run when generating a new dist director
// and when adding new image assets.
gulp.task('img', imgTasks);

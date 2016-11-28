// Handle errors and emit end to prevent gulp from stalling
// after each error and requiring a restart.
module.exports = function (err) {
	'use strict';
	
	console.log(err);
	this.emit('end');
};

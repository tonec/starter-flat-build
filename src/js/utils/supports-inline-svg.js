'use strict';

module.exports = function() {
	var div = document.createElement('div');

	div.innerHTML = '<svg/>';
	return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
};

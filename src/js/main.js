'use strict';

global.jQuery = require('jquery');
require('tabs')();

var svgSymbolFallback = require('./svg-symbol-fallback');

svgSymbolFallback('img/svg-sprite-fallback/');

jQuery(function() {
	jQuery('#tabs-1').tabs({
		tabElem: '.tab',
		activeTab: 1,
		navSource: 'h1',
		navSourceHide: true
	});
});


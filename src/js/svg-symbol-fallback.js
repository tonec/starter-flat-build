'use strict';

var supportsInlineSvg = require('./utils/supports-inline-svg');

var svgSymbolFallback = function(path) {

	if (!supportsInlineSvg()) {
		var svgs = document.getElementsByTagName('svg');
		var svgsCount = svgs.length;

		if (svgsCount < 1) {
			return;
		}

		while (svgsCount--) {
			var svgTitle = svgs[svgsCount].getAttribute('title');
			var uses = svgs[svgsCount].getElementsByTagName('use');
			var usesCount = uses.length;

			while (usesCount--) {
				var svgId = uses[usesCount].getAttribute('xlink:href');
				var newImg = document.createElement('img');

				svgId = svgId.substring(1, svgId.length);
				newImg.src = path + svgId + '.png';
				newImg.alt = svgTitle ? svgTitle : '';
				svgs[svgsCount].parentNode.insertBefore(newImg, svgs[svgsCount].nextSibling);
			}

			svgs[svgsCount].parentNode.removeChild(svgs[svgsCount]);
		}
	}
};

module.exports = svgSymbolFallback;


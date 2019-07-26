// var HtmlReporter = require('protractor-jasmine2-html-reporter');
var jasmineReporters = require('jasmine-reporters');
exports.config = {
  framework: 'jasmine2',
 	specs: ['spec.js'],
  	capabilities: {
  		browserName: 'chrome',
  		'chromeOptions': {
    		'args': ['--disable-extensions']
  		}
	},

	onPrepare: function(){
		require('jasmine-reporters');
		// var capsPromise = browser.getCapabilities();
		// capsPromise.then(function(caps){
		// 	// var browserName = caps.caps_.browserName.toUpperCase();
		// 	// var browserVersion = caps.caps_.version;
		// 	// var prePendStr = browserName + "-" + browserVersion + "-";
		// 	jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter("/test/reports", true, true));
		// });
		var junitReporter = new jasmineReporters.JUnitXmlReporter({
    		savePath: '../tmp'
		});
		jasmine.getEnv().addReporter(junitReporter);
	}
}


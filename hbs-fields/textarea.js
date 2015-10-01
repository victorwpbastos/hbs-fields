var Handlebars = require('handlebars/runtime')['default'];
var Factory = require('./factory');

Handlebars.registerHelper('textarea', function(attrs) {
	return new Handlebars.SafeString(Factory($('<textarea/>'), attrs));
});
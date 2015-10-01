var Handlebars = require('handlebars/runtime')['default'];
var Factory = require('./factory');

Handlebars.registerHelper('checkbox', function(attrs) {
	attrs.hash.type = 'checkbox';

	return new Handlebars.SafeString(Factory($('<input type="checkbox"/>'), attrs));
});
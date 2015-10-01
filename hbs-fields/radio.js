var Handlebars = require('handlebars/runtime')['default'];
var Factory = require('./factory');

Handlebars.registerHelper('radio', function(attrs) {
	attrs.hash.type = 'radio';

	return new Handlebars.SafeString(Factory($('<input type="radio"/>'), attrs));
});
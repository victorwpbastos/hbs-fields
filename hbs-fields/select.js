var Handlebars = require('handlebars/runtime')['default'];
var Factory = require('./factory');

Handlebars.registerHelper('select', function(attrs) {
	attrs.hash.type = attrs.hash.type || 'text';

	var element = $('<select/>');

	if(attrs.fn) {
		element = element.html(attrs.fn(this));
	}

	return new Handlebars.SafeString(Factory(element, attrs));
});
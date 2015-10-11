var Handlebars = require('handlebars/runtime')['default'];
var _ = require('underscore');
var Factory = require('./factory');

Handlebars.registerHelper('textarea', function(attrs) {
	var element = $('<textarea/>');

	if(attrs.fn) {
		element.html(attrs.fn(this));
	} else {
		if(!_.isEmpty(attrs.data.root) && attrs.hash.name) {
			var value = attrs.data.root[attrs.hash.name];

			if(value !== undefined) {
				element.html(value);
			}
		}
	}

	return new Handlebars.SafeString(Factory(element, attrs));
});
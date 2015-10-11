var Handlebars = require('handlebars/runtime')['default'];
var _ = require('underscore');
var Factory = require('./factory');

Handlebars.registerHelper('radio', function(attrs) {
	attrs.hash.type = 'radio';

	if(!_.isEmpty(attrs.data.root) && attrs.hash.name) {
		var value = attrs.data.root[attrs.hash.name];

		if(value !== undefined) {
			if(_.isArray(value)) {
				if(_.contains(value, attrs.hash.value)) {
					attrs.hash.checked = true;
				}
			} else {
				value = value.toString();
				if(value === attrs.hash.value) {
					attrs.hash.checked = true;
				}
			}
		}
	}

	return new Handlebars.SafeString(Factory($('<input type="radio"/>'), attrs));
});
var Handlebars = require('handlebars/runtime')['default'];
var _ = require('underscore');
var Factory = require('./factory');
var Walker = require('./walker');

Handlebars.registerHelper('checkbox', function(attrs) {
	attrs.hash.type = 'checkbox';

	if(attrs.hash.inline === undefined) {
		attrs.hash.inline = true;
	}

	if(!_.isEmpty(attrs.data.root) && attrs.hash.name) {
		var value = Walker(attrs.data.root, attrs.hash.name);

		if(value !== undefined) {
			if(_.isArray(value)) {
				if(_.contains(value, attrs.hash.value.toString())) {
					attrs.hash.checked = true;
				}
			} else {
				value = value.toString();
				if(value === attrs.hash.value.toString()) {
					attrs.hash.checked = true;
				}
			}
		}
	}

	return new Handlebars.SafeString(Factory($('<input type="checkbox"/>'), attrs));
});
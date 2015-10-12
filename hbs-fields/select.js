var Handlebars = require('handlebars/runtime')['default'];
var _ = require('underscore');
var Factory = require('./factory');
var Walker = require('./walker');

Handlebars.registerHelper('select', function(attrs) {
	var element = $('<select/>');

	if(attrs.fn) {
		var options = attrs.fn(this);

		if(!_.isEmpty(attrs.data.root) && attrs.hash.name) {
			var value = Walker(attrs.data.root, attrs.hash.name);

			if(value !== undefined) {
				options = options.replace(/\n/g, '');
				options = options.replace(/\s</g, '<');
				options = options.replace(/>\s/g, '>');
				options = options.replace(/></g, '>|<');

				options = options.split('|');

				_(options).each(function(option, index) {
					if(attrs.hash.multiple && attrs.hash.multiple.toString() === 'true') {
						if(_.isArray(value)) {
							if(_.contains(value, $(option).val())) {
								options[index] = option.replace('>', ' selected>');
							}
						} else {
							if(value.toString() === $(option).val()) {
								options[index] = option.replace('>', ' selected>');
							}
						}
					} else {
						if(!_.isArray(value) && $(option).val() === value.toString()) {
							options[index] = option.replace('>', ' selected>');
						}
					}
				});
			}
		}

		element.html(options);
	}

	return new Handlebars.SafeString(Factory(element, attrs));
});
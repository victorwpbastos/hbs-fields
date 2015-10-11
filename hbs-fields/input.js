var Handlebars = require('handlebars/runtime')['default'];
var _ = require('underscore');
var Factory = require('./factory');

Handlebars.registerHelper('input', function(attrs) {
	attrs.hash.type = attrs.hash.type || 'text';

	if(attrs.hash.type === 'radio' || attrs.hash.type === 'checkbox') {
		var msg = 'For radio and checkbox input types use {{radio}} or {{checkbox}}!';
		console.error(msg);
		return new Handlebars.SafeString('<span class="text-danger">'+msg+'</span>');
	}

	if(!_.isEmpty(attrs.data.root) && attrs.hash.name && !attrs.hash.value) {
		var value = attrs.data.root[attrs.hash.name];

		if(value !== undefined) {
			attrs.hash.value = value;
		}
	}

	return new Handlebars.SafeString(Factory($('<input/>'), attrs));
});
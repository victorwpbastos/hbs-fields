var Handlebars = require('handlebars/runtime')['default'];
var Factory = require('./factory');

Handlebars.registerHelper('input', function(attrs) {
	attrs.hash.type = attrs.hash.type || 'text';

	if(attrs.hash.type === 'radio' || attrs.hash.type === 'checkbox') {
		var msg = 'Não há suporte a este tipo de input. Use {{radio}} ou {{checkbox}}!';
		console.error(msg);
		return new Handlebars.SafeString('<span class="text-danger">'+msg+'</span>');
	}

	return new Handlebars.SafeString(Factory($('<input/>'), attrs));
});
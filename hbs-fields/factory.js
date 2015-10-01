var _ = require('underscore');

module.exports = function(element, options) {
	var attrs = _(options.hash).omit(['label', 'cols']);
	var label = _(options.hash).pick('label').label || '';
	var cols = _(options.hash).pick('cols').cols;
	var wrapper = '<div class="col-md-{{cols}}">{{content}}</div>'.replace('{{cols}}', cols);
	var template = [
		'<div class="form-group">',
		'	<label for="{{id}}" class="control-label {{hidden}}">{{label}}</label>',
		'	{{element}}',
		'</div>'
	].join('\n');

	attrs.id = attrs.id || attrs.name || _.uniqueId('field_');

	element.attr(attrs);

	if(attrs.type === 'hidden') {
		template = '{{element}}';
	}

	if(attrs.type === 'checkbox' || attrs.type === 'radio') {
		if(attrs.inline === true || attrs.inline === 'true') {
			template = [
				'<label class="{{type}}-inline {{disabled}}">',
				'	{{element}} {{label}}',
				'</label>'
			].join('\n');
		} else {
			template = [
				'<div class="form-group">',
				'	<div class="{{type}} {{disabled}}">',
				'		<label>',
				'		{{element}} {{label}}',
				'		</label>',
				'	</div>',
				'</div>'
			].join('\n');
		}

		template = template.replace('{{type}}', attrs.type);
		template = template.replace('{{disabled}}', attrs.disabled ? 'disabled' : '');
		cols = false;
	} else {
		element.addClass('form-control');
	}

	if(label) {
		template = template.replace('{{label}}', label);
	} else {
		template = template.replace('{{hidden}}', 'hidden');
	}

	template = template.replace('{{id}}', attrs.id);
	template = template.replace('{{element}}', element[0].outerHTML);

	if(cols) {
		template = wrapper.replace('{{content}}', template);
	}

	return template;
};
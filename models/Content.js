var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Content = new keystone.List('Content', {
    plural:'content',
	autokey: { path: 'slug', from: 'name', unique: true },
});

Content.add({
	name: { type: String, required: true, index: true, unique: true },
	content: { type: Types.Markdown, initial: true, required: true}
});


Content.register();



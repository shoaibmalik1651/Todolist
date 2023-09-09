const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	category: {
		type: 'String',
		required: true,
	},
	description: {
		type: 'String',
		required: true,
	},
	dueDate: {
		type: 'Date',
		required: true,
	},
});

const todoModel = mongoose.model('todo', TodoSchema);

module.exports = todoModel;

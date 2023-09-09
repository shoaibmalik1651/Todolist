const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

// Template engine setup
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('./assets'));

// Routes
app.use('/', router);

const port = 8888;
module.exports.startServer = async () => {
	try {
		await mongoose
			.connect('mongodb://localhost/todo_app_db')
			.then(() => console.log('Database connected successfully!'))
			.catch((error) =>
				console.log('Error while connecting to database!', error)
			);
			
		app.listen(port, (err) => {
			if (err) {
				throw new Error(err);
			}
			console.log(`Server is running on: http://localhost:${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

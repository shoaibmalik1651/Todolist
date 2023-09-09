const router = require('express').Router();
const todoController = require('../controllers/todo_controller');

const { home, createTask, deleteTask } = todoController;

router.get('/', home);

router.post('/create-task', createTask);
router.post('/delete-task', deleteTask);

module.exports = router;

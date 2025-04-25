const express = require('express');
const auth = require('../middleware/authMiddleware');
const { addTask, getTasks, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/', auth, addTask);
router.get('/', auth, getTasks);
router.delete('/:id', auth, deleteTask);

module.exports = router;

const { readJSON, writeJSON } = require('../utils/fileHandler');

const addTask = (req, res) => {
    const tasks = readJSON('tasks.json');
    const { title } = req.body;
    const newTask = {
        id: Date.now().toString(),
        username: req.user.username,
        title
    };
    tasks.push(newTask);
    writeJSON('tasks.json', tasks);
    res.json({ message: 'Task added', task: newTask });
};

const getTasks = (req, res) => {
    const tasks = readJSON('tasks.json');
    const userTasks = tasks.filter(task => task.username === req.user.username);
    res.json(userTasks);
};

const deleteTask = (req, res) => {
    let tasks = readJSON('tasks.json');
    const { id } = req.params;

    tasks = tasks.filter(task => !(task.id === id && task.username === req.user.username));
    writeJSON('tasks.json', tasks);
    res.json({ message: 'Task deleted' });
};

module.exports = { addTask, getTasks, deleteTask };

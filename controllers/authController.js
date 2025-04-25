const jwt = require('jsonwebtoken');
const { readJSON, writeJSON } = require('../utils/fileHandler');
const SECRET = 'your_secret_key';

const register = (req, res) => {
    const { username, password } = req.body;
    const users = readJSON('users.json');

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ username, password });
    writeJSON('users.json', users);
    res.json({ message: 'Registered successfully' });
};

const login = (req, res) => {
    const { username, password } = req.body;
    const users = readJSON('users.json');

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
    res.json({ token });
};

module.exports = { register, login };

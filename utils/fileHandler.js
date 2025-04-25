const fs = require('fs');
const path = require('path');

const readJSON = (filename) => {
    const data = fs.readFileSync(path.join(__dirname, '..', 'data', filename));
    return JSON.parse(data);
};

const writeJSON = (filename, data) => {
    fs.writeFileSync(path.join(__dirname, '..', 'data', filename), JSON.stringify(data, null, 2));
};

module.exports = { readJSON, writeJSON };

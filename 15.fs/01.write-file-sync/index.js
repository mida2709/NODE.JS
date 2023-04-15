const fs = require('fs');

fs.writeSync('hello.txt', 'Hello from node.js', {
    encoding: 'utf8',
});
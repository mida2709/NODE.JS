const read = require ('../02.read-file-sync').read
const wrute = require('../01.write-file-sync').write

function append(file, data) {
    const oldData = read(file)
    write(file, oldData + '\n' + data)
}
append('file/hello.txt', 'Hello from Node.js')
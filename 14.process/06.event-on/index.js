process.on('exit', function (code) {
    if(code === 20)
    console.log(`execution time reached 10 seconds`);
    if(code === 0)
    console.log(`success to run the program`);
    console.log(`exit code:`, code);
})

process.on('beforeExit', function(code) {
    console.log('before exit')
});

process.on('uncaughtExeption', function (err) {
    console.log('Error Detection:', err);
});

process.on('SIGINT', function(){
    console.log('SIGINT');
    process.exit()
})
process.on('SINGTERM', function(){
    console.log('SINGTERM');
    process.exit()
})

const startExecTime = new Date().getTime();

for (let i = 0; i < 5000000000; i++) {
    const currentExecTime = new Date().getTime();
    if (currentExecTime - startExecTime > 10000) {
        process.exit(20);
    }
    // if (i === 1000) {
    //     throw new error('error on (i) iteration'); 
    // }
}
const finishExecTime = new Date().getTime();
console.log('Execution time', (finishExecTime - startExecTime) / 1000, `seconds`);
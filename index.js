console.log('Hello folks!');
const axios = require('axios');

// axios.get('https://google.com').then((response) => {
//     console.log(response.data);
// })

const matthFunction = require('./package/mat-function');
console.log(matthFunction.add(1,2));
console.log(matthFunction.sub(1,2));
console.log(matthFunction.mul(1,2));
console.log(matthFunction.div(1,2));
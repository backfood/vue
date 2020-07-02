const axios = require('axios');
console.log(process.env)
let host = process.env.NODE_ENV== "development"?"/book":'http://localhost:5000/h5run'
var service = axios.create({
    // baseURL: 'localhost:8080',
    baseURL:host,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
})
export default service
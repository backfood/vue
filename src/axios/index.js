const axios = require('axios');

console.log(process.env)
const host =process.env.NODE_ENV=="development"?"/book":'http://localhost:9000'
var service = axios.create({
    baseURL: host,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
})
export default service
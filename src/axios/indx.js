const axios = require('axios');

var service = axios.create({
    baseURL: 'https://www.baidu.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
})
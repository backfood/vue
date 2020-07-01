const express = require("express");

const app9001 = express()
app9001.get('/h5vue', (res, req) => {
    console.log(res);
    req.send("这是9000的响应")
})

app9001.listen("9001", (res) => {
    console.log(res, "9001启动")
})
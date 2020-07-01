const express = require("express");
const app9000 = express()

app9000.get('/h5vue', (req, res) => {
    console.log(req);
    res.send("这是9000的响应")
})

app9000.listen("9000", (res) => {
    console.log(res, "9000启动")
})


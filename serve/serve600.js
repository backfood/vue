const express =require("express")


const app =express()


app.get('/h5run',(req,res)=>{
    res.send("这是响应")
})
app2.get('/h5run',(req,res)=>{
    res.send("这是6000响应")
})

app2.listen("6000",(res)=>{
    console.log(6000,"已启动")
})

app.listen("8082",(res)=>{
    console.log(res)
})
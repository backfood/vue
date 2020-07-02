const express =require("express")


const app =express()
const app2=express()

app.get('/h5run',(req,res)=>{
    res.send("这是响应")
})




app.listen("8082",(res)=>{
    console.log(res)
})
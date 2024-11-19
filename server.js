const express=require("express")
const ConnectDB = require("./config/db")
const app = express()


ConnectDB()


app.get('/',(req,res)=>{
    res.json({
        massage:"server chal rha ha"
    })
})








const PORT = 3000|| 5000|| 7000
    
app.listen(PORT,()=>{
    console.log(`server is runing : ${PORT}`)
})
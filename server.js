const express = require("express")
const app = express()
app.use(express.json())
const {connection} = require("./config/db")

const {router} = require("./Routes/student.routes")
app.use("/",router)

app.listen(8000, async ()=>{
    try{
        await connection
        console.log("DB Connected Successfully")
        console.log("Server is running at http://localhost:8000")
    }catch(error){
        console.log(error)
    }
})
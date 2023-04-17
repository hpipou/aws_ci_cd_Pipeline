const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.status(200).send("CI / CD => VERSION 1")
})

app.listen(80,()=>{console.log("SERVER START AT PORT 80")})
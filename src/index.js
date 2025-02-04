require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)


app.listen(3000, ()=>{
    console.log("API funcionando...")
})
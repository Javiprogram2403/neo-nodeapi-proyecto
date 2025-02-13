require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { crearVehiculo, obtenerVehiculos, eliminarVehiculo, actualizarVehiculo } = require("./routes/vehiculo")
const { crearCliente, obtenerClientes, eliminarCliente } = require("./routes/cliente")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)

//**
//C (CREATE) POST
//R (READ) GET
//U (UPDATE) PUT/PATCH
//D (DELETE) DELETE
//*/

app.post("/vehiculos", crearVehiculo)
app.get("/vehiculos", obtenerVehiculos)
app.put("/vehiculos/:id", actualizarVehiculo)
app.delete("/vehiculos/:id", eliminarVehiculo)

app.post("/clientes", crearCliente)
app.get("/clientes", obtenerClientes)
app.delete("/clientes/:id", eliminarCliente)


//app.delete("/clientes/:id", eliminarCliente)

app.get("/api/version", (req,res,next)=>{
    res.send("1.0.0")
})

app.listen(3000, ()=>{
    console.log("API funcionando...")
})
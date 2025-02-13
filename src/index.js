require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { crearVehiculo, obtenerVehiculos, eliminarVehiculo, actualizarVehiculo } = require("./routes/vehiculo")
const { crearCliente, obtenerClientes, eliminarCliente, actualizarCliente } = require("./routes/cliente")
const { registrarUsuario, obtenerUsuarios, eliminarUsuario, actualizarUsuario } = require("./routes/usuario")
const { crearVenta, obtenerVentas, eliminarVenta, actualizarVenta } = require("./routes/venta")

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

// rutas de vehiculos
app.post("/vehiculos", crearVehiculo)
app.get("/vehiculos", obtenerVehiculos)
app.put("/vehiculos/:id", actualizarVehiculo)
app.delete("/vehiculos/:id", eliminarVehiculo)

// rutas de clientes
app.post("/clientes", crearCliente)
app.get("/clientes", obtenerClientes)
app.put("/clientes/:id", actualizarCliente)
app.delete("/clientes/:id", eliminarCliente)

//rutas de usuarios
app.post("/usuarios", registrarUsuario)
app.get("/usuarios", obtenerUsuarios)
app.put("/usuarios/:id", actualizarUsuario)
app.delete("/usuarios/:id", eliminarUsuario)

//rutas de ventas
app.post("/ventas", crearVenta)
app.get("/ventas", obtenerVentas)
app.put("/ventas/:id", actualizarVenta)
app.delete("/ventas/:id", eliminarVenta)


//app.delete("/clientes/:id", eliminarCliente)

app.get("/api/version", (req,res,next)=>{
    res.send("1.0.0")
})

app.listen(3000, ()=>{
    console.log("API funcionando...")
})
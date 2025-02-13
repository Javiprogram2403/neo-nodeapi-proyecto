const Cliente = require("../models/cliente")

// crear cliente (C)
async function crearCliente(req,res,next){
    const nuevo = new Cliente(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// obtener todos los clientes (R)
async function obtenerClientes(req,res,next){
    const clientes = await Cliente.find({})
    res.json(clientes)
}

// actualizar cliente (U)
async function actualizarCliente(req,res,next){
    await Cliente.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: "Cliente actualizado"})
}

// borrar cliente (D)
async function eliminarCliente(req, res,next){
    await Cliente.findByIdAndDelete(req.params.id)
    res.json({msg: "Cliente eliminado"})
}


module.exports = {
    crearCliente,
    obtenerClientes,
    eliminarCliente,
    actualizarCliente,
}


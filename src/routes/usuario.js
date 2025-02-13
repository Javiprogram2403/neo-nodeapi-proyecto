const Usuario = require("../models/usuario")
const bcrypt = require("bcryptjs")

// crear usuario (C)
async function registrarUsuario(req,res,next){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.clave, salt)
    req.body.clave = hash
    const nuevo = new Usuario(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// obtener todos los usuarios (R)
async function obtenerUsuarios(req,res,next){
    const usuarios = await Usuario.find({})
    res.json(usuarios)
}

// actualizar usuario (U)
async function actualizarUsuario(req,res,next){
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: "Usuario actualizado"})
}

// borrar usuario (D)
async function eliminarUsuario(req, res,next){
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({msg: "Usuario eliminado"})
}


module.exports = {
    registrarUsuario,
    obtenerUsuarios,
    eliminarUsuario,
    actualizarUsuario,
}


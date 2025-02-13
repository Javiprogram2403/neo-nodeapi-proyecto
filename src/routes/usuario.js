const Usuario = require("../models/usuario")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// crear usuario (C)
async function registrarUsuario(req,res,next){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.clave, salt)
    req.body.clave = hash
    const nuevo = new Usuario(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// async function acceder usuario
async function loggearUsuario(req,res,next){
    // lo que el usuario me envia desde el formulario
    const email = req.body.email
    const clave = req.body.clave 

    const usuarioCoincidentePorEmail = await Usuario.findOne({email: email})

    // si el email no existe, devuelvo error
    if(!usuarioCoincidentePorEmail){
        return res.status(400).json({msg: "Email no encontrado"})
    }

    const resultadoComparacion = await bcrypt.compare(clave, usuarioCoincidentePorEmail.clave)
    if(resultadoComparacion === true){
        const token = jwt.sign({id: usuarioCoincidentePorEmail._id}, "SECRETO123", { expiresIn: "1h" })
        return res.json({msg: "Credenciales correctos!!", token: token})
    }
    else{
        return res.status(400).json({msg: "Clave incorrecta"})
    }

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
    loggearUsuario,
}


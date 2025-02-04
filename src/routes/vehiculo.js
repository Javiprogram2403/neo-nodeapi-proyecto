const Vehiculo = require("../models/vehiculo")

// crear vehiculo (C)
async function crearVehiculo(req,res,next){
    const nuevo = new Vehiculo(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// obtener todos los vehiculos (R)
async function obtenerVehiculos(req,res,next){
    const vehiculos = await Vehiculo.find({})
    res.json(vehiculos)
}
// actualizar vehiculo (U)

// borrar vehiculo (D)
async function eliminarVehiculo(req, res,next){
    await Vehiculo.findByIdAndDelete(req.params.id)
    res.json({msg: "Vehiculo eliminado"})
}


module.exports = {
    crearVehiculo,
    obtenerVehiculos,
    eliminarVehiculo,
}




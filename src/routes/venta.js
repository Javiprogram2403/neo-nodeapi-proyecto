const Venta = require("../models/venta")

// crear venta (C)
async function crearVenta(req,res,next){
    const nuevo = new Venta(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// obtener todos los ventas (R)
async function obtenerVentas(req,res,next){
    const ventas = await Venta.find({})
    .populate('vehiculo')
    .populate('comprador', 'nombre')
    .populate('vendedor', 'nombre email')
    
    res.json(ventas)
}

// actualizar venta (U)
async function actualizarVenta(req,res,next){
    await Venta.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: "Venta actualizado"})
}

// borrar venta (D)
async function eliminarVenta(req, res,next){
    await Venta.findByIdAndDelete(req.params.id)
    res.json({msg: "Venta eliminado"})
}


module.exports = {
    crearVenta,
    obtenerVentas,
    eliminarVenta,
    actualizarVenta
}




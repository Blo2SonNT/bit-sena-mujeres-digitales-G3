const Producto = require("../models/Producto");

exports.crearProducto = async(req, res) => {
    // console.log('creando producto desde el controlador');
    // console.log(req.body);
    try {
        let data_producto;
        data_producto = new Producto(req.body);
        await data_producto.save();
        res.send(data_producto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Ups.. hay un error en la API... :(")
    }
}

exports.consultarProductos = async(req, res) => {
    try {

        const mis_productos = await Producto.find();
        res.json(mis_productos)


    } catch (error) {
        console.log(error)
        res.status(500).send("No se puede consultar la informacion :(")
    }
}
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

exports.actualizarProducto = async(req, res) => {
    try {

        console.log(req.body)
        const { nombre, ubicacion, precio, proveedor } = req.body
        let data_producto = await Producto.findById(req.params.id);
        console.log(data_producto)

        if (!data_producto) {
            res.status(404).json({ msg: 'NO existe el producto solicitado, no se realiza ninguna actualizacion' });
        }

        data_producto.nombre = nombre;
        data_producto.ubicacion = ubicacion;
        data_producto.precio = precio;
        data_producto.proveedor = proveedor;

        data_producto = await Producto.findOneAndUpdate({ _id: req.params.id }, data_producto, { new: true });
        res.json(data_producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("No se puede actualizar, contactese con el administrador");
    }
}

exports.eliminarProducto = async(req, res) => {
    try {

        let data_producto = await Producto.findById(req.params.id);

        if (!data_producto) {
            res.status(404).json({ msg: 'No existe el producto que se desea eliminar en la BD' });
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Producto eliminado correctamente' });


    } catch (error) {
        console.log(error);
        res.status(500).send("El dato no se puede eliminar");
    }
}

exports.encontrarProducto = async(req, res) => {
    try {
        let data_producto = await Producto.findById(req.params.id);

        if (!data_producto) {
            res.status(404).json({ msg: 'No existe el producto en la BD' });
        }

        res.json(data_producto);


    } catch (error) {
        console.log(error);
        res.status(500).send("No se puede hacer la consulta, error interno");
    }
}
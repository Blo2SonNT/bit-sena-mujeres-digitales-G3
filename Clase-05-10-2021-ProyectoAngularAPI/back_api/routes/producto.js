//rutas para la gestion de productos
const express = require('express');
const productoController = require('../controllers/productoController');
const router_app = express.Router();

// el path al que accedera el usuario para ejecutar este metodo [/api/agregarproducto]
// router_app.post('/', () => {
//     console.log('creando producto...');
// })

router_app.post('/', productoController.crearProducto);
router_app.get('/', productoController.consultarProductos);


module.exports = router_app;
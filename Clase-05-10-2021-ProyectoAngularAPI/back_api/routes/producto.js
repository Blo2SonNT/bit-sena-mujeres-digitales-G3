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
router_app.put('/:id', productoController.actualizarProducto);
router_app.delete('/:id', productoController.eliminarProducto);
router_app.get('/:id', productoController.encontrarProducto);

module.exports = router_app;
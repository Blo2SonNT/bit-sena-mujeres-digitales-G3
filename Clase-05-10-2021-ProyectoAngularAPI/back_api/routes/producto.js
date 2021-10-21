//rutas para la gestion de productos
const express = require('express');
const router_app = express.Router();

// el path al que accedera el usuario para ejecutar este metodo [/api/agregarproducto]
router_app.post('/', () => {
    console.log('creando producto...');
})

module.exports = router_app;
// console.log("texto de prueba con nodemon")

const express = require('express'); //Llamada del servicio de express
const conectarDB = require('./config/db');

const aplicacion = express(); //implementando el servicio en la aplicacion

conectarDB();

// aplicacion.get('/', (req, res) => {
//     res.send("hola")
// })

aplicacion.use('/api/agregarproducto', require('./routes/producto'));


//localhost:4000 - 127.0.0.1:4000
aplicacion.listen(4000, () => {
    console.log("El servidor esta funcionando");
})
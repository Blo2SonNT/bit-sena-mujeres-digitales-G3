/*
Variables - ECMAScript 5 - 6+
*/

//ES5
// var curso = "Sena - Mujeres Digitales";
// console.log(curso);

//ES6+
// const edad = 54
// console.log(edad)
// var curso_es6 = "Ejemplo ES6+"
// console.log(curso_es6)


/* 
Funciones
*/

// function saludo() {
//     console.log("Hola como estas")
// }

// saludo()

/*
Funciones tipo flecha o ArrowFunction
*/

// const years = [2000, 2005, 2008, 2010, 2012];
// years.splice(0, 3)
// console.log(years)
// years.forEach(function(valor, indice, array) {
//     console.log(valor)
//     console.log(indice)
//     console.log(array)
// })

// var diferencia_year = years.map((param_year) => {
//     return 2021 - param_year;
// })

// console.log(diferencia_year)


/*
Callbacks
*/

// function mensaje(callback_op) {
//     console.log("Mensaje antes de la llamada del Callback")
//     callback_op()
// }

// function saludo() {
//     console.log('Saludo despuies de la llamada del callback')
// }

//mensaje(saludo)


/****************************************/

// function sumar(digito1, digito2, callback) {
//     let operacion = digito1 + digito2
//     callback(operacion)
// }

// function resultado(operacion) {
//     console.log(operacion)
// }

// sumar(2, 2, resultado)


// setTimeout(function() {
//     console.log("Olvide el nombre del Jefe")
// }, 3000)


// setTimeout(() => console.log("funcion tipo flecha"), 4000)


/*
Promesas
*/

//Traduccion de SetTimeOut a promesa 
// setTimeout(() => console.log("funcion tipo flecha"), 4000)

// const mensaje = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (false)
//             resolve('Esto se ejecuta despues de 4 segundos')
//         else
//             reject('Hubo un error')
//     }, 4000)
// })

// mensaje
//     .then(msj => {
//         console.log(msj)
//     })
//     .catch(error => {
//         console.log(error)
//     })


/*
Async await
*/


function mensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true)
                resolve('Esto se ejecuta despues de 4 segundos')
            else
                reject('Hubo un error')
        }, 4000)
    })
}

async function llamadaAsincrona() {
    console.log('Llamada...')
    const resultado = await mensaje();
    return resultado;
}

function mensaje2() {
    console.log("Hola como estas hoy?")
}


llamadaAsincrona()
    .then(x => console.log(x))
    .catch(error_gatito => console.log(error_gatito))

mensaje2()
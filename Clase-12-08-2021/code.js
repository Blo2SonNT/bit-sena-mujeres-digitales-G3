// let dia_semana = "sabado"

// switch (dia_semana) {
//     case "lunes":
//         console.log("Es lunes y tengo que trabajar")
//         break
//     case "martes":
//         console.log("Es martes y ya estoy valiendo caca")
//         break
//     case "miercoles":
//         console.warn("Es la mitad de la semana, tragame tierra")
//         break
//     default:
//         console.error("No tenemos evaluacion de ese dia")
// }

// var contador = 0
// while (contador <= 5) {
//     console.log("Numero en lista " + contador)
//     contador++
// }
// console.warn("Ejecucion while terminada");
// console.error("---------------------------------------------------");

// contador = 0
// do {
//     console.log("Numero en lista " + contador)
//     contador++
// } while (contador <= 5)

// console.warn("Ejecucion do while terminada");
// console.error("---------------------------------------------------");

// for (let i = 0; i <= 5; i++) {
//     console.log("Numero en lista " + i)
// }

// console.warn("Ejecucion for terminada");

// var input_pagina = document.getElementById("input_ejemplo");
// console.log(input_pagina)


// document.getElementById("titulo_pagina").innerHTML = "<strong>Hola como estas</strong> sena"

// document.getElementById("coca").src = "img/logo-coca.png"


// let nombre = prompt("Cual es tu nombre?")
// if (nombre != null) {
//     document.getElementById("saludo").innerHTML = "Hola " + nombre
// } else {
//     document.getElementById("saludo").innerHTML = "Hola"
// }

// let numero = prompt("Numero de la lista")

// for (let i = 1; i <= numero; i++) {
//     console.log("lista: " + i);
// }

function saludo_usuario(pepito = 1, ubicacion, activo = false, ejemplo) {
    // let contenido = document.getElementById("saludo")

    let nombre = pedir_nombre()
    console.log(pepito)
    document.getElementById("saludo").innerHTML += "<br> Hola " + nombre + " como estas?"
}
/**
Esta funcion pide el nombre del usuario
-------------------------
comentario
-------------------------

COMENTAR
Ctrol + k  ctrl + c 

DESCOMENTAR
Ctrol + k ctrl + u


 */
function pedir_nombre() {
    let nombre = prompt("Cual es tu nombre?")
    return nombre
}
//Funciones tipo flecha - arrow functios
// function saludo() {
//     console.log("Hola como estas")
// }

// saludo2 = (nombre) => {
//     console.log(`Hola ${nombre} como estas`)
// }


// Asincronismo
// console.log("mensaje 1")
// setTimeout(function() {
//     console.warn("Mensaje 2")
// }, 5000)
// console.log("mensaje 3")


//promesas
/*
function se_cumplio() {
    console.log("Se cumplio")
}

let cantidad = 9
const promesas = new Promise((resolve, reject) => {
    if (cantidad == 10) {
        resolve(se_cumplio())
    } else {
        reject("La promesa no se cumplio")
    }
})
*/

// Uso del this
// const registro = {
//     nombre: "Miguel Gustavo",
//     apellido: "Nieto Perez",
//     institucion: "BIT",
//     activo: true,
//     edad: 35,
//     funcion_actualiza: function() {
//         var nombre_completo = this.nombre + ' ' + this.apellido
//         return "el nombre del instructor es: " + nombre_completo + " con la edad de " + parseInt(this.edad + 1)
//     }
// }
// console.log(registro.funcion_actualiza())

//for of

// for (let index = 0; index <= 10; index++) {
//     console.log(index)
// }

// let edades = [45, 12, 85]
let div_resultado = document.getElementById("Resultado")
    // for (const edad of edades) {
    //     div_resultado.innerHTML += edad + "<br>"
    // }


/*
Analizando url con variables

https://www.google.com/search
?
q=flores+rojas
&
rlz=1C1ALOY_esCO969CO969
&
oq=flores+rojas
&
aqs=chrome.0.0i433i512j0i512l9.3183j0j7
&
sourceid=chrome
&
ie=UTF-8
&
asd=asdfa

*/

let url_api = "https://rickandmortyapi.com/api/character/1"
let data_api = fetch(url_api)
data_api.then(res => res.json())
    .then(data_rick => {
        console.log(data_rick.name + " " + data_rick.gender)
        console.warn(data_rick.status)
        if (data_rick.status == "Alive") {
            data_rick.status = "vivo"
        } else {
            data_rick.status = "muerto"
        }
        div_resultado.innerHTML = "El personaje " + data_rick.name + " esta " + data_rick.status

    }).catch(menganito => console.log(menganito))
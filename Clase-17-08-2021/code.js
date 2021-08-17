/*
let nombres = ['vanessa', 'Dayana', 'julieyh', 'Auris']
    // var pos_arr = nombres.indexOf("julieyh") + 1
    // nombres.splice(pos_arr, 0, "Miguel")
    // console.log(nombres)
var resultado_div = document.getElementById("resultado")
nombres.forEach(function(element, index) {
    resultado_div.innerHTML += `<option value='${index}'>${element}</option>`
})
*/


function tabla_multiplicar() {
    let numero = prompt("De que numero quieres la tabla?")
    let maximo = prompt("Hasta que numero quieres la tabla?")
    let acumulado = 0
    for (let i = 1; i <= maximo; i++) {
        resultado = numero * i
        acumulado = resultado + acumulado
        console.log(numero + " X " + i + " = " + resultado)

    }
    console.log(acumulado)

}
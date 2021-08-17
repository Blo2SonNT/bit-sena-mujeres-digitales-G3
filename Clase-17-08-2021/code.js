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

//haciendo calculo con appendchild

function crear_menu() {

    let lista_menu = ['agua', 'hamburguesa', 'malteada', 'arroz chino'];
    var opciones_select = ''
    const div_menu = document.getElementById('menu_restaurante')
    div_menu.className = 'menu'

    let select_list = document.createElement('select')
    div_menu.appendChild(select_list)
    lista_menu.forEach(function(element, index) {
        opciones_select += `<option value='${index}'>${element}</option>`
    })
    let dom_select = document.querySelector('select')
    dom_select.innerHTML = opciones_select
    dom_select.setAttribute('onchange', 'calculo_cuenta()')
    dom_select.setAttribute('id', 'lista_precios')
        // console.log(opciones_select)
}

function calculo_cuenta() {
    precio_comida = document.getElementById('lista_precios').value
    console.log(precio_comida)
    switch (precio_comida) {
        case '0':
            precio_comida = 1000
            break
        case '1':
            precio_comida = 2000
            break
        case '2':
            precio_comida = 4500
            break
        case '3':
            precio_comida = 5000
            break
    }
    var precio_acumulado = 0
    if (localStorage.getItem("total_cuenta") == null) {
        localStorage.setItem('total_cuenta', precio_acumulado)
    }
    var precio_actual = localStorage.getItem('total_cuenta')

    localStorage.setItem('total_cuenta', parseInt(precio_actual) + parseInt(precio_comida))

    let acumulado = localStorage.getItem('total_cuenta')
    let totalidad_div = document.getElementById('cuenta_total')
    totalidad_div.innerHTML = "Total a pagar: $" + acumulado
}


//haciendo calculo del total din appenchild
function calcular_total() {
    if (localStorage.getItem("total_cuenta") == null) {
        localStorage.setItem('total_cuenta', 0)
    }
    var total_acumulado = localStorage.getItem('total_cuenta')
    precio_comida = document.getElementById('lista_precios').value
    var total = parseInt(precio_comida) + parseInt(total_acumulado)
    localStorage.setItem('total_cuenta', total)
    let totalidad_div = document.getElementById('cuenta_total')
    totalidad_div.innerHTML = "Total a pagar: $" + total
}
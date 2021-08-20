//1.	Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.
function suma_numeros() {
    let div_resultado = document.getElementById("resultado_sumatoria")
    let data_user = prompt("Hasta que numero desea hacer la sumatoria?")
    var sumatoria = 0
    for (let x = 1; x <= data_user; x++) {
        sumatoria = parseInt(sumatoria) + parseInt(x)
    }
    div_resultado.innerHTML = "El resultado es: " + sumatoria
        // console.log(sumatoria)
}

//2.	Se necesita validar si un número ingresado por el usuario es par o impar.
function par_impar() {
    let numero_usuario = document.getElementById("numero_par_impar").value
    console.log(numero_usuario)
    let span_resultado = document.getElementById("par_impar_result")
    if (numero_usuario != '' && numero_usuario != null) {
        if (numero_usuario % 2 == 0) {
            console.warn("El numero " + numero_usuario + " es par")
            span_resultado.innerHTML = "El numero " + numero_usuario + " es par"
        } else {
            console.error("El numero " + numero_usuario + " es impar")
            span_resultado.innerHTML = "El numero " + numero_usuario + " es impar"
        }
    } else {
        span_resultado.innerHTML = "Digite el numero a consultar"
    }
}

//3.	La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
function validar_premio() {
    let nombre = document.getElementById("nombre_usuario").value
    let genero = document.getElementById("genero_usuario").value
    let edad = document.getElementById("edad_usuario").value
    let comida_adicional = ""
    let resultado_div = document.getElementById("validacion_usuario")

    if (edad <= 10 && genero == "hombre") {
        console.log("Puede reclamar jugo")
        resultado_div.innerHTML = nombre + " puede reclamar un jugo"
    } else if (edad >= 18) {
        if (genero == "mujer") {
            comida_adicional = "pizza hawaina"
        } else {
            comida_adicional = "pizza tres carnes"
        }
        console.log("Puede reclamar cerveza y adicional una " + comida_adicional)
        resultado_div.innerHTML = nombre + " puede reclamar cerveza y adicional una " + comida_adicional
    } else {
        console.log("Te jodiste")
        resultado_div.innerHTML = nombre + " te jodiste"
    }
}

//6.	Validar cual es el valor de matrícula (1’000.000) que debe pagar un estudiante, teniendo en cuenta que:
function promedio_usuario() {
    let div_result = document.querySelector("#result_matricula")
    let nota = document.getElementById("nota_estudiante").value
        //(Porcentaje de descuento * Valor total) / 100
    nota = parseFloat(nota)
    let descuento = 0
    let valor_total = 0
    let valor = 1000000
    let mensaje = ""
    let puntico = ""

    if (nota < 3) {
        mensaje = "NO tiene descuento... estudie vago. El valor a pagar es: "
    } else if (nota >= 3 && nota <= 4) {
        descuento = 5
        valor_total = (descuento * valor) / 100
        valor = valor - valor_total
        mensaje = "Tiene el derecho del 5% de descuento. El valor a pagar es: "
    } else {
        descuento = 50
        valor_total = (descuento * valor) / 100
        valor = valor - valor_total
        mensaje = "Tiene derecho al 50% de descuento. El valor a pagar es: "
    }
    puntico = new Intl.NumberFormat().format(valor)

    div_result.innerHTML = mensaje + "$" + puntico
}
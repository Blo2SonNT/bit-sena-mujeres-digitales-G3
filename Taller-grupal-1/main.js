function operacion(accion) {
    let span_resultado = document.getElementById("resultado_calculo")
    var operacion_input = document.getElementById("operacion_m")
    if (accion != "C") {
        if (accion != "=") {
            operacion_input.value += accion
        } else {
            let operacion = document.getElementById("operacion_m").value
            let resultado = eval(operacion)
            span_resultado.innerHTML = resultado
        }
    } else {
        span_resultado.innerHTML = ''
        operacion_input.value = ''
    }

}

function guardar_nota() {
    if (sessionStorage.getItem("contador") == null) {
        sessionStorage.setItem("contador", 1)
        contador_nota = 1
    } else {
        contador_nota = sessionStorage.getItem("contador")
    }
    let titulo_nota = document.getElementById("titulo_nota_user").value
    sessionStorage.setItem("titulo_nota_" + contador_nota, titulo_nota)
    contador_nota++
    sessionStorage.setItem("contador", contador_nota)
    mostar_notas()
}

function mostar_notas() {
    var total_notas = sessionStorage.getItem("contador")
    var div_contenedor = document.getElementById("notas_usuario")
    div_contenedor.innerHTML = ''
    for (let x = 0; x < total_notas; x++) {
        var card_nota = document.createElement('div')
        var nota = sessionStorage.getItem("titulo_nota_" + x)
        card_nota.className = "card"
        card_nota.innerHTML = nota
        div_contenedor.appendChild(card_nota)

    }


}
function guardar() {
    let nombre_formulario = document.getElementById("nombres").value

    if (localStorage.getItem("contador") == null) {
        localStorage.setItem("contador", 1)
        var contador_local = 1
    } else {
        var contador_local = localStorage.getItem("contador")
    }

    localStorage.setItem("nombre" + contador_local, nombre_formulario)
    contador_local++
    localStorage.setItem("contador", contador_local)
    mostrar()

}

function mostrar() {
    let total_items = localStorage.getItem("contador")
    let div_resultado = document.getElementById("resultados")
    let html_user = ''
    for (let index = 1; index < total_items; index++) {
        html_user += localStorage.getItem("nombre" + index)
        html_user += " <br> "
    }
    div_resultado.innerHTML = html_user
}
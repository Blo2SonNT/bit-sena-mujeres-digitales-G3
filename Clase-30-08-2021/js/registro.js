function registro() {
    let nombre_user = document.getElementById("nombre_suscripcion").value
    let correo_user = document.getElementById("correo_suscripcion").value

    if (nombre_user == '') {
        error_registro("nombre", nombre_user)
        return
    }
    if (correo_user == '') {
        error_registro("correo", correo_user)
        return
    }

    sessionStorage.setItem("nombre_usuario", nombre_user)
    sessionStorage.setItem("correo_usuario", correo_user)

    Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: `Su registro fue correcto`
    })


}

function error_registro(nombre_campo, valor) {
    if (valor == "") {
        valor = "vacio"
    }
    Swal.fire({
        icon: 'error',
        title: 'Vaya...',
        text: `El campo ${nombre_campo} con el valor: ${valor} no es valido`
    })
}
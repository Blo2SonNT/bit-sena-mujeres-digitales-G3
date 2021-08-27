function registro_user() {
    var expresion_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    var expresion_numeros = /^([0-9])*$/
        // console.log(expresion_correo.test("miguel@correo.com"))
    let nombre = document.getElementById("nombre_user").value
    let apellido = document.getElementById("apellido_user").value
    let correo = document.getElementById("correo_user").value
    let documento = document.getElementById("documento_user").value
        // let tyc = document.getElementById("tyc_user")
    console.log(nombre + "  " + apellido + "  " + correo + "  " + documento)

    if (nombre == "" || nombre == null || nombre == "undefined") {
        error_validacion("nombre", nombre)
        return
    }

    if (apellido == "" || apellido == null || apellido == "undefined") {
        error_validacion("apellido", apellido)
        return
    }

    if (!expresion_numeros.test(documento)) {
        error_validacion("apellido", apellido)
        return
    }

    if (!expresion_correo.test(correo)) {
        error_validacion("apellido", apellido)
        return
    }


    //EVALUACION TERNARIA   --->   condicion ? se cumple : no cumple
    // expresion_numeros.test(documento) ? "" : error_validacion("documento", documento)
    // expresion_correo.test(correo) ? "" : error_validacion("correo", correo)

    localStorage.setItem("nombre", nombre)
    localStorage.setItem("apellido", apellido)
    localStorage.setItem("correo", correo)
    localStorage.setItem("documento", documento)

    Swal.fire({
        icon: 'success',
        title: 'Registro correcto',
    })
}

function error_validacion(campo, texto) {
    Swal.fire({
        icon: 'error',
        title: 'Dato invalido',
        text: `El campo ${campo} con el valor ${texto} no es valido para el formulario de registro`,
    })
}

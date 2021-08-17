function crear_elementos() {

    if (localStorage.getItem("contador_user") == null) {
        localStorage.setItem("contador_user", 1)
    }
    let contador_local = localStorage.getItem("contador_user")
        // let nombre_usuario = prompt("Cual es tu nombre")
    let nombre_usuario = document.getElementById('nombre').value
    console.log(nombre_usuario)
    localStorage.setItem("nombre_user" + contador_local, nombre_usuario)
    localStorage.setItem("contador_user", parseInt(contador_local) + parseInt(1))
}
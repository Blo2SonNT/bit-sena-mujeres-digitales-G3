consumo_api = (pagina = 1, busqueda = false) => {
    var url_pagina = (pagina != 1 && pagina != '') ? pagina.slice(47) : pagina
    let url_api = ''
    if (busqueda == true) {
        let input_busqueda = document.getElementById("input_busqueda_api").value
        url_api = "https://rickandmortyapi.com/api/character?name=" + input_busqueda
    } else {
        url_api = "https://rickandmortyapi.com/api/character?page=" + url_pagina
    }
    console.log(url_api)
    let info_api = fetch(url_api)
    var contenedor_grilla = document.getElementById("api_data")
    contenedor_grilla.innerHTML = ''
    var div_paginacion = document.getElementById("paginacion")

    let condicion_boton_next = ''
    let condicion_boton_prev = ''

    // console.log(info_api)

    info_api.then(res => res.json())
        .then(data_api => {
            console.log(data_api)

            for (const foca_corredora of data_api.results) {
                estado = foca_corredora.status
                if (estado == 'Alive') {
                    estado = "estdo-vivo"
                } else {
                    estado = "estado-muerto"
                }
                contenedor_grilla.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${foca_corredora.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="card-title">${foca_corredora.name}</h6>
                                <div class="${estado}"></div>
                            </div>
                            <p class="card-text">
                                ${foca_corredora.gender} - ${foca_corredora.species}
                            </p>
                        </div>
                    </div>
                </div>
                `
            }

            if (data_api.info.prev == null) {
                condicion_boton_prev = "disabled"
            }

            if (data_api.info.next == null) {
                condicion_boton_next = "disabled"
            }

            div_paginacion.innerHTML = `
                <button type="button" class="btn btn-dark" ${condicion_boton_prev} onclick="consumo_api('${data_api.info.prev}')">Anterior</button>
                <button type="button" class="btn btn-dark" ${condicion_boton_next} onclick="consumo_api('${data_api.info.next}')">Siguiente</button>
            `


        }).catch(error_api_rick => console.log(error_api_rick))
}

consumo_api()
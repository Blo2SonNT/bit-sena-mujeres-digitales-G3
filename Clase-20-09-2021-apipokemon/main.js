/*
<div class="col">
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>

*/


function consumo_api() {
    let contendor_data_api = document.getElementById("data_pokemon")
    contendor_data_api.innerHTML = ''
    let div_paginacion = document.querySelector("#paginacion")
    let url_api = "https://pokeapi.co/api/v2/pokemon/"
    let api_pokemon = fetch(url_api)
    api_pokemon.then(res => res.json())
        .then(data_pokemon => {


            console.log(data_pokemon.results)
            for (const data_individual of data_pokemon.results) {

                var recorrido_pokemon_individual = fetch(data_individual.url)
                recorrido_pokemon_individual.then(res2 => res2.json())
                    .then(data_pokemon_url => {
                        contendor_data_api.innerHTML += `
                        <div class="col">
                            <div class="card">
                                <img src="${data_pokemon_url.sprites.front_default}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${data_pokemon_url.name}</h5>
                                </div>
                            </div>
                        </div>
                        `
                            // console.log(data_pokemon_url.name)
                    })


            }
            div_paginacion.innerHTML = `
                <button class="btn btn-warning"><b>Anterior</b></button>
                <button class="btn btn-warning"><b>Siguiente</b></button>
            `

        })

}

consumo_api()
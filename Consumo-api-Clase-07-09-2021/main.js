let url_api = "https://rickandmortyapi.com/api/character/2"
let info_api = fetch(url_api)

console.log(info_api)

info_api.then(res => res.json())
    .then(data_api => {
        console.log(data_api)
    }).catch(error_api_rick => console.log(error_api_rick))
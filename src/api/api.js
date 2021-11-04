const Api = {
    apiUrl: "https://rickandmortyapi.com/api/character",

    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`)
}

export default Api;
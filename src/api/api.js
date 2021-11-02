const Api = {
    apiUrl: "https://rickandmortyapi.com/api/character",

    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`)
}

export default Api;
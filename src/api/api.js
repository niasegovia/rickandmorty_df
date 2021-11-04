const Api = {
    baseUrl: "https://rickandmortyapi.com/api",
    characterUrl: "https://rickandmortyapi.com/api/character",
    episodesUrl: "https://rickandmortyapi.com/api/episode",


    fetchGetById: id => fetch(`${Api.characterUrl}/${id}`)
}

export default Api;
import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    apiMovies: 'https://api.themoviedb.org/3/search/movie?api_key=4fb4abe3b511bf92ea37da0cbca7c138&query=',
    searchMovie: "",
    queryParam: "query",

    seriesList: [],
    apiSeries: 'https://api.themoviedb.org/3/search/tv?api_key=4fb4abe3b511bf92ea37da0cbca7c138&language=it_IT&query='
})
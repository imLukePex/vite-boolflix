import { reactive } from 'vue'

export const store = reactive({
    moviesList: [],
    apiMovies: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '4fb4abe3b511bf92ea37da0cbca7c138',
    searchMovie: "",
})
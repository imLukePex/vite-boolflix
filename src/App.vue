<script>
// Import Axios
import axios from 'axios';

// Import Store.js
import { store } from './store';

// Import componenti figli
import AppHeader from './components/AppHeader.vue';
import MoviesList from './components/MoviesList.vue';

export default {
    components: {
        AppHeader,
        MoviesList
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getMovies() {
            // Metodo Film
            let moviesURL = store.apiMovies;

            if (store.searchMovie !== "") {
                moviesURL += `&${store.queryParam}=${store.searchMovie}`
            }

            // Chiamata Film
            axios
                .get(moviesURL)
                .then((res => {
                    console.log(res.data.results);
                    store.moviesList = res.data.results;
                }))
                .catch((err) => {
                    console.log("Errori", err);
                });

            // Metodo Serie TV
            let seriesURL = store.apiSeries;
            if (store.searchMovie !== "") {
                seriesURL += `&${store.queryParam}=${store.searchMovie}`
            }

            // Chiamata Serie TV
            axios
                .get(seriesURL)
                .then((res => {
                    console.log(res.data.results);
                    store.seriesList = res.data.results;
                }))
                .catch((err) => {
                    console.log("Errori", err);
                });
        }
    },
    created() {
        this.getMovies();
    }
}
</script>

<template>
    <AppHeader message="BOOLFLIX" @performSearch="getMovies" />
    <main>
        <MoviesList />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';

main {
    padding-top: 40px;
}
</style>

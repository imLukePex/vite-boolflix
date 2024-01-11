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
            // Chiamata Movies
            axios
                .get(store.apiMovies)
                .then((res => {
                    console.log(res.data.results);
                    store.moviesList = res.data.results;
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
    <AppHeader message="BOOLFLIX" />
    <MoviesList />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

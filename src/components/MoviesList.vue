<script>
import MovieCard from './MovieCard.vue';

import { store } from '../store';

export default {
    name: 'MoviesList',
    components: {
        MovieCard
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div v-for="movie in store.moviesList" key="movie.id" class="col-6 col-md-4 col-lg-3">
                <MovieCard :info="movie" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>

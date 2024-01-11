<script>
import MovieCard from './MovieCard.vue';

export default {
    name: 'MoviesList',
    components: {
        MovieCard
    }
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3">
                <MovieCard />
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <MovieCard />
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <MovieCard />
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <MovieCard />
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <MovieCard />
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <MovieCard />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>

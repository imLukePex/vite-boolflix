<script>
import AppHeader from './components/AppHeader.vue';
import MoviesList from './components/MoviesList.vue';

export default {
    components: {
        AppHeader,
        MoviesList
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

<script>

export default {
    name: 'MovieCard',
    props: {
        info: Object
    }
}
</script>

<template>
    <div class="movie text-center">
        <img class="img-fluid mb-3" src="" alt="">
        <h4>Titolo: {{ info.title }}</h4>
        <div>Titolo Originale: {{ info.original_title }}</div>
        <div>Lingua: {{ info.original_language }}</div>
        <div>Voto: {{ info.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba($color: #000, $alpha: 0.15);
}
</style>

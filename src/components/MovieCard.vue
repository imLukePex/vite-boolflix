<script>

export default {
    name: 'MovieCard'
}
</script>

<template>
    <div class="movie text-center">
        <img class="img-fluid mb-3" src="" alt="">
        <h4>Titolo Film</h4>
        <div>Titolo Film Originale</div>
        <div>Lingua</div>
        <div>Voto</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

img {
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba($color: #000, $alpha: 0.15);
}
</style>

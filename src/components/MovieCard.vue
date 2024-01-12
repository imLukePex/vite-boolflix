<script>

export default {
    name: 'MovieCard',
    props: {
        info: Object
    },
    data() {
        return {
            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png',
                ru: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/400px-Flag_of_Russia.svg.png',
                pt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/400px-Flag_of_Portugal.svg.png',
                ja: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/400px-Flag_of_Japan.svg.png',
                de: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/400px-Flag_of_Germany.svg.png'
            }
        }
    },
    computed: {
        voteRate() {
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script>

<template>
    <!-- Contenitore generale card -->
    <div class="movie-card">
        <!-- Contenitore della locandina del film/serie tv -->
        <div class="box-poster">
            <img class="poster img-fluid mb-3" :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="cover">
        </div>
        <!-- Contenitore con le informazioni del film/serie tv -->
        <div class="box-informations">
            <!-- Titoli -->
            <h4 class="info title"><strong>Titolo:</strong> {{ info.title }}</h4>
            <h5 class="info o-title"><strong>Titolo Originale:</strong> {{ info.original_title }}</h5>

            <!-- Lingua -->
            <div class="box-language">
                <img class="flag" :src="flags[info.original_language]" alt="info.original_language">
            </div>

            <!-- Voto -->
            <div class="info rate"><strong>Voto:</strong>
                <span v-for="i in 5">
                    <i :class="i <= voteRate ? 'fa-solid fa-star' : 'fa-solid fa-star-o'"></i>
                </span>
            </div>

            <!-- Overview -->
            <div class="info overview"><strong>Overview:</strong> {{ info.overview }}</div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.movie-card {
    position: relative;
    margin-bottom: 20px;

    &:hover .box-informations {
        display: block;
    }

    .box-poster {
        width: 100%;

        .poster {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 0 6px 3px rgba($color: #000, $alpha: 0.15);
        }
    }

    .box-informations {
        display: none;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #ffff;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        transition: transform 3s;


        .flag {
            width: 25px;
        }

        .info {
            font-size: 12px;
            margin: 10px 0;
        }

        span {
            margin-left: 5px;
            color: rgb(255, 191, 0);
        }


    }
}
</style>
